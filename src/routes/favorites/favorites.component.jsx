import { updateCurrentUser } from "firebase/auth";
import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { FavoritesContext } from "../../contexts/favorites.context";

export default function Favorites() {
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
    <>
      <p>wnjcbij</p>
      <p>wnjcbij</p>
      <p>wnjcbij</p>
      <p>wnjcbij</p>

      {recipesFromDB &&
        recipesFromDB.map((recipe, index) => {
          if (
            favorites.some(
              (el) => el.user === currentUser.uid && el.recipeID === recipe._id
            )
          ) {
            return (
              <div key={index}>
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
              </div>
            );
          }
        })}
    </>
  );
}
