import React, { useContext, useReducer } from "react";
import toast from "react-hot-toast";
const zioCartContext = React.createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "INCREASE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
  }
};
export const CartContext = ({ children }) => {
  const [getState, cartDispatch] = useReducer(cartReducer, { items: [] });
  const addToCart = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.title} has been added`);
  };
  const removeCartItem = (product) => {
    cartDispatch({ type: "REMOVE_ITEM", payload: product });
    toast.success(`${product.title} has been Removed`);
  };
  const increaseCart = (pid, qt) => {
    cartDispatch({ type: "INCREASE_ITEM", payload: { id: pid, qt } });
    toast.success("updated");
  };
  const decreaseCart = (pid) => {
    cartDispatch({ type: "DECREASE_ITEM", payload: { id: pid } });
    toast.success("updated");
  };
  const clearCart = () => {
    cartDispatch({ type: "CLEAR_ITEM" });
    toast.success("Cart hase been Cleard");
  };
  const cartTotal = getState.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  console.log(getState);

  return (
    <zioCartContext.Provider
      value={{
        cart: getState.items,
        addToCart,
        removeCartItem,
        increaseCart,
        decreaseCart,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </zioCartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(zioCartContext);
  if (!context) {
    throw new Error("use zioCartContex provider with Root Router");
  }
  return context;
};
