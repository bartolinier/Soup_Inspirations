import styled from "styled-components";

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem;

  justify-items: center;
  align-items: start;

  padding-top: 4rem;
`;

export const SignInSignOutSplitLine = styled.div`
  height: 4rem;
  border-left: 1px solid ${colorsAndShadows.fontMainColor};
`;
