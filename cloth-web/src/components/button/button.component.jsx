import React from "react";
import { getButton } from "../../utils/button/button.utils";

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomerButton = getButton(buttonType);

  return <CustomerButton {...otherProps}>{children}</CustomerButton>;
};

export default Button;
