import { Routes, Route } from "react-router-dom";

import { useContext, useState } from "react";
import { UserContext } from "./contexts/user.context";

import Navigation from "./routes/navigation/navigation.component";
import Recipes from "./routes/recipes/recipes.component";
import Recipe from "./routes/recipe/recipe.component";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import ResetPassword from "./routes/reset-password/reset-password.component";
import "./App.css";
import AddRecipe from "./routes/add-recipe/add-recipe.component";
import Favorites from "./routes/favorites/favorites.component";

function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" index element={<Home />}></Route>

        <Route path="recipes" element={<Recipes />}></Route>
        <Route path="recipes/:id" element={<Recipe />}></Route>

        {!currentUser ? (
          <Route path="authentication" element={<Authentication />}></Route>
        ) : null}
        <Route path="reset-password" element={<ResetPassword />}></Route>
        {currentUser ? (
          <Route path="add-recipe" element={<AddRecipe />}></Route>
        ) : (
          <Route path="add-recipe" element={<Authentication />}></Route>
        )}
        {currentUser ? (
          <Route path="favorites" element={<Favorites />}></Route>
        ) : (
          <Route path="recipes" element={<Recipes />}></Route>
        )}

        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
