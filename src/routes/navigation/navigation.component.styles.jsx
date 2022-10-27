import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { Component } from "react";

const colorsAndShadows = {
  mainGrey: "#EAE8E8",
  grayShadow: "0rem 0.2rem 0.3rem gray",
  fontMainColor: "#2E292F",
  mainOrange: "#da5f02",
};

export const NavigationContainer = styled.div`
  height: 8vh;
  width: 100%;
  background-color: #eae8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  box-shadow: ${colorsAndShadows.grayShadow};
  opacity: 0.98;
  position: fixed;
  z-index: 1000;
`;
export const NavigationLogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  padding-left: 1rem;
  height: 100%;
  color: ${colorsAndShadows.fontMainColor};
  text-decoration: none;
  transition: ease-in-out 200ms;

  &:hover {
    color: ${colorsAndShadows.mainOrange};
  }
`;

export const NavLinks = styled.div`
  width: max-content;
  height: 100%;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
`;

export const NavigationLink = styled(NavLink)`
  padding: 10px 15px;
  font-size: 1.5rem;
  color: ${colorsAndShadows.fontMainColor};
  text-decoration: none;
  transition: ease-in-out 400ms;

  &:hover {
    color: ${colorsAndShadows.mainOrange};
    transform: scale(1.1);
  }
`;
