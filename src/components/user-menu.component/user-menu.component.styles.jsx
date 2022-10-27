import styled from "styled-components";
import { NavLink } from "react-router-dom";

const colorsAndShadows = {
  mainGray: "#EAE8E8",
  menuListBg: "#EAE8E8",
  blackShadow: "0rem 0.2rem 1rem black",
  grayShadow: "0px 2px 3px lightgray",
  grayHover: "lightgray",
  fontMainColor: "#2E292F",
  fontAlert: "#CD2B15",
  mainOrange: "#da5f02",
};

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  flex-direction: column;
  width: 12rem;
  padding: 0.1rem;
  position: fixed;
  right: 0;
  top: 3.4rem;
  background-color: ${colorsAndShadows.menuListBg};
  z-index: 999;
`;

export const MenuLoggedAsContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: ${colorsAndShadows.grayShadow};
`;

export const FavoritesLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const MenuList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.25rem;
  background-color: ${colorsAndShadows.menuListBg};
`;

export const MenuNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${colorsAndShadows.fontMainColor};
  background-color: ${colorsAndShadows.mainGray};
  box-shadow: ${colorsAndShadows.grayShadow};

  &:hover {
    color: ${colorsAndShadows.mainOrange};
    background-color: ${colorsAndShadows.grayHover};
  }
`;

export const MenuLogOut = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  text-decoration: none;
  color: ${colorsAndShadows.fontAlert};
  font-size: 1rem;
  font-weight: 500;
  background-color: ${colorsAndShadows.mainGray};
  box-shadow: 0px 2px 3px lightgray;

  &:hover {
    background-color: ${colorsAndShadows.grayHover};
  }
`;
