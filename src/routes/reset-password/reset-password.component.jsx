import { React, useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import UniversalButton from "../../components/universal-button.component/universal-button.component";
import {
  ResetPasswordContainer,
  ResetPasswordHeader,
  ResetPasswordForm,
  ResetPasswordLabelAndInput,
  WrongEmailMsg,
} from "./reset-password.component.styles";

const auth = getAuth();

const defaultFormFields = {
  email: "",
};

export default function ResetPassword() {
  const navigate = useNavigate();

  const location = useLocation();

  const [wrongEmailMsg, setWrongEmailMsg] = useState(false);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);

      resetFormFields();
      navigate("/reset-password-ok");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setWrongEmailMsg(true);
          break;
        default:
          navigate("/error-page");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <ResetPasswordContainer>
      <ResetPasswordHeader>Reset Your pasword</ResetPasswordHeader>

      <ResetPasswordForm>
        <ResetPasswordLabelAndInput>
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            required
            onChange={handleChange}
            name="email"
            id="email"
            value={email}
          />
        </ResetPasswordLabelAndInput>
        {wrongEmailMsg ? (
          <WrongEmailMsg>Wrong user email!</WrongEmailMsg>
        ) : null}

        <UniversalButton
          label={"Reset password"}
          action={handleSubmit}
          type="submit"
        ></UniversalButton>
      </ResetPasswordForm>
    </ResetPasswordContainer>
  );
}
