import { React, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { RecipesContainer } from "./recipes.component.styles";

export default function Recipes() {
  const [recipesList, setRecipesList] = useState([]);
  const [pagesCounter, setPagesCounter] = useState(1);

  // Import recipes from database

  const importRecipes = async () => {
    await fetch(
      `http://localhost:4444/recipes-limited-list?page=${pagesCounter}`
    )
      .then((response) => response.json())

      .then((data) => {
        const recipesList = data.map((recipe, index) => {
          return (
            <div key={index}>
              <Link to={`${recipe._id}`}>
                <div>
                  <img
                    src={`${recipe.imageUrl}`}
                    width={"100px"}
                    alt="recipe image"
                  />
                  {recipe.soupName}
                </div>
              </Link>
            </div>
          );
        });

        setRecipesList(recipesList);
      });
  };

  useEffect(() => {
    importRecipes();
  }, [pagesCounter]);

  const handleMoreResults = async () => {
    setPagesCounter((prev) => prev + 1);
  };

  // Handle ingredients search form

  const defaultSearchForm = {
    search: "",
  };

  const resetSearchForm = () => {
    setIngredientQuery(defaultSearchForm);
  };

  const [ingredientQuery, setIngredientQuery] = useState(defaultSearchForm);

  const { search } = ingredientQuery;

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setIngredientQuery({
      ...ingredientQuery,
      [name]: value.replaceAll(" ", "").trim().split(","),
    });
  };

  // Send query to server to search database

  const handleSendQuery = async () => {
    await fetch("http://localhost:4444/recipes-list-search-many", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(ingredientQuery),
    })
      .then(console.log(ingredientQuery))
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSendQuery();
    resetSearchForm();
  };

  return (
    <>
      <RecipesContainer>
        <h1>Recipes</h1>
        <div>
          <h3>Search for inspirations</h3>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="search"
              value={search}
              placeholder="Type ingredient or ingredients separated with commas..."
            />
            <button>Search</button>
          </form>
        </div>

        <h3>Filter by</h3>
        <form>
          <select name="" id="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="" id="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <label htmlFor="vege-option">
            Vegetarian
            <input type="checkbox" name="vege-option" id="vege-option" />
          </label>
        </form>

        <h3>Recently added inspirations</h3>
        <div>Recipes</div>
      </RecipesContainer>
      {recipesList}

      <button onClick={handleMoreResults}>More recipes</button>
    </>
  );
}
