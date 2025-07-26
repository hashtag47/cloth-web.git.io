import React from "react";

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import ShoppingBag from "../../assets/shopping-bag.svg?react";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartDropdownContext);
  console.log({ isCartOpen, setIsCartOpen });

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
