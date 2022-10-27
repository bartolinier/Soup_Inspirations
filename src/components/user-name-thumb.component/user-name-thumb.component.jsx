import React from "react";
import {
  UserNameThumbButton,
  UserNameThumbContainer,
} from "./user-name-thumb.styles";

export default function UserThumb({ email, showMenu }) {
  return (
    <>
      <UserNameThumbContainer>
        <UserNameThumbButton onClick={showMenu}>{email[0]}</UserNameThumbButton>
      </UserNameThumbContainer>
    </>
  );
}
