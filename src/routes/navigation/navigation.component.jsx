import { Outlet, useNavigate } from "react-router-dom";

import { TbSoup } from "react-icons/tb";
import {
  NavigationContainer,
  NavigationLogoContainer,
  NavLinks,
  NavigationLink,
} from "./navigation.component.styles";

import { useContext, useState } from "react";

import { signOutUser } from "../../utils/firebase/firebase";

import { UserContext } from "../../contexts/user.context";
import { FavoritesContext } from "../../contexts/favorites.context";

import UserThumb from "../../components/user-name-thumb.component/user-name-thumb.component";
import UserMenu from "../../components/user-menu.component/user-menu.component";

export default function Navigation() {
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const { favorites } = useContext(FavoritesContext);

  const [userMenu, setUserMenu] = useState(false);

  const handleUserMenu = () => {
    setUserMenu((prev) => !prev);
  };

  return (
    <>
      <NavigationContainer>
        <NavigationLogoContainer to="/">
          <TbSoup style={{ fontSize: "2.5rem" }}></TbSoup>
          <p>Soup Inspirations</p>
        </NavigationLogoContainer>

        <NavLinks>
          <NavigationLink to="/recipes">Recipes</NavigationLink>

          {currentUser ? (
            <NavigationLink to="/favorites">Favorites</NavigationLink>
          ) : null}

          {currentUser ? (
            <UserThumb
              showMenu={handleUserMenu}
              email={currentUser.email.toUpperCase()}
            />
          ) : (
            <NavigationLink to="/authentication">Sign In</NavigationLink>
          )}
        </NavLinks>
      </NavigationContainer>
      {currentUser && userMenu ? (
        <UserMenu
          logoutAction={() => {
            handleUserMenu();
            signOutUser();
            navigate("/");
          }}
          email={currentUser.email}
        />
      ) : null}
      <Outlet />
    </>
  );
}
