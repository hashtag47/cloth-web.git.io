import { createContext } from "react";

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
