import React from "react";

import { Button } from "./alert-button.component.styles";

export default function AlertButton({ label, action }) {
  return (
    <>
      <Button onClick={action}>{label}</Button>
    </>
  );
}
