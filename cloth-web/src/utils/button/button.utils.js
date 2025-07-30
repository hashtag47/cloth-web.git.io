import {
  BaseButton,
  InvertButton,
  GoogleSignInButton,
} from "../../components/button/button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

/**
 * const getButton = (buttonType) => {
  const buttonMap = {
    base: BaseButton,
    "google-sign-in": GoogleSignInButton,
    inverted: InvertButton,
  };

  return buttonMap[buttonType] || BaseButton;
};
 */

export const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertButton,
  }[buttonType]);
