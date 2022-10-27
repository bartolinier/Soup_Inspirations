import { React, useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function SearchRecipes() {
  const navigate = useNavigate();

  const defaultSearchForm = {
    search: "",
  };

  const [ingredientQuery, setIngredientQuery] = useState(defaultSearchForm);
  const [ingredientSearchList, setIngredientSearchList] = useState([]);

  const resetSearchForm = () => {
    setIngredientQuery(defaultSearchForm);
  };

  const { search } = ingredientQuery;

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    // setSearchParams({ name: value });

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
      .then((response) => response.json())
      .then((data) => {
        const recipesSearchList = data.map((recipe, index) => {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSendQuery();
    resetSearchForm();
    setIngredientSearchList(ingredientQuery.search.join());
  };

  return (
    <>
      <div>
        <h1>Recipes</h1>
        <div>
          <h3>Search by ingredient</h3>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="search"
              value={search}
              required={true}
              placeholder="Type ingredient or ingredients separated with commas..."
            />
            <button>Search</button>
          </form>
        </div>

        <h3>Results for {ingredientSearchList}</h3>
        <div>Recipes</div>
      </div>
      <div></div>
    </>
  );
}
