import { Outlet } from "react-router-dom";

import { TbSoup } from "react-icons/tb";
import {
  NavigationContainer,
  NavigationLogoContainer,
  NavLinks,
  NavigationLink,
} from "./navigation.component.styles";

import { useContext } from "react";

import { signOutUser } from "../../utils/firebase/firebase";

import { UserContext } from "../../contexts/user.context";
import { FavoritesContext } from "../../contexts/favorites.context";

import { UserMenuContext } from "../../contexts/user-menu-context";

import UserThumb from "../../components/user-name-thumb.component/user-name-thumb.component";
import UserMenu from "../../components/user-menu.component/user-menu.component";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { userMenu, setUserMenu } = useContext(UserMenuContext);

  const handleUserMenu = () => {
    setUserMenu((prev) => !prev);
  };

  return (
    <>
      <NavigationContainer>
        <NavigationLogoContainer onClick={() => setUserMenu(false)} to="/">
          <TbSoup style={{ fontSize: "2.5rem" }}></TbSoup>
        </NavigationLogoContainer>

        <NavLinks>
          <NavigationLink onClick={() => setUserMenu(false)} to="/recipes">
            Recipes
          </NavigationLink>

          {currentUser ? (
            <NavigationLink onClick={() => setUserMenu(false)} to="/favorites">
              Favorites
            </NavigationLink>
          ) : null}

          {currentUser ? (
            <UserThumb
              showMenu={handleUserMenu}
              email={currentUser.email.toUpperCase()}
            />
          ) : (
            <NavigationLink
              onClick={() => setUserMenu(false)}
              to="/authentication"
            >
              Sign In
            </NavigationLink>
          )}
        </NavLinks>
      </NavigationContainer>
      {currentUser && userMenu ? (
        <UserMenu
          logoutAction={() => {
            handleUserMenu();
            signOutUser();
          }}
          email={currentUser.email}
        />
      ) : null}
      <Outlet />
    </>
  );
}
