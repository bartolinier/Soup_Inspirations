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

export const FavListElementContainer = styled.div`
  width: 48rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${colorsAndShadows.grayShadow};
  padding-right: 1rem;
`;

export const FavRecipeLink = styled(NavLink)`
  text-decoration: none;
`;

export const FavListSoupNameAndImgContainer = styled.div`
  width: 32rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colorsAndShadows.mainGray};
`;

export const FavListElementImgContainer = styled.div`
  width: 7rem;
  height: 7rem;
  overflow: hidden;
`;
export const FavListElementImg = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  transition: ease-in-out 400ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FavListElementSoupName = styled.p`
  color: ${colorsAndShadows.fontMainColor};
`;
