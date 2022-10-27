import backgroundImg from "../../gfx/soup_main_background.webp";

import { NavLink } from "react-router-dom";

import styled from "styled-components";

const colorsAndShadows = {
  mainGrey: "#F2EDED",
  blackShadow: "0rem 0.2rem 1rem black",

  fontMainColor: "#2E292F",
};

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  gap: 3rem;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainPageTxtContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const MainTxt = styled.p`
  font-size: 6rem;
  font-weight: 400;
  text-align: center;
  text-shadow: ${colorsAndShadows.blackShadow};
  color: ${colorsAndShadows.mainGrey};
`;

export const SubTxt = styled.p`
  font-size: 2rem;
  color: ${colorsAndShadows.mainGrey};
  text-shadow: ${colorsAndShadows.blackShadow};
`;

export const RecipesBtnContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const ButtonLink = styled(NavLink)`
  height: auto;
  width: 15rem;
  background-color: ${colorsAndShadows.mainGrey};
  padding-left: 4rem;
  padding-right: 4rem;
  font-size: 2rem;
  font-weight: 500;
  color: ${colorsAndShadows.fontMainColor};
  box-shadow: ${colorsAndShadows.blackShadow};
  text-decoration: none;
  transition: ease-in-out 400ms;

  &:hover {
    transform: scale(1.1);
  }
`;
