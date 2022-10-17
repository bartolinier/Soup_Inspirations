import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import parse from "html-react-parser";

export default function Recipe() {
  const { id } = useParams();

  const recipeID = { id };

  const [soupImage, setSoupImage] = useState("");

  const [soupName, setSoupName] = useState("");
  const [preparationTime, setPreparation] = useState("");
  const [vegetarian, setVegetarian] = useState("");
  const [soupIngredients, setSoupIngredients] = useState("");

  const [steps, setSteps] = useState("");
  const [tips, setTips] = useState("");

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
