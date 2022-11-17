import styled from "styled-components";
const colorsAndShadows = {
  mainGrey: "#EAE8E8",
  blackShadow: "0rem 0.2rem 1rem black",
  grayShadow: "0rem 0.2rem 0.3rem gray",
  fontMainColor: "#2E292F",
  mainOrange: "#da5f02",
  alertRed: " #cd2b15",
};

export const Button = styled.div`
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  opacity: ${(props) => (props.disabled ? "0.5" : null)};
  width: max-content;
  height: 2rem;
  background-color: ${colorsAndShadows.mainGrey};
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Jost", sans-serif;

  color: ${colorsAndShadows.fontMainColor};
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: ease-in-out 400ms;
  box-shadow: ${colorsAndShadows.grayShadow};
  &:hover {
    transform: scale(1.1);
  }
`;
