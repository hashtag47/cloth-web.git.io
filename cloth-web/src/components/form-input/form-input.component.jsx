import React from "react";

import { Group, CustomeFormInput, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  const shouldShrink = otherProps.value.length > 0;

  return (
    <Group>
      <CustomeFormInput {...otherProps} />
      {label && <FormInputLabel shrink={shouldShrink}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
