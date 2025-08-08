import React from "react";

// import { useContext } from "react";
// import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import {
  reduceItemQuantity,
  addItemQuantity,
  removeItemsFromChart,
} from "../../store/cart/cart.action";
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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  // const {
  //   reduceItemQuantity,
  //   addItemQuantity,
  //   cartItems,
  //   totalPrice,
  //   removeItemsFromChart,
  // } = useContext(CartDropdownContext);

  return (
    <>
      {cartItems.map((cartItem) => {
        const { price, quantity, id, imageUrl, name } = cartItem;

        const reduceItemHandler = () =>
          dispatch(reduceItemQuantity(cartItems, cartItem));
        const addItemHandler = () =>
          dispatch(addItemQuantity(cartItems, cartItem));
        const removeItemHandler = () =>
          dispatch(removeItemsFromChart(cartItems, cartItem));

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
