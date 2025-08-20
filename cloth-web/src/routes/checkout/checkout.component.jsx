import React from "react";

import "./checkout.styles.jsx";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component.jsx";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from "./checkout.styles.jsx";

const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      <hr />
      <CheckoutItem />
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
