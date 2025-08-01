import { createContext, useState, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

export const CarContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      playload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      playload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAN_CART" });

  return { state, addToCart, removeFromCart, clearCart}
}

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart} = useCartReducer()

  return (
    <CarContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}
