import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user.context";
import { FavoritesProvider } from "./contexts/favorites.context";
import { UserMenuProvider } from "./contexts/user-menu-context";

import "./index.css";
import App from "./App";
import { UserMenuContext } from "./contexts/user-menu-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <UserMenuProvider>
        <>
          <FavoritesProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </FavoritesProvider>
        </>
      </UserMenuProvider>
    </UserProvider>
  </BrowserRouter>
);
