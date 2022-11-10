import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../utils/media-queries/media-queries";

export const RecipeThumbContainer = styled.div`
  width: 24rem;
  height: 24rem;
  display: flex;
  align-items: center;

  gap: 1rem;
  flex-direction: column;

  box-shadow: 0rem 0rem 1rem gray;
  position: relative;
  @media only screen and (${device.mobileXS}) {
    width: 12rem;
    height: 12rem;
  }
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
  @media only screen and (${device.mobileXS}) {
    width: 12rem;
    height: 10rem;
  }
`;

export const ThumbImage = styled.img`
  width: 24rem;
  height: 20rem;
  object-fit: cover;
  transition: ease-in-out 400ms;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (${device.mobileXS}) {
    width: 12rem;
    height: 10rem;
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

  @media only screen and (${device.mobileXS}) {
    width: 12rem;
    height: 2rem;
  }
`;

export const ThumbRecipeNameText = styled.p`
  font-size: 1.5rem;
  color: black;
  @media only screen and (${device.mobileXS}) {
    font-size: 1rem;
  }
`;
