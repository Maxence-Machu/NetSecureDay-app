import React, { useContext, useEffect, useState } from "react";
import Favorite from "../services/Favorite";

export const FavoritesContext = React.createContext();
export const useFavoriteContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(Favorite.getFavorites());
  }, [setFavorites]);

  const addFavorite = favorite => {
    Favorite.addFavorite(favorite);

    setFavorites(Favorite.getFavorites());
  };

  const removeFavorite = favorite => {
    Favorite.removeFavorite(favorite);

    setFavorites(Favorite.getFavorites());
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
