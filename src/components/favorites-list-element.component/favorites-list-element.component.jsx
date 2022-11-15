import React from "react";

import AlertButton from "../alert-button.component/alert-button.component";
import {
  FavListElementContainer,
  FavRecipeLink,
  FavListSoupNameAndImgContainer,
  FavListElementImgContainer,
  FavListElementImg,
  FavListElementSoupName,
  FavListElementLinkContainer,
  FavListDeleteButtonContainer,
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
      <FavListElementLinkContainer>
        <FavRecipeLink to={`/recipes/${recipeID}`}>
          <FavListSoupNameAndImgContainer>
            <FavListElementImgContainer>
              <FavListElementImg src={`${recipeImageUrl}`} alt="recipe image" />
            </FavListElementImgContainer>

            <FavListElementSoupName>{recipeSoupName}</FavListElementSoupName>
          </FavListSoupNameAndImgContainer>
        </FavRecipeLink>
      </FavListElementLinkContainer>
      <FavListDeleteButtonContainer>
        <AlertButton action={action} label={label}>
          {label}
        </AlertButton>
      </FavListDeleteButtonContainer>
    </FavListElementContainer>
  );
}
