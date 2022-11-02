import {
  reauthenticateWithPhoneNumber,
  updateCurrentUser,
} from "firebase/auth";
import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { FavoritesContext } from "../../contexts/favorites.context";
import FavoritesListElement from "../../components/favorites-list-element.component/favorites-list-element.component";

import {
  FavoritesListContainer,
  FavoritesListHeader,
} from "./favorites.component.styles";
import UniversalButton from "../../components/universal-button.component/universal-button.component";
export default function Favorites() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const { favorites, setFavorites } = useContext(FavoritesContext);

  const [recipesFromDB, setRecipesfromDB] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4444/recipes-list`)
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

      {favorites.some((el) => el.user === currentUser.uid) ? (
        recipesFromDB &&
        recipesFromDB.map((recipe, index) => {
          if (
            favorites.some(
              (el) => el.user === currentUser.uid && el.recipeID === recipe._id
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
                label="Remove from Favorites"
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
      )}
    </FavoritesListContainer>
  );
}
{
  /* <div key={index}>
                <Link to={`/recipes/${recipe._id}`}>
                  <div>
                    <img
                      src={`${recipe.imageUrl}`}
                      width={"100px"}
                      alt="recipe image"
                    />
                    {recipe.soupName}
                  </div>
                </Link>
                <button
                  onClick={() => {
                    handleRemoveFromFavorites(recipe._id);
                  }}
                >
                  Remove from list
                </button>
              </div> */
}
