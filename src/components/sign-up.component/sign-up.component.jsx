import { React, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

import { UserContext } from "../../contexts/user.context";

import UniversalButton from "../universal-button.component/universal-button.component";

import {
  SignUpContainer,
  SignUpHeader,
  SignUpForm,
  SignUplabelAndInput,
} from "./sign-up.component.styles";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/");

    if (password !== confirmPassword) {
      alert("passwords do not match");
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
        alert("email already used!");
      }
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

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
        <SignUplabelAndInput>
          <label htmlFor="password"> password* </label>
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
        <UniversalButton label="Sign up" type="submit"></UniversalButton>
      </SignUpForm>
    </SignUpContainer>
  );
}
