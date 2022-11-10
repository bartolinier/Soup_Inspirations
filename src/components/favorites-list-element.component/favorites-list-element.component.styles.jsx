import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { device } from "../../utils/media-queries/media-queries";

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
  width: 60%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  box-shadow: ${colorsAndShadows.grayShadow};
  padding-right: 1rem;

  @media only screen and (${device.mobileXS}) {
    width: 80%;
  }
`;
export const FavListElementLinkContainer = styled.div`
  width: 65%;
  display: flex;
  align-items: center;

  justify-content: flex-start;
  box-shadow: ${colorsAndShadows.grayShadow};

  @media only screen and (${device.mobileXS}) {
    width: 80%;
  }
`;
export const FavRecipeLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
`;

export const FavListSoupNameAndImgContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colorsAndShadows.mainGray};
`;

export const FavListElementImgContainer = styled.div`
  width: 30%;
  height: 7rem;
  overflow: hidden;

  @media only screen and (${device.mobileXS}) {
    width: 50%;
  }
`;
export const FavListElementImg = styled.img`
  width: 100%;
  height: 7rem;
  object-fit: cover;
  transition: ease-in-out 400ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FavListElementSoupName = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  word-break: break-all;
`;

export const FavListDeleteButtonContainer = styled.div`
  width: 35%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (${device.mobileXS}) {
    width: 35%;
  }
`;
