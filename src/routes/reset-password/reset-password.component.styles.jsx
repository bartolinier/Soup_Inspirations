import styled from "styled-components";

import { device } from "../../utils/media-queries/media-queries";

const colorsAndShadows = {
  mainGrey: "#EAE8E8",
  blackShadow: "0rem 0.2rem 1rem black",
  fontMainColor: "#2E292F",
  mainOrange: "#da5f02",
  alertRed: " #cd2b15",
};

export const ResetPasswordContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;

export const ResetPasswordHeader = styled.h2`
  color: ${colorsAndShadows.fontMainColor};
`;

export const ResetPasswordForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const ResetPasswordLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: max-content;

  & > label {
    width: max-content;
  }
  & > input {
    height: max-content;
    width: max-content;
    padding: 0.2rem;
    font-size: 1.1rem;
    font-family: "Jost", sans-serif;
    &:focus {
      outline: 0.1rem solid ${colorsAndShadows.mainOrange};
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
