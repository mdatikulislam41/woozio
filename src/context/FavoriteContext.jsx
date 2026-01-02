import React, { useContext, useReducer } from "react";
import toast from "react-hot-toast";
const zioFavoriteContext = React.createContext();
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
  }
};
export const FavoriteContext = ({ children }) => {
  const [getState, favoriteDispatch] = useReducer(favoriteReducer, {
    items: [],
  });
  const addFavorite = (product) => {
    favoriteDispatch({ type: "ADD_FAVORITE", payload: product });
    toast.success(`${product.title} has added Favorite list`);
  };
  const removeFavorite = (product) => {
    favoriteDispatch({ type: "REMOVE_FAVORITE", payload: product.id });
    toast.success(`${product.title} has Removed Favorite list`);
  };
  const isFavorite = (pId) => {
    const favorit = getState.items.some((item) => item.id === pId);
    return favorit;
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      removeFavorite(product);
    } else {
      addFavorite(product);
    }
  };
  return (
    <zioFavoriteContext.Provider
      value={{
        favorite: getState.items,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </zioFavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(zioFavoriteContext);
  if (!context) {
    throw new Error("use favorite context with main router");
  }
  return context;
};
