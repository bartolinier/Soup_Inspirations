import React, { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiLeafFill } from "react-icons/ri";
import parse from "html-react-parser";

import { UserContext } from "../../contexts/user.context";
import { FavoritesContext } from "../../contexts/favorites.context";

import {
  RecipeContainer,
  RecipeLike,
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
} from "./recipe.component.styles";

export default function Recipe() {
  const { currentUser } = useContext(UserContext);

  const { favorites, setFavorites } = useContext(FavoritesContext);
  const { id } = useParams();

  const navigate = useNavigate();

  const recipeID = { id };

  const [soupImage, setSoupImage] = useState("");

  const [soupName, setSoupName] = useState("");
  const [preparationTime, setPreparation] = useState("");
  const [vegetarian, setVegetarian] = useState("");
  const [soupIngredients, setSoupIngredients] = useState("");

  const [steps, setSteps] = useState("");
  const [tips, setTips] = useState("");

  const [favRecipeID, setFavRecipeID] = useState("");

  // Handle add recipe to favorites

  const handleAddToFavorites = (id) => {
    if (
      !favorites.some((el) => el.user === currentUser.uid && el.recipeID === id)
    ) {
      setFavorites([...favorites, { recipeID: id, user: currentUser.uid }]);
    } else {
      const newFavorites = favorites.filter(
        (fav) => fav.recipeID != id || fav.user != currentUser.uid
      );

      setFavorites(newFavorites);
    }
  };

  //    Find recipe by ID in database and show in component

  const SHOW_RECIPE = process.env.REACT_APP_SERVER_SHOW_RECIPE;

  const handleShowRecipe = async () => {
    await fetch(`${SHOW_RECIPE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(recipeID),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.name === "CastError") {
          navigate("/recipes");
          return;
        }
        setFavRecipeID(data[0]._id);
        setSoupImage(data[0].imageUrl);
        setSoupName(data[0].soupName);
        setSoupIngredients(
          data[0].ingredientsArray.map((ingredient, index) => {
            return (
              <IngredientContainer key={index}>
                <IngredientQuantity>
                  {ingredient.ingredientQuantity}
                </IngredientQuantity>
                <IngredientUnit>{ingredient.ingredientUnit}</IngredientUnit>
                <IngredientName>{ingredient.ingredientName}</IngredientName>
              </IngredientContainer>
            );
          })
        );
        setPreparation(data[0].preparationTime);
        setVegetarian(data[0].vegetarian);
        setSteps(parse(data[0].steps));
        setTips(parse(data[0].tips));
      })

      .catch((error) => {
        console.error("Error:", error);
        navigate("/recipes");
      });
  };

  useEffect(() => {
    handleShowRecipe();
  }, []);

  return (
    <RecipeContainer>
      <SoupName>{soupName}</SoupName>
      <RecipeImageContainer>
        {currentUser ? (
          <RecipeLike
            onClick={() => {
              handleAddToFavorites(favRecipeID);
            }}
          >
            {currentUser &&
            favorites.some(
              (el) => el.user === currentUser.uid && el.recipeID === favRecipeID
            ) ? (
              <AiFillHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </RecipeLike>
        ) : (
          <RecipeLike
            onClick={() =>
              alert("Only logged users can add recipes to favorites!")
            }
          >
            <AiOutlineHeart />
          </RecipeLike>
        )}
        {<RecipeImage src={soupImage} />}
      </RecipeImageContainer>

      <PreparationTimeContainer>
        <PreparationTimeLabel>Preparation time (minutes):</PreparationTimeLabel>
        <PreparationTimeValue> {preparationTime} </PreparationTimeValue>
      </PreparationTimeContainer>

      <VegetarianContainer>
        <VegetarianLabel>Vegetarian: </VegetarianLabel>
        {vegetarian === true ? (
          <VegetarianValue style={{ color: "green" }}>
            yes <RiLeafFill style={{ color: "green" }} />
          </VegetarianValue>
        ) : (
          <VegetarianValue style={{ color: "#cd2b15" }}>no</VegetarianValue>
        )}
      </VegetarianContainer>

      <IngredientsListContainer>
        <IngredientsLabel>Ingredients: </IngredientsLabel>
        {soupIngredients}
      </IngredientsListContainer>

      <StepsLabel>Steps</StepsLabel>
      <StepsContainer>{steps}</StepsContainer>
      <TipsLabel>Tips</TipsLabel>
      <TipsContainer>{tips}</TipsContainer>
    </RecipeContainer>
  );
}
