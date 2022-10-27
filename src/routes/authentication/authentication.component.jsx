import React from "react";
import SignIn from "../../components/sign-in.component/sign-in.component";
import SignUp from "../../components/sign-up.component/sign-up.component";

import {
  AuthenticationContainer,
  AuthenticationHeader,
  SignInSignOutContainer,
  SignInSignOutSplitLine,
} from "./authentication.component.styles";

export default function Authentication() {
  return (
    <>
      <AuthenticationContainer>
        <AuthenticationHeader>Sign In</AuthenticationHeader>

        <SignInSignOutContainer>
          <SignIn />
          {/* <SignInSignOutSplitLine /> */}
          <SignUp />
        </SignInSignOutContainer>
      </AuthenticationContainer>
    </>
  );
}
