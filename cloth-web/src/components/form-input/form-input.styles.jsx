// form-input.styles.jsx
import styled, { css } from "styled-components";

// Colors
const subColor = "grey";
const mainColor = "black";

// Mixin replacement
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const CustomeFormInput = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }

  &[type="password"] {
    letter-spacing: 0.3em;
  }
`;

// $sub-color: grey;
// $main-color: black;
// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }
// .group {
//   position: relative;
//   margin: 45px 0;
//   .form-input {
//     background: none;
//     background-color: white;
//     color: $sub-color;
//     font-size: 18px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;
//     margin: 25px 0;
//     &:focus {
//       outline: none;
//     }
//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }
//   input[type="password"] {
//     letter-spacing: 0.3em;
//   }
//   .form-input-label {
//     color: $sub-color;
//     font-size: 16px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 300ms ease all;
//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }
