import { React, useState, useContext, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { useNavigate } from "react-router-dom";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

import { UserContext } from "../../contexts/user.context";

import UniversalButton from "../universal-button.component/universal-button.component";

import {
  SignUpContainer,
  SignUpHeader,
  SignUpForm,
  SignUplabelAndInput,
  WrongEmailMsg,
  PasswordsNoMatchMsg,
  ReCaptchaContainer,
} from "./sign-up.component.styles";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const navigate = useNavigate();

  const [wrongEmailMsg, setWrongEmailMsg] = useState(false);
  const [passwordsNoMatchMsg, setPasswordsNoMatchMsg] = useState(false);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsNoMatchMsg(true);
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setWrongEmailMsg(true);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // reCaptcha

  const recaptchaKey = process.env.REACT_APP_RECAP;
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    setVerified(true);
  }

  return (
    <SignUpContainer>
      <SignUpHeader>Don't have an account? Sign up!</SignUpHeader>
      <SignUpForm onSubmit={handleSubmit}>
        <SignUplabelAndInput>
          <label htmlFor="email"> e-mail* </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleChange}
          />
        </SignUplabelAndInput>
        {wrongEmailMsg ? (
          <WrongEmailMsg>Email already in use!</WrongEmailMsg>
        ) : null}

        <SignUplabelAndInput>
          <label htmlFor="password">
            <p>password (min. 6 char.)*</p>{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={handleChange}
          />
        </SignUplabelAndInput>
        <SignUplabelAndInput>
          <label htmlFor="confirm-password"> confirm password* </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            required
            value={confirmPassword}
            onChange={handleChange}
          />
        </SignUplabelAndInput>
        {passwordsNoMatchMsg && !wrongEmailMsg ? (
          <PasswordsNoMatchMsg>Passwords don't match!</PasswordsNoMatchMsg>
        ) : null}
        <ReCaptchaContainer>
          <ReCAPTCHA sitekey={recaptchaKey} onChange={onChange} />
        </ReCaptchaContainer>
        <UniversalButton
          disabled={!verified}
          action={handleSubmit}
          label="Sign up"
        ></UniversalButton>
      </SignUpForm>
    </SignUpContainer>
  );
}
