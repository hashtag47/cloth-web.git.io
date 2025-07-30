import React from "react";

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import Button from "../button/button.component";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Total,
} from "./checkout-item.styles";

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
          <CheckoutItemContainer key={id}>
            <ImageContainer>
              <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <br />
            <Quantity>
              <div className="arrow" onClick={reduceItemHandler}>
                &#10094;
              </div>
              <span className="value">{quantity}</span>
              <div className="arrow" onClick={addItemHandler}>
                &#10095;
              </div>
            </Quantity>

            <br />
            <Price>{price}</Price>
            <br />
            <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
          </CheckoutItemContainer>
        );
      })}
      <Total>Total : {totalPrice} $</Total>
    </>
  );
};

export default CheckoutItem;
