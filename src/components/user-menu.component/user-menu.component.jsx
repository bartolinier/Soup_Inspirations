import { React, useContext } from "react";

import { AiFillHeart } from "react-icons/ai";

import { UserMenuContext } from "../../contexts/user-menu-context";

import {
  MenuList,
  MenuLoggedAsContainer,
  UserMenuContainer,
  FavoritesLabel,
  MenuNavLink,
  MenuLogOut,
  MenuLogOutLabel,
} from "./user-menu.component.styles";

export default function UserMenu({ email, logoutAction }) {
  const { userMenu, setUserMenu } = useContext(UserMenuContext);
  return (
    <>
      <UserMenuContainer>
        <MenuLoggedAsContainer>
          <p>Logged as: {email}</p>
        </MenuLoggedAsContainer>

        <MenuList>
          <MenuNavLink
            onClick={() => {
              setUserMenu(false);
            }}
            to="/favorites"
          >
            <FavoritesLabel>
              Favorites
              <AiFillHeart style={{ color: "#CD2B15" }} />
            </FavoritesLabel>
          </MenuNavLink>

          <MenuNavLink
            onClick={() => {
              setUserMenu(false);
            }}
            to="/add-recipe"
          >
            Add recipe
          </MenuNavLink>

          <MenuLogOut onClick={logoutAction}>
            <MenuLogOutLabel>Log out</MenuLogOutLabel>
          </MenuLogOut>
        </MenuList>
      </UserMenuContainer>
    </>
  );
}
