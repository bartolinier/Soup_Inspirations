import styled from "styled-components";

import { device } from "../../utils/media-queries/media-queries";

const colorsAndShadows = {
  mainGrey: "#EAE8E8",
  blackShadow: "0rem 0.2rem 1rem black",
  fontMainColor: "#2E292F",
  mainOrange: "#da5f02",
};

export const AuthenticationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-items: center;
  align-items: center;

  padding-top: 4rem;
`;

export const AuthenticationHeader = styled.h1`
  color: ${colorsAndShadows.fontMainColor};
`;

export const SignInSignOutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15rem;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;

  @media only screen and (${device.mobileXS}) {
    gap: 3rem;
    padding: 1rem;
    justify-content: end;
  }

  @media only screen and (${device.mobile}) {
    gap: 3rem;
    padding: 1rem;
    justify-content: end;
  }

  @media only screen and (${device.tablets}) {
    gap: 5rem;
    justify-content: end;
  }

  @media only screen and (${device.large}) {
    justify-content: center;
    gap: 10rem;
  }

  @media only screen and (${device.xlarge}) {
    justify-content: center;
    gap: 10rem;
  }
`;

export const SignInSignOutSplitLine = styled.div`
  height: 4rem;
  border-left: 1px solid ${colorsAndShadows.fontMainColor};
`;
