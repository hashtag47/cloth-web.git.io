import React from "react";

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import Button from "../button/button.component";

import "./checkout-item.styles.scss";

const CheckoutItem = () => {
  const {
    reduceItemQuantity,
    addItemQuantity,
    cartItems,
    totalPrice,
    removeItemsFromChart,
  } = useContext(CartDropdownContext);

  return (
    <>
      {cartItems.map((cartItem) => {
        const { price, quantity, id, imageUrl, name } = cartItem;

        const reduceItemHandler = () => reduceItemQuantity(cartItem);
        const addItemHandler = () => addItemQuantity(cartItem);
        const removeItemHandler = () => removeItemsFromChart(cartItem);

        return (
          <div key={id} className="checkout-item-container">
            <div className="image-container">
              <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <br />
            <span className="quantity">
              <div className="arrow" onClick={reduceItemHandler}>
                &#10094;
              </div>
              <span className="value">{quantity}</span>
              <div className="arrow" onClick={addItemHandler}>
                &#10095;
              </div>
            </span>

            <br />
            <span className="price">{price}</span>
            <br />
            <div className="remove-button" onClick={removeItemHandler}>
              &#10005;
            </div>
          </div>
        );
      })}
      <div className="total">Total : {totalPrice} $</div>
    </>
  );
};

export default CheckoutItem;
