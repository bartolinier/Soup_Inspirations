import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RiLeafFill } from "react-icons/ri";

import { UserContext } from "../../contexts/user.context";

import { storage } from "../../utils/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { v4 } from "uuid";

import ReactQuill from "react-quill";
import { quillFormats, quillModules } from "../../utils/quill/quill";

import parse from "html-react-parser";

import {
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
  IngredientContainer,
  IngredientQuantity,
  IngredientUnit,
  IngredientName,
  StepsLabel,
  TipsLabel,
  StepsContainer,
  TipsContainer,
  AddReipeContainer,
  AddRecipeHeader,
} from "./add-recipe-component.styles";

export default function AddRecipe({}) {
  const [stepsValue, setStepsValue] = useState("");

  const [tipsValue, setTipsValue] = useState("");

  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [checkedInput, setCheckedInput] = useState(false);

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
  ];

  const defaultFormFields = {
    soupName: "",
    preparationTime: 1,
    vegetarian: checkedInput,
    imageUrl: "",
    userID: currentUser.uid,
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { soupName, preparationTime } = formFields;

  useEffect(() => {
    setFormFields({ ...formFields, steps: stepsValue });
  }, [stepsValue]);

  useEffect(() => {
    setFormFields({ ...formFields, tips: tipsValue });
  }, [tipsValue]);

  const handleCheckboxChange = (event) => {
    const { name, checked, value } = event.target;
    setCheckedInput(!checkedInput);

    setFormFields({ ...formFields, [name]: checked });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const [ingredientsArray, setIngredientsArray] = useState([]);

  const [currentUnitValue, setCurrentUnitValue] = useState("");

  const defaultIngredientFields = {
    ingredientId: "",
    ingredientName: "",
    ingredientQuantity: "",
    ingredientUnit: currentUnitValue,
  };

  const [ingredientFields, setIngredientFields] = useState(
    defaultIngredientFields
  );

  const { ingredientName, ingredientQuantity, ingredientUnit, ingredientId } =
    ingredientFields;

  const handleIngredientChange = (event) => {
    const { name, value } = event.target;

    setIngredientFields({
      ...ingredientFields,
      [name]: value,
      ingredientId: Math.floor(Math.random() * 10000),
    });
  };

  const handleUnitChange = (event) => {
    const { value, name } = event.target;
    setCurrentUnitValue(value);
    setIngredientFields({ ...ingredientFields, ingredientUnit: value });
  };

  const [ingredients, setIngredients] = useState([]);

  const handleIngredientBuild = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, ingredientFields]);
    ingredientsArray.push(ingredientFields);

    setFormFields({ ...formFields, ingredientsArray: ingredientsArray });

    setIngredientFields(defaultIngredientFields);
  };

  const handleRemoveIngredient = (id) => {
    const filteredArray = ingredientsArray.filter(
      (ingredient) => ingredient.ingredientId !== id
    );

    setIngredientsArray(filteredArray);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const uploadFile = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        setFormFields({ ...formFields, imageUrl: url });
      });
    });
  };

  const [uploadButton, setUploadButton] = useState(false);

  const handleSendRecipe = async () => {
    await fetch("http://localhost:4444/user/add-recipe", {
      // Adding method type
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formFields),
    });
  };

  const handleSubmit = (e) => {
    setImageUrl("");
    setStepsValue("");
    setTipsValue("");
    setCheckedInput(false);
    resetFormFields();
    setFormFields(defaultFormFields);
    setIngredientFields(defaultIngredientFields);
    setIngredientsArray([]);
    console.log(formFields);
    handleSendRecipe();
  };

  return (
    <AddReipeContainer>
      <AddRecipeHeader>Add recipe</AddRecipeHeader>

      <form>
        <div>
          <label htmlFor="soup-name">Soup name (max 50 char.)</label>
          <input
            required
            type="text"
            id="soup-name"
            name="soupName"
            value={soupName}
            onChange={handleChange}
            placeholder="Type soup name..."
            maxLength={50}
          />
        </div>

        <div>
          <label htmlFor="prep-time">Preparation time (minutes)</label>
          <input
            required
            type="number"
            id="prep-time"
            name="preparationTime"
            value={preparationTime}
            onChange={handleChange}
            placeholder="Type preparation time in minutes..."
            min={1}
          />
        </div>
        <div>
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
        </div>

        <div>
          <h2>Ingredients</h2>
          {ingredientsArray.length === 0 ? (
            <p> Add at least one ingredient!</p>
          ) : null}
          <div>
            {ingredientsArray.map((ingredient, index) => {
              return (
                <div key={index}>
                  <p>{ingredient.ingredientName}</p>
                  <p>{ingredient.ingredientQuantity}</p>
                  <p>{ingredient.ingredientUnit}</p>
                  <button
                    onClick={() => {
                      handleRemoveIngredient(ingredient.ingredientId);
                    }}
                  >
                    delete ingredient
                  </button>
                </div>
              );
            })}
          </div>
          <input
            type="text"
            id="ingredient-name"
            name="ingredientName"
            value={ingredientName}
            onChange={handleIngredientChange}
            placeholder="Type ingredient..."
          />
          <input
            type="number"
            id="ingredient-qty"
            name="ingredientQuantity"
            value={ingredientQuantity}
            onChange={handleIngredientChange}
            placeholder="Type quantity"
            min={0}
          />
          <select onChange={handleUnitChange}>
            {unitOptions.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
          {!ingredientName || !ingredientQuantity || !ingredientUnit ? (
            <>
              <button disabled onClick={handleIngredientBuild}>
                Add ingredient
              </button>
              <p>Please fill out all fields to add ingredient.</p>
            </>
          ) : (
            <button onClick={handleIngredientBuild}>Add ingredient</button>
          )}

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
          <label htmlFor="recipe-photo">Upload image (max. size: 1MB)</label>
          <input
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
                } else {
                  setUploadButton(false);
                }
              }
            }}
          />
          {!uploadButton ? (
            <button disabled onClick={uploadFile}>
              Upload image
            </button>
          ) : (
            <button onClick={uploadFile}>Upload image</button>
          )}
        </div>
        <br />
        <br />

        <h1>Live preview</h1>
        <br />
        <br />

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

        {/* {<img style={{ width: "20%" }} src={imageUrl} />}
        <h2>Soup Name: {formFields.soupName}</h2>
        <h2>Preparation time (minutes): {formFields.preparationTime} </h2>
        <h2>Vegetarian: </h2>
        {checkedInput === true ? <p>yes</p> : <p>no</p>}
        <h2>Ingredients: </h2>
        <div>
          {ingredientsArray.map((ingredient, index) => {
            return (
              <div key={index}>
                <p>{ingredient.ingredientName}</p>
                <p>{ingredient.ingredientQuantity}</p>
                <p>{ingredient.ingredientUnit}</p>
              </div>
            );
          })}
        </div>
        <h2>Steps</h2>
        <div style={{ height: "100%", padding: "3rem" }}>
          {parse(stepsValue)}
        </div>
        <h2>Tips</h2>
        <div>{parse(tipsValue)}</div> */}
        {!soupName ||
        !preparationTime ||
        ingredientsArray.length === 0 ||
        !stepsValue ||
        currentUser.uid != process.env.REACT_APP_FIREBASE_IDAD ? (
          <>
            <button type="submit" disabled onClick={handleSubmit}>
              Save recipe (Admin account only!)
            </button>
            <p>Please fill out all fields to save Your recipe</p>
          </>
        ) : (
          <button type="submit" onClick={handleSubmit}>
            Save recipe
          </button>
        )}
      </form>

      <button onClick={() => navigate("/")}>Cancel</button>
    </AddReipeContainer>
  );
}
