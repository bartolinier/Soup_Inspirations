import React from "react";

import { Button } from "./universal-button.component.styles";

export default function UniversalButton({ label, action }) {
  return (
    <>
      <Button onClick={action}>{label}</Button>
    </>
  );
}
