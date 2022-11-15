import { React } from "react";

import { useNavigate } from "react-router-dom";
import UniversalButton from "../../components/universal-button.component/universal-button.component";
import {
  ResetPasswordOkContainer,
  ResetPasswordOkHeader,
} from "./reset-password-ok.component.styles";

export default function ResetPasswordOk() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/authentication");
  };

  return (
    <>
      <ResetPasswordOkContainer>
        <ResetPasswordOkHeader>
          Please check Your email to reset your password!
        </ResetPasswordOkHeader>

        <UniversalButton label={"OK"} action={handleSubmit}></UniversalButton>
      </ResetPasswordOkContainer>
    </>
  );
}
