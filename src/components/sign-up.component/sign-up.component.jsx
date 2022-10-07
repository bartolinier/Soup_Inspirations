import { React, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

import { UserContext } from "../../contexts/user.context";

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
    <>
      <h2>Don't have an account? Sign up!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> e-mail </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="password"> password </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={handleChange}
        />

        <label htmlFor="confirm-password"> confirm password </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign up</button>
      </form>
    </>
  );
}
