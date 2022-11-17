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

export const AddRecipeContainer = styled.div`
  width: 100%;
  padding: 4rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
`;

export const AddRecipeHeader = styled.h1`
  color: ${colorsAndShadows.fontMainColor};
`;

export const AddRecipeForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: left;

  @media only screen and (${device.mobileXS}) {
    width: 90%;
  }
`;

export const AddRecipeInputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: left;
  align-items: center;
`;

export const IngredientList = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: left;
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const AddIngredientInputContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: left;
  font-size: 1.2rem;
`;

export const AddRecipeInput = styled.input`
  width: ${({ variant }) => (variant === "short" ? "5rem" : "50%")};
  height: 2rem;
  padding: 0.3rem;
  font-family: "Jost", sans-serif;
  font-size: 1.2rem;

  &:focus {
    outline: 0.1rem solid ${colorsAndShadows.mainOrange};
  }
`;

export const AddRecipeSelect = styled.select`
  width: 10rem;
  height: 2rem;

  font-family: "Jost", sans-serif;
  font-size: 1.1rem;

  &:focus {
    outline: 0.1rem solid ${colorsAndShadows.mainOrange};
  }
`;

export const AddRecipeOption = styled.option`
  width: 10rem;
  height: 2rem;
  padding: 0.3rem;
  font-family: "Jost", sans-serif;
`;

export const RecipeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`;

export const RecipeLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
  color: ${colorsAndShadows.alertRed};
  position: absolute;
  right: 0;
  cursor: pointer;
  background-color: white;
`;

export const SoupName = styled.h1`
  color: ${colorsAndShadows.fontMainColor};
`;

export const RecipeImageContainer = styled.div`
  position: relative;
  width: 30rem;
  height: 25rem;
  overflow: hidden;
  box-shadow: ${colorsAndShadows.grayShadow};

  @media only screen and (${device.mobileXS}) {
    width: 100%;
  }
`;

export const RecipeImage = styled.img`
  width: 30rem;
  height: 25rem;
  object-fit: cover;
  transition: ease-in-out 400ms;
`;

export const PreparationTimeContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

export const PreparationTimeLabel = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1.5rem;
  font-weight: 700;

  @media only screen and (${device.mobileXS}) {
    font-size: 1.2rem;
  }
`;

export const PreparationTimeValue = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1.5rem;
  font-weight: 400;
`;

export const VegetarianContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  width: max-content;
`;

export const VegetarianLabel = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const VegetarianValue = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1.5rem;
  font-weight: 400;
`;

export const IngredientsLabel = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const IngredientsListContainer = styled.div`
  display: flex;
  width: max-content;
  flex-direction: column;
  gap: 1rem;
  align-items: left;
  justify-content: center;
`;

export const IngredientContainer = styled.div`
  display: flex;

  align-items: center;

  gap: 0.9rem;
  border-bottom: 1px solid ${colorsAndShadows.mainGrey};
`;

export const IngredientQuantity = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1rem;
  font-weight: 600;
`;
export const IngredientUnit = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1rem;
  font-weight: 600;
`;
export const IngredientName = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1rem;
  font-weight: 400;
`;

export const StepsLabel = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StepsContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 0.3rem;
  padding: 3rem;
  border-bottom: 1px solid ${colorsAndShadows.mainGrey};
  box-shadow: ${colorsAndShadows.grayShadow};
`;

export const TipsLabel = styled.p`
  color: ${colorsAndShadows.fontMainColor};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const TipsContainer = styled.div`
  display: flex;
  width: 80%;
  padding: 3rem;
  flex-direction: column;
  gap: 0.3rem;
  border-bottom: 1px solid ${colorsAndShadows.mainGrey};
  box-shadow: ${colorsAndShadows.grayShadow};
`;

export const AlertTextContainer = styled.div`
  width: 100%;
  word-break: break-all;
`;

export const AlertText = styled.p`
  color: ${colorsAndShadows.alertRed};
  font-size: 1rem;
  font-weight: 700;

  @media only screen and (${device.mobileXS}) {
    font-size: 0.9rem;
  }
  @media only screen and (${device.mobileXXS}) {
    font-size: 0.8rem;
  }
`;
