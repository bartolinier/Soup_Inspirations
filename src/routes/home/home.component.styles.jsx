import backgroundImg from "../../gfx/soup_main_background.webp";

import { NavLink } from "react-router-dom";

import { device } from "../../utils/media-queries/media-queries";

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
  font-weight: 500;
  text-align: center;
  text-shadow: ${colorsAndShadows.blackShadow};
  color: ${colorsAndShadows.mainGrey};

  @media only screen and (${device.mobileXS}) {
    font-size: 2.5rem;
  }

  @media only screen and (${device.mobile}) {
    font-size: 2.5rem;
  }

  @media only screen and (${device.tablets}) {
    font-size: 4.5rem;
  }

  @media only screen and (${device.large}) {
    font-size: 5rem;
  }

  @media only screen and (${device.xlarge}) {
    font-size: 6rem;
  }
`;

export const SubTxt = styled.p`
  color: ${colorsAndShadows.mainGrey};
  text-shadow: ${colorsAndShadows.blackShadow};
  text-align: center;

  @media only screen and (${device.mobileXS}) {
    font-size: 1.5rem;
  }

  @media only screen and (${device.mobile}) {
    font-size: 1.5rem;
  }

  @media only screen and (${device.tablets}) {
    font-size: 2rem;
  }

  @media only screen and (${device.large}) {
    font-size: 3rem;
  }

  @media only screen and (${device.xlarge}) {
    font-size: 4rem;
  }
`;

export const RecipesBtnContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const ButtonLink = styled(NavLink)`
  height: auto;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorsAndShadows.mainGrey};
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 2rem;
  font-weight: 500;
  color: ${colorsAndShadows.fontMainColor};
  box-shadow: ${colorsAndShadows.blackShadow};
  text-decoration: none;
  transition: ease-in-out 400ms;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (${device.mobileXS}) {
    font-size: 1.5rem;
  }

  @media only screen and (${device.mobile}) {
    font-size: 1.5rem;
  }

  @media only screen and (${device.tablets}) {
    font-size: 2rem;
  }

  @media only screen and (${device.large}) {
    font-size: 2rem;
  }

  @media only screen and (${device.xlarge}) {
    font-size: 2.5rem;
  }
`;
