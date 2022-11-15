import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => null,
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  const value = { favorites, setFavorites };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
