import React from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import {
  RecipeThumbContainer,
  RecipeThumbLink,
  ThumbImageContainer,
  ThumbImage,
  ThumbRecipeNameContainer,
  ThumbRecipeNameText,
  RecipeThumbLike,
} from "./recipe-thumb.styles";

export default function RecipeThumb({
  recipeID,
  recipeImageUrl,
  recipeSoupName,
  currentUser,
  handleAddToFavorites,
  favorites,
}) {
  return (
    <RecipeThumbContainer>
      <RecipeThumbLink to={`${recipeID}`}>
        <ThumbImageContainer>
          <ThumbImage src={recipeImageUrl} alt="recipe image" />
        </ThumbImageContainer>
        <ThumbRecipeNameContainer>
          <ThumbRecipeNameText>{recipeSoupName}</ThumbRecipeNameText>
        </ThumbRecipeNameContainer>
      </RecipeThumbLink>

      {currentUser ? (
        <RecipeThumbLike
          onClick={() => {
            handleAddToFavorites(recipeID);
          }}
        >
          {currentUser &&
          favorites.some(
            (el) => el.user === currentUser.uid && el.recipeID === recipeID
          ) ? (
            <AiFillHeart />
          ) : (
            <AiOutlineHeart />
          )}
        </RecipeThumbLike>
      ) : (
        <RecipeThumbLike
          onClick={() =>
            alert("Only logged users can add recipes to favorites!")
          }
        >
          <AiOutlineHeart />
        </RecipeThumbLike>
      )}
    </RecipeThumbContainer>
  );
}
