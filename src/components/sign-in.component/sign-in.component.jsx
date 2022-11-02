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
  WrongEmailMsg,
  WrongPasswordMsg,
} from "./sign-in.component.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignIn() {
  const navigate = useNavigate();

  const [wrongEmailMsg, setWrongEmailMsg] = useState(false);

  const [wrongPasswordMsg, setWrongPasswordMsg] = useState(false);

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
      switch (error.code) {
        case "auth/wrong-password":
          setWrongPasswordMsg(true);
          break;
        case "auth/user-not-found":
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
        {wrongEmailMsg ? (
          <WrongEmailMsg>Wrong email address!</WrongEmailMsg>
        ) : null}
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

        {wrongPasswordMsg ? (
          <WrongPasswordMsg>Wrong password!</WrongPasswordMsg>
        ) : null}

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
