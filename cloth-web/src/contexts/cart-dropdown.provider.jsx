import { useState, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

import {
  CartDropdownContext,
  CART_DROPDOWN_ACTION_TYPES,
} from "./cart-dropdown.context";

//NOTE: alternative way of passing function directly to the correspond component
//      but might cause too many times re-render if cartItems become extremely huge
// const cartCount = (cartItems) =>
//   cartItems.reduce((total, item) => total + item.quantity, 0);

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_DROPDOWN_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    case CART_DROPDOWN_ACTION_TYPES.SET_CART_ITEMS: {
      return {
        ...state,
        cartItems: payload.cartItems,
        cartCount: payload.cartCount,
        totalPrice: payload.totalPrice,
      };
    }

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const removeItems = (productToRemove, cartItems) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

const changeQuantity = (addOrReduceOne, productToChange, cartItems) => {
  // const selectedProduct = cartItems.find(
  //   (item) => productToChange.id === item.id
  // );

  // if ( selectedProduct.quantity > 0) {
  //   return cartItems.filter((cartItem) => cartItem.id !== peoductToRemove.id)
  // }
  //   return cartItems.map((item) => item.id === selectedProduct.id ?
  //  (...cartItem, quantity: cartItem.quantity + addOrReduceOne) : cartItem);
  // }
  return (
    cartItems
      .map((item) => {
        if (item.id === productToChange.id) {
          const newQuantity = item.quantity + addOrReduceOne;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      })

      // NOTE: it filters out falsy values from the array.
      //Because .filter(...) expects a callback function that returns true (keep it) or false (remove it).
      //Passing Boolean is the shorthand for:
      // .filter((item) => item !== null && item !== undefined && item !== false)
      .filter(Boolean)
  );
};

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  // if found, increment quantity
  if (existingItem) {
    return cartItems.map((item) =>
      productToAdd.id === item.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartDropdownProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartCount, cartItems, totalPrice } = state;

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_DROPDOWN_ACTION_TYPES.SET_CART_OPEN, bool));
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newTotalPrice = newCartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    /**
     * generate newCarTotal
     *
     *
     * generate newCartCount
     *
     *
     * dispatch new action with payload = {
     *  newCartItems,
     *  newCartTotal,
     *  newCartCount,
     * }
     */
    dispatch(
      createAction(CART_DROPDOWN_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalPrice: newTotalPrice,
      })
    );
  };

  // NOTE:it's better to govern one singular state in one useEffect
  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setCartCount(newCartCount);
  // }, [cartItems]);

  // useEffect(() => {
  //   const newTotalPrice = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.price * cartItem.quantity,
  //     0
  //   );
  //   setTotalPrice(newTotalPrice);
  // }, [cartItems]);

  const removeItemsFromChart = (productToRemove) => {
    // setCartItems(removeItems(productToRemove, cartItems));
    const newCartItems = removeItems(productToRemove, cartItems);
    updateCartItemsReducer(newCartItems);
  };

  const addItemQuantity = (productToChange) => {
    // setCartItems(changeQuantity(1, productToChange, cartItems));
    const newCartItems = changeQuantity(1, productToChange, cartItems);
    updateCartItemsReducer(newCartItems);
  };

  const reduceItemQuantity = (productToChange) => {
    // setCartItems(changeQuantity(-1, productToChange, cartItems));
    const newCartItems = changeQuantity(-1, productToChange, cartItems);
    updateCartItemsReducer(newCartItems);
  };

  const addItemToCart = (productToAdd) => {
    // setCartItems(addCartItem(cartItems, productToAdd));
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    reduceItemQuantity,
    addItemQuantity,
    totalPrice,
    removeItemsFromChart,
  };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
