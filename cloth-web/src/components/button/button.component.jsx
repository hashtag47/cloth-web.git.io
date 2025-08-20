import React from "react";
import { getButton } from "../../utils/button/button.utils";
import { ButtonSpinner } from "./button.styles";

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomerButton = getButton(buttonType);

  return (
    <CustomerButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomerButton>
  );
};

export default Button;
