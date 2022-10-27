import styled from "styled-components";

const colorsAndShadows = {
  mainGrey: "#EAE8E8",
  blackShadow: "0rem 0.2rem 1rem black",
  fontMainColor: "#2E292F",
  mainOrange: "#da5f02",
};

export const SignUpContainer = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;
  text-align: end;
`;

export const SignUpHeader = styled.h2`
  color: ${colorsAndShadows.fontMainColor};
`;

export const SignUpForm = styled.form`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;

  & > a {
    color: ${colorsAndShadows.fontMainColor};
  }
`;

export const SignUplabelAndInput = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  & > label {
    width: max-content;
  }
  & > input {
    height: 2rem;
    width: 15rem;
    padding: 0.2rem;
    font-size: 1.1rem;
    font-family: "Jost", sans-serif;
  }
`;
