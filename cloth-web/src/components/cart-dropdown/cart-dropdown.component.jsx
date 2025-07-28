import React from "react";
// if button and link conflict, use useNavigate instead
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
