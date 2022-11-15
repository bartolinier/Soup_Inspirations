import React from "react";

import { BiLoaderCircle } from "react-icons/bi";
import { SpinnerContainer } from "./spinner.component.styles";

export default function Spinner() {
  return (
    <SpinnerContainer>
      <BiLoaderCircle />
    </SpinnerContainer>
  );
}
