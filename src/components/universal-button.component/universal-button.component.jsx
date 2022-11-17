import React from "react";

import { Button } from "./universal-button.component.styles";

export default function UniversalButton({ label, action, disabled, type }) {
  return (
    <Button disabled={disabled} type={type} onClick={action}>
      {label}
    </Button>
  );
}
