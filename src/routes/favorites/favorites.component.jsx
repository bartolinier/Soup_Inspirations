import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import UniversalButton from "../../components/universal-button.component/universal-button.component";
import Spinner from "../../components/spinner.component/spinner.component";

import { FavoritesContext } from "../../contexts/favorites.context";
import FavoritesListElement from "../../components/favorites-list-element.component/favorites-list-element.component";

import {
  FavoritesListContainer,
  FavoritesListHeader,
  LoadingContainer,
} from "./favorites.component.styles";

export default function Favorites() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const { favorites, setFavorites } = useContext(FavoritesContext);

  const [recipesFromDB, setRecipesfromDB] = useState(null);

  const RECIPES_LINK = process.env.REACT_APP_SERVER_GET_RECIPES;

  useEffect(() => {
    fetch(`${RECIPES_LINK}`)
      .then((response) => response.json())

      .then((data) => {
        setRecipesfromDB(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleRemoveFromFavorites = (id) => {
    const newFavorites = favorites.filter(
      (fav) => fav.recipeID != id || fav.user != currentUser.uid
    );
    setFavorites(newFavorites);
  };

  return (
    <FavoritesListContainer>
      <FavoritesListHeader>Your Favorites</FavoritesListHeader>
      {recipesFromDB ? (
        favorites.some((el) => el.user === currentUser.uid) ? (
          recipesFromDB &&
          recipesFromDB.map((recipe, index) => {
            if (
              favorites.some(
                (el) =>
                  el.user === currentUser.uid && el.recipeID === recipe._id
              )
            ) {
              return (
                <FavoritesListElement
                  key={index}
                  recipeID={recipe._id}
                  recipeImageUrl={recipe.imageUrl}
                  recipeSoupName={recipe.soupName}
                  action={() => {
                    handleRemoveFromFavorites(recipe._id);
                  }}
                  label="Remove"
                />
              );
            }
          })
        ) : (
          <>
            <p>No favorites...</p>
            <UniversalButton
              label="Go to Recipes"
              action={() => {
                navigate("/recipes");
              }}
            />
          </>
        )
      ) : (
        <LoadingContainer>
          <Spinner />
          <p>Please wait...</p>
        </LoadingContainer>
      )}
    </FavoritesListContainer>
  );
}
