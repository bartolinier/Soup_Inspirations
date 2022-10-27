import React, { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { FavoritesContext } from "../../contexts/favorites.context";

import parse from "html-react-parser";

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

  //    Find recipe by ID in database and show in component

  const handleShowRecipe = async () => {
    await fetch("http://localhost:4444/recipe", {
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
              <div key={index}>
                <p>{ingredient.ingredientName}</p>
                <p>{ingredient.ingredientQuantity}</p>
                <p>{ingredient.ingredientUnit}</p>
              </div>
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
    <>
      <p>{id}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit itaque
        accusantium numquam vero enim repellat natus eveniet aspernatur aliquam
        odit, quasi hic quidem. Laudantium delectus ea repellendus nisi, quasi
        distinctio.
      </p>
      <p>{id}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit itaque
        accusantium numquam vero enim repellat natus eveniet aspernatur aliquam
        odit, quasi hic quidem. Laudantium delectus ea repellendus nisi, quasi
        distinctio.
      </p>

      {currentUser ? (
        <button
          onClick={() => {
            handleAddToFavorites(favRecipeID);
          }}
        >
          {currentUser &&
          favorites.some(
            (el) => el.user === currentUser.uid && el.recipeID === favRecipeID
          )
            ? "dislike"
            : "like"}
        </button>
      ) : (
        <button
          onClick={() =>
            alert("Only logged users can add recipes to favorites")
          }
        >
          like
        </button>
      )}

      {<img style={{ width: "20%" }} src={soupImage} />}
      <h2>Soup Name: {soupName}</h2>

      <h2>Preparation time (minutes): {preparationTime} </h2>
      <h2>Vegetarian: </h2>
      {vegetarian === true ? <p>yes</p> : <p>no</p>}
      <h2>Ingredients: </h2>

      {soupIngredients}

      <h2>Steps</h2>
      <div style={{ height: "100%", padding: "3rem" }}>{steps}</div>
      <h2>Tips</h2>
      {tips}
    </>
  );
}
