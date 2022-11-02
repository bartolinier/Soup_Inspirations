import { React } from "react";

import { useNavigate } from "react-router-dom";
import UniversalButton from "../../components/universal-button.component/universal-button.component";
import {
  ResetPasswordErrorContainer,
  ResetPasswordErrorHeader,
} from "./reset-password-error.component.styles";

export default function ResetPasswordError() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/reset-password");
  };

  return (
    <>
      <ResetPasswordErrorContainer>
        <ResetPasswordErrorHeader>
          Something went wrong... Please try again.
        </ResetPasswordErrorHeader>

        <UniversalButton
          label={"Try again"}
          action={handleSubmit}
        ></UniversalButton>
      </ResetPasswordErrorContainer>
    </>
  );
}
