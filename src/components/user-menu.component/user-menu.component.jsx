import React from "react";
import { AiFillHeart } from "react-icons/ai";

import {
  MenuList,
  MenuLoggedAsContainer,
  UserMenuContainer,
  FavoritesLabel,
  MenuNavLink,
  MenuLogOut,
} from "./user-menu.component.styles";

export default function UserMenu({ email, logoutAction }) {
  return (
    <>
      <UserMenuContainer>
        <MenuLoggedAsContainer>
          <p>Logged as: {email}</p>
        </MenuLoggedAsContainer>

        <MenuList>
          <MenuNavLink to="/favorites">
            <FavoritesLabel>
              Favorites
              <AiFillHeart style={{ color: "#CD2B15" }} />
            </FavoritesLabel>
          </MenuNavLink>

          <MenuNavLink to="/add-recipe">Add recipe</MenuNavLink>

          <MenuLogOut>
            <a onClick={logoutAction}>Log out</a>
          </MenuLogOut>
        </MenuList>
      </UserMenuContainer>
    </>
  );
}
