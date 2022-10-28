import styled from "styled-components";

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

export const FavoritesListContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
`;

export const FavoritesListHeader = styled.h1`
  color: ${colorsAndShadows.fontMainColor};
`;
