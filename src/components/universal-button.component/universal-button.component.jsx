import React from "react";

import { Button } from "./universal-button.component.styles";

export default function UniversalButton({ label, action, disabled }) {
  return (
    <>
      <Button disabled={disabled} onClick={action}>
        {label}
      </Button>
    </>
  );
}
