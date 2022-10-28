import { React, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  SignInWithGooglePopup,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import UniversalButton from "../universal-button.component/universal-button.component";

import {
  SignInContainer,
  SignInHeader,
  SignInForm,
  SignInlabelAndInput,
} from "./sign-in.component.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignIn() {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await SignInAuthUserWithEmailAndPassword(email, password);
      navigate("/");
      resetFormFields();
    } catch (error) {
      if (!email) {
        console.log("brak maila");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleGoogleLogin = async () => {
    await SignInWithGooglePopup();
    navigate("/");
  };

  return (
    <SignInContainer>
      <SignInHeader>Sign in</SignInHeader>
      <SignInForm onSubmit={handleSubmit}>
        <SignInlabelAndInput>
          <label htmlFor="sign-in-email"> e-mail </label>
          <input
            type="email"
            required
            onChange={handleChange}
            name="email"
            id="sign-in-email"
            value={email}
          />
        </SignInlabelAndInput>
        <SignInlabelAndInput>
          <label htmlFor="password"> password </label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </SignInlabelAndInput>

        <a href="reset-password">Forgot password?</a>
        <UniversalButton
          label="Sign In"
          href="/"
          type="submit"
        ></UniversalButton>
      </SignInForm>

      <p>or</p>
      <>
        <UniversalButton
          label="Log in with Google"
          action={handleGoogleLogin}
        ></UniversalButton>
      </>
    </SignInContainer>
  );
}
