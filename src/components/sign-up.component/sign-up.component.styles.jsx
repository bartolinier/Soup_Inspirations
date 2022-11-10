import styled from "styled-components";

import { device } from "../../utils/media-queries/media-queries";

const colorsAndShadows = {
  mainGrey: "#EAE8E8",
  blackShadow: "0rem 0.2rem 1rem black",
  grayShadow: "0rem 0.2rem 0.3rem gray",
  fontMainColor: "#2E292F",
  mainOrange: "#da5f02",
  alertRed: " #cd2b15",
};

export const SignUpContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;
  text-align: end;
  padding-top: 3rem;

  @media only screen and (${device.mobileXS}) {
    width: 100%;
  }
`;

export const SignUpHeader = styled.h2`
  color: ${colorsAndShadows.fontMainColor};
  @media only screen and (${device.mobileXS}) {
    font-size: 2rem;
  }
`;

export const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;
`;

export const SignUplabelAndInput = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  & > label {
    width: 50%;
    @media only screen and (${device.mobileXS}) {
      width: 30%;
    }
    @media only screen and (${device.mobile}) {
      width: 30%;
    }
    @media only screen and (${device.large}) {
      width: 50%;
    }
  }
  & > input {
    width: 50%;
    height: 2rem;
    padding: 0.2rem;
    font-size: 1.1rem;
    font-family: "Jost", sans-serif;

    @media only screen and (${device.mobileXS}) {
      width: 70%;
    }
    @media only screen and (${device.mobile}) {
      width: 70%;
    }
    @media only screen and (${device.large}) {
      width: 50%;
    }
  }
`;

export const WrongEmailMsg = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;
  color: ${colorsAndShadows.alertRed};
`;

export const PasswordsNoMatchMsg = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;
  color: ${colorsAndShadows.alertRed};
`;

export const ReCaptchaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;

  @media only screen and (${device.mobileXS}) {
    transform: scale(0.7);
    width: 0%;
  }
`;
