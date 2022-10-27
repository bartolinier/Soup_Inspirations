import styled from "styled-components";

const colorsAndShadows = {
  mainGrey: "#EAE8E8",
  blackShadow: "0rem 0.2rem 1rem black",
  fontMainColor: "#2E292F",
  mainOrange: "#da5f02",
};

export const UserNameThumbContainer = styled.span`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const UserNameThumbButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  border: none;
  font-size: 1rem;
  color: ${colorsAndShadows.mainGrey};
  background-color: ${colorsAndShadows.mainOrange};
  cursor: pointer;
  transition: ease-in-out 300ms;

  &:hover {
    transform: scale(1.1);
  }
`;
