import { createContext } from "react";

export const CART_DROPDOWN_ACTION_TYPES = {
  SET_CART_OPEN: "SET_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  reduceItemQuantity: () => {},
  addItemQuantity: () => {},
  totalPrice: 0,
  removeItemsFromChart: () => {},
});
