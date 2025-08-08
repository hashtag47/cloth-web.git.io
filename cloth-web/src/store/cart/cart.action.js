import { CART_DROPDOWN_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

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

export const setIsCartOpen = (boolean) =>
  createAction(CART_DROPDOWN_ACTION_TYPES.SET_CART_OPEN, boolean);

export const removeItemsFromChart = (cartItems, productToRemove) => {
  // setCartItems(removeItems(productToRemove, cartItems));
  const newCartItems = removeItems(productToRemove, cartItems);
  return createAction(CART_DROPDOWN_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const addItemQuantity = (cartItems, productToChange) => {
  // setCartItems(changeQuantity(1, productToChange, cartItems));
  const newCartItems = changeQuantity(1, productToChange, cartItems);
  return createAction(CART_DROPDOWN_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const reduceItemQuantity = (cartItems, productToChange) => {
  // setCartItems(changeQuantity(-1, productToChange, cartItems));
  const newCartItems = changeQuantity(-1, productToChange, cartItems);
  return createAction(CART_DROPDOWN_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const addItemToCart = (cartItems, productToAdd) => {
  // setCartItems(addCartItem(cartItems, productToAdd));
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_DROPDOWN_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
