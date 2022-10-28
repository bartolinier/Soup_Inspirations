import { React, useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import UniversalButton from "../../components/universal-button.component/universal-button.component";
import {
  ResetPasswordContainer,
  ResetPasswordHeader,
  ResetPasswordForm,
  ResetPasswordLabelAndInput,
} from "./reset-password.component.styles";

const auth = getAuth();

const defaultFormFields = {
  email: "",
  password: "",
};

export default function ResetPassword() {
  const navigate = useNavigate();

  const location = useLocation();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Check Your email to reset your password");
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Password reset failed!");
      });
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
          <label htmlFor="email">email:</label>
          <input
            type="email"
            required
            onChange={handleChange}
            name="email"
            id="email"
            value={email}
          />
        </ResetPasswordLabelAndInput>
        <UniversalButton
          label={"Reset password"}
          action={handleSubmit}
          type="submit"
        ></UniversalButton>
      </ResetPasswordForm>
    </ResetPasswordContainer>
  );
}
