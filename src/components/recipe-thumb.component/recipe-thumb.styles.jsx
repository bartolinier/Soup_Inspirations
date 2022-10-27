import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeThumbContainer = styled.div`
  width: 24rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0rem 0rem 1rem gray;
  position: relative;
`;

export const RecipeThumbLink = styled(Link)`
  text-decoration: none;
`;

export const RecipeThumbLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 0;
  right: 0;

  font-size: 2rem;
  color: #cd2b15;

  /* cursor: pointer; */
  background-color: white;
`;

export const ThumbImageContainer = styled.div`
  width: 24rem;
  height: 20rem;
  overflow: hidden;
`;

export const ThumbImage = styled.img`
  width: 24rem;
  height: 20rem;
  object-fit: cover;
  transition: ease-in-out 400ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ThumbRecipeNameContainer = styled.div`
  width: 24rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
`;

export const ThumbRecipeNameText = styled.p`
  font-size: 1.5rem;
  color: black;
`;
