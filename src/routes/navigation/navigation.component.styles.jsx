import styled from "styled-components";

import { Link } from "react-router-dom";
import { Component } from "react";

export const NavigationContainer = styled.div`
  height: 8vh;
  width: 100%;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 5px gray;
  position: fixed;
  z-index: 2000;
`;
export const NavigationLogoContainer = styled(Link)`
  height: 100%;
  width: 20%;
  padding: 1rem;
`;
export const NavigationSignInCtaContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled.div`
  width: min-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavigationLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
