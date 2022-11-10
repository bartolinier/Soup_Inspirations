import { React, useState, useEffect, useContext } from "react";

import RecipeThumb from "../../components/recipe-thumb.component/recipe-thumb.component";

import { SlMagnifier } from "react-icons/sl";

import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { FavoritesContext } from "../../contexts/favorites.context";

import {
  RecipesContainer,
  RecipesHeader,
  SearchRecipesContainer,
  SearchRecipesHeaderContainer,
  SearchRecipesHeader,
  SearchRecipesSearchBox,
  RecentRecipesHeader,
  RecipesListContainer,
} from "./recipes.component.styles";

export default function Recipes() {
  const { currentUser } = useContext(UserContext);

  const { favorites, setFavorites } = useContext(FavoritesContext);

  const [recipesFromDB, setRecipesfromDB] = useState(null);
  const [query, setQuery] = useState([]);

  let ingredients = [];
  const [ingredientsList, setIngredientsList] = useState([]);
  const [filteredIngredientsList, setFilteredIngredientsList] = useState([]);

  // Import recipes from database

  useEffect(() => {
    fetch(`http://localhost:4444/recipes-list`)
      .then((response) => response.json())

      .then((data) => {
        setRecipesfromDB(data);
      })
      .catch((error) => console.log(error));
  }, []);

  recipesFromDB &&
    recipesFromDB.forEach((recipe) => {
      recipe.ingredientsArray.forEach((el) => {
        ingredients.push(el.ingredientName);
      });
    });

  useEffect(() => {
    setIngredientsList(ingredients);
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value.toLowerCase());
    const filteredIngredients = ingredients
      .filter((el) => el.toLowerCase().includes(query))
      .map((el, index) => {
        return (
          <div key={index}>
            <p>{el}</p>
          </div>
        );
      });

    {
      value.length >= 3
        ? setFilteredIngredientsList(filteredIngredients)
        : setFilteredIngredientsList([]);
    }
  };

  const handleAddToFavorites = (id) => {
    const ID = Math.floor(Math.random() * 1000);

    if (
      !favorites.some((el) => el.user === currentUser.uid && el.recipeID === id)
    ) {
      setFavorites([
        ...favorites,
        { recipeID: id, user: currentUser.uid, objID: ID },
      ]);
    } else {
      const newFavorites = favorites.filter(
        (fav) => fav.recipeID != id || fav.user != currentUser.uid
      );

      setFavorites(newFavorites);
    }
  };

  return (
    <>
      <RecipesContainer>
        <RecipesHeader>Recipes</RecipesHeader>

        <SearchRecipesContainer>
          <SearchRecipesHeaderContainer>
            <SearchRecipesHeader>Search by ingredient</SearchRecipesHeader>
            <SlMagnifier style={{ color: "#2E292F", fontSize: "2rem" }} />
          </SearchRecipesHeaderContainer>
          <SearchRecipesSearchBox
            onChange={handleChange}
            type="text"
            name="search"
            value={query}
            placeholder="Type ingredient... "
          />
        </SearchRecipesContainer>

        {/* <RecentRecipesHeader>Recently added inspirations</RecentRecipesHeader> */}
        <RecipesListContainer>
          {recipesFromDB &&
            recipesFromDB

              .filter((recipe) =>
                recipe.ingredientsArray.some((el) =>
                  el.ingredientName.toLowerCase().includes(query)
                )
              )
              .map((recipe, index) => {
                return (
                  <RecipeThumb
                    key={index}
                    recipeID={recipe._id}
                    recipeImageUrl={recipe.imageUrl}
                    recipeSoupName={recipe.soupName}
                    currentUser={currentUser}
                    handleAddToFavorites={handleAddToFavorites}
                    favorites={favorites}
                  />
                );
              })}
        </RecipesListContainer>
      </RecipesContainer>
    </>
  );
}

{
  /* <Link to={`${recipe._id}`}>
                      <div>
                        <img
                          src={`${recipe.imageUrl}`}
                          width={"100px"}
                          alt="recipe image"
                        />
                        {recipe.soupName}
                      </div>
                    </Link>

                    {currentUser ? (
                      <button
                        onClick={() => {
                          handleAddToFavorites(recipe._id);
                        }}
                      >
                        {currentUser &&
                        favorites.some(
                          (el) =>
                            el.user === currentUser.uid &&
                            el.recipeID === recipe._id
                        )
                          ? "dislike"
                          : "like"}
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          alert(
                            "Only logged users can add recipes to favorites"
                          )
                        }
                      >
                        like
                      </button>
                    )} */
}
