import React from "react";
import { NavLink } from "react-router-dom";

import { AlertButton } from "../alert-button.component/alert-button.component.styles";

import {
  FavListElementContainer,
  FavRecipeLink,
  FavListSoupNameAndImgContainer,
  FavListElementImgContainer,
  FavListElementImg,
  FavListElementSoupName,
} from "./favorites-list-element.component.styles";

export default function FavoritesListElement({
  recipeID,
  recipeImageUrl,
  action,
  recipeSoupName,
  label,
}) {
  return (
    <FavListElementContainer>
      <FavRecipeLink to={`/recipes/${recipeID}`}>
        <FavListSoupNameAndImgContainer>
          <FavListElementImgContainer>
            <FavListElementImg src={`${recipeImageUrl}`} alt="recipe image" />
          </FavListElementImgContainer>

          <FavListElementSoupName>{recipeSoupName}</FavListElementSoupName>
        </FavListSoupNameAndImgContainer>
      </FavRecipeLink>
      <AlertButton onClick={action}>{label}</AlertButton>
    </FavListElementContainer>
  );
}
