import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RiLeafFill } from "react-icons/ri";

import { UserContext } from "../../contexts/user.context";

import AlertButton from "../../components/alert-button.component/alert-button.component";

import { storage } from "../../utils/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { v4 } from "uuid";

import ReactQuill from "react-quill";
import { quillFormats, quillModules } from "../../utils/quill/quill";

import parse from "html-react-parser";

import {
  AddRecipeContainer,
  AddRecipeHeader,
  AddRecipeForm,
  AddRecipeInputContainer,
  AddIngredientInputContainer,
  AddRecipeInput,
  AddRecipeSelect,
  AddRecipeOption,
  RecipeContainer,
  SoupName,
  RecipeImageContainer,
  RecipeImage,
  PreparationTimeContainer,
  PreparationTimeLabel,
  PreparationTimeValue,
  VegetarianContainer,
  VegetarianLabel,
  VegetarianValue,
  IngredientsLabel,
  IngredientsListContainer,
  IngredientList,
  IngredientContainer,
  IngredientQuantity,
  IngredientUnit,
  IngredientName,
  StepsLabel,
  TipsLabel,
  StepsContainer,
  TipsContainer,
  AlertTextContainer,
  AlertText,
} from "./add-recipe-component.styles";
import UniversalButton from "../../components/universal-button.component/universal-button.component";

export default function AddRecipe({}) {
  const [stepsValue, setStepsValue] = useState("");

  const [tipsValue, setTipsValue] = useState("");

  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(UserContext);

  // checkedInput declaration for defaultFormFields
  const [checkedInput, setCheckedInput] = useState(false);

  // Ingredient unit options
  const unitOptions = [
    {
      label: "---Choose unit---",
      value: "",
    },
    {
      label: "g",
      value: "g",
    },
    {
      label: "dkg",
      value: "dkg",
    },
    {
      label: "kg",
      value: "kg",
    },
    {
      label: "teespoon",
      value: "teespoon",
    },
    {
      label: "tablespoon",
      value: "tablespoon",
    },
    {
      label: "ml",
      value: "ml",
    },
    {
      label: "L",
      value: "L",
    },
    {
      label: "pcs.",
      value: "pcs.",
    },
    {
      label: "pinch",
      value: "pinch",
    },
  ];

  // Add recipe form, excluding ingredients array, steps and tips

  const defaultFormFields = {
    soupName: "",
    preparationTime: 1,
    vegetarian: checkedInput,
    imageUrl: "",
    userID: currentUser.uid,
  };

  // Set default form fields
  const [formFields, setFormFields] = useState(defaultFormFields);

  // Assign soupName and preparationTime to formFields, handled by handleChange function
  const { soupName, preparationTime } = formFields;

  // Add steps and tips to form Fields

  useEffect(() => {
    setFormFields({ ...formFields, steps: stepsValue });
  }, [stepsValue]);

  useEffect(() => {
    setFormFields({ ...formFields, tips: tipsValue });
  }, [tipsValue]);

  // Chackbox handle
  const handleCheckboxChange = (event) => {
    // destructuring
    const { name, checked } = event.target;

    // handle checkbox false/true flag
    setCheckedInput(!checkedInput);

    // Add checkbox value to formFields
    setFormFields({ ...formFields, [name]: checked });
  };

  // Main handleChange function, adding destructured input name and value (key:value pair)
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // Handling Ingredients -------------------------------------------

  // // handle Unit value
  // const [currentUnitValue, setCurrentUnitValue] = useState("");

  // ************************************************** Single ingredient ******************
  // Default single ingredient fields Object
  const defaultIngredientFields = {
    ingredientId: "",
    ingredientName: "",
    ingredientQuantity: "",
    ingredientUnit: "",
  };

  // Assign default ingredient Fields to single ingredient Object
  const [ingredientFields, setIngredientFields] = useState(
    defaultIngredientFields
  );

  // Destructuring
  const { ingredientName, ingredientQuantity, ingredientUnit, ingredientId } =
    ingredientFields;

  // Main handle single ingredient function
  const handleIngredientChange = (event) => {
    const { name, value } = event.target;

    // Add ingredient name and quantity to ingredientFields,
    //  add ingredientId, for handling deleting ingredients from Ingredients Array
    setIngredientFields({
      ...ingredientFields,
      [name]: value,
      ingredientId: Math.floor(Math.random() * 10000),
    });
  };

  // Function for handling single ingredient unit change
  const handleUnitChange = (event) => {
    const { value } = event.target;

    // // assign current unit value
    // setCurrentUnitValue(value);

    // Add ingredient unit to ingredientFields
    setIngredientFields({ ...ingredientFields, ingredientUnit: value });
  };

  // *********************************************************************

  // Main ingredients array, sent to Database
  const [ingredientsArray, setIngredientsArray] = useState([]);

  // handle add ingredient to Ingredients Array which is sent to database

  const handleIngredientAdd = (e) => {
    e.preventDefault();

    // Add ingredientFields to ingredients Array
    ingredientsArray.push(ingredientFields);

    // Add ingredientsArray to Form Fields
    setFormFields({ ...formFields, ingredientsArray: ingredientsArray });

    // Clear single ingredient fields
    setIngredientFields(defaultIngredientFields);
  };

  // Handle remove single ingredient from main ingredients array
  const handleIngredientRemove = (id) => {
    const filteredArray = ingredientsArray.filter(
      (ingredient) => ingredient.ingredientId !== id
    );

    setIngredientsArray(filteredArray);
  };

  // reset Form fields function
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Image upload handle
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const uploadFile = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // add image url to Form fields, after uploading image to Firestore
        setImageUrl(url);
        setFormFields({ ...formFields, imageUrl: url });
      });
    });
  };

  const [uploadButton, setUploadButton] = useState(false);

  // Send Recipe to database

  const ADD_RECIPE_LINK = process.env.REACT_APP_SERVER_ADD_RECIPE;

  const handleSendRecipe = async () => {
    await fetch(`${ADD_RECIPE_LINK}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formFields),
    });
  };

  const handleSubmit = async (e) => {
    try {
      setStepsValue("");
      setTipsValue("");
      setCheckedInput(false);
      resetFormFields();
      setFormFields(defaultFormFields);
      setIngredientFields(defaultIngredientFields);
      setIngredientsArray([]);
      handleSendRecipe();
      navigate("/recipes");
    } catch {
      navigate("/error-page");
    }
  };

  return (
    <AddRecipeContainer>
      <AddRecipeHeader>Add recipe (Admin account only!)</AddRecipeHeader>
      <p>
        ...but feel free to play with form :-) Live preview of added recipe
        below.
      </p>

      <AddRecipeForm>
        <AddRecipeInputContainer>
          <label htmlFor="soup-name">Soup name (max 20 char.)</label>
          <AddRecipeInput
            variant="max-length"
            required
            type="text"
            id="soup-name"
            name="soupName"
            value={soupName}
            onChange={handleChange}
            placeholder="Type soup name..."
            maxLength={20}
          />
        </AddRecipeInputContainer>

        <AddRecipeInputContainer>
          <label htmlFor="prep-time">Preparation time (minutes)</label>
          <AddRecipeInput
            variant="short"
            required
            type="number"
            id="prep-time"
            name="preparationTime"
            value={preparationTime}
            onChange={handleChange}
            min={1}
          />
        </AddRecipeInputContainer>
        <AddRecipeInputContainer>
          <label htmlFor="vege">Vegetarian</label>
          <input
            required
            type="checkbox"
            id="vegetarian"
            checked={checkedInput}
            name="vegetarian"
            value={checkedInput}
            onChange={handleCheckboxChange}
          />
        </AddRecipeInputContainer>

        <>
          <h2>Ingredients</h2>
          {ingredientsArray.length === 0 ? (
            <AlertTextContainer>
              <AlertText> Add at least one ingredient!</AlertText>
            </AlertTextContainer>
          ) : null}
          <div>
            {ingredientsArray.map((ingredient, index) => {
              return (
                <IngredientList key={index}>
                  <IngredientContainer>
                    <IngredientQuantity>
                      {ingredient.ingredientQuantity}
                    </IngredientQuantity>
                    <IngredientUnit>{ingredient.ingredientUnit}</IngredientUnit>

                    <IngredientName>{ingredient.ingredientName}</IngredientName>

                    <AlertButton
                      label={"delete ingredient"}
                      action={() => {
                        handleIngredientRemove(ingredient.ingredientId);
                      }}
                    ></AlertButton>
                  </IngredientContainer>
                </IngredientList>
              );
            })}
          </div>
          <AddIngredientInputContainer>
            <AddRecipeInput
              type="text"
              id="ingredient-name"
              name="ingredientName"
              value={ingredientName}
              onChange={handleIngredientChange}
              placeholder="Type ingredient..."
            />
            <AddRecipeInput
              type="number"
              id="ingredient-qty"
              name="ingredientQuantity"
              value={ingredientQuantity}
              onChange={handleIngredientChange}
              placeholder="Type quantity"
              min={0}
            />
            <AddRecipeSelect onChange={handleUnitChange}>
              {unitOptions.map((option, index) => {
                return (
                  <AddRecipeOption key={index} value={option.value}>
                    {option.label}
                  </AddRecipeOption>
                );
              })}
            </AddRecipeSelect>
            {!ingredientName || !ingredientQuantity || !ingredientUnit ? (
              <>
                <UniversalButton
                  disabled={true}
                  label="Add ingredient"
                  action={handleIngredientAdd}
                >
                  Add ingredient
                </UniversalButton>
                <AlertTextContainer>
                  <AlertText>
                    Please fill out all fields above to add ingredient!
                  </AlertText>
                </AlertTextContainer>
              </>
            ) : (
              <UniversalButton
                label="Add ingredient"
                action={handleIngredientAdd}
              ></UniversalButton>
            )}
          </AddIngredientInputContainer>
          <h2>Steps</h2>

          <ReactQuill
            theme="snow"
            name="steps"
            formats={quillFormats}
            modules={quillModules}
            value={stepsValue}
            onChange={setStepsValue}
          />

          <h2>Tips</h2>
          <ReactQuill
            theme="snow"
            name="tips"
            formats={quillFormats}
            modules={quillModules}
            value={tipsValue}
            onChange={setTipsValue}
          />
          <br></br>
          <label htmlFor="recipe-photo">
            Upload image (max. size: 1MB) - Admin only!
          </label>
          <input
            disabled={currentUser.uid != process.env.REACT_APP_IDAD}
            type="file"
            name="recipe-photo"
            id="recipe-photo"
            accept="image/*"
            onChange={(event) => {
              {
                if (
                  event.target.files[0] &&
                  event.target.files[0].size < 1000000
                ) {
                  setImageUpload(event.target.files[0]);
                  setUploadButton(true);
                } else if (
                  event.target.files[0] &&
                  event.target.files[0].size > 1000000
                ) {
                  alert("File is too big");
                  setImageUpload(null);
                  setUploadButton(false);
                } else if (currentUser.uid != process.env.REACT_APP_IDAD) {
                  setUploadButton(false);
                } else {
                  setUploadButton(false);
                }
              }
            }}
          />
          {!uploadButton ? (
            <UniversalButton
              label="Upload image"
              disabled={true}
              action={uploadFile}
            ></UniversalButton>
          ) : (
            <UniversalButton
              label="Upload image"
              action={uploadFile}
            ></UniversalButton>
          )}
        </>

        <h1>Live preview</h1>

        <RecipeContainer>
          <SoupName>{formFields.soupName}</SoupName>
          <RecipeImageContainer>
            {<RecipeImage src={imageUrl} alt={"Soup Image Area"} />}
          </RecipeImageContainer>

          <PreparationTimeContainer>
            <PreparationTimeLabel>
              Preparation time (minutes):
            </PreparationTimeLabel>
            <PreparationTimeValue>
              {formFields.preparationTime}
            </PreparationTimeValue>
          </PreparationTimeContainer>

          <VegetarianContainer>
            <VegetarianLabel>Vegetarian: </VegetarianLabel>
            {checkedInput === true ? (
              <VegetarianValue style={{ color: "green" }}>
                yes <RiLeafFill style={{ color: "green" }} />
              </VegetarianValue>
            ) : (
              <VegetarianValue style={{ color: "#cd2b15" }}>no</VegetarianValue>
            )}
          </VegetarianContainer>

          <IngredientsListContainer>
            <IngredientsLabel>Ingredients: </IngredientsLabel>
            <div>
              {ingredientsArray.map((ingredient, index) => {
                return (
                  <IngredientContainer key={index}>
                    <IngredientQuantity>
                      {ingredient.ingredientQuantity}
                    </IngredientQuantity>
                    <IngredientUnit>{ingredient.ingredientUnit}</IngredientUnit>

                    <IngredientName>{ingredient.ingredientName}</IngredientName>
                  </IngredientContainer>
                );
              })}
            </div>
          </IngredientsListContainer>

          <StepsLabel>Steps</StepsLabel>
          <StepsContainer>{parse(stepsValue)}</StepsContainer>
          <TipsLabel>Tips</TipsLabel>
          <TipsContainer>{parse(tipsValue)}</TipsContainer>
        </RecipeContainer>

        {(!soupName ||
          !preparationTime ||
          ingredientsArray.length === 0 ||
          !stepsValue) &&
        currentUser.uid !== process.env.REACT_APP_IDAD ? (
          <>
            <UniversalButton
              disabled={true}
              label="Save recipe (Admin account only!)"
              type="submit"
              action={handleSubmit}
            ></UniversalButton>
            <AlertText>
              Please fill out all fields to save Your recipe!
            </AlertText>
          </>
        ) : (
          <UniversalButton
            disabled={
              !soupName ||
              !preparationTime ||
              ingredientsArray.length === 0 ||
              !stepsValue
            }
            label="Save"
            type="submit"
            action={handleSubmit}
          ></UniversalButton>
        )}
      </AddRecipeForm>

      <AlertButton label={"Cancel"} action={() => navigate("/")}></AlertButton>
    </AddRecipeContainer>
  );
}
