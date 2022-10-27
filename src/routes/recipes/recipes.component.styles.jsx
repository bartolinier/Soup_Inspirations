import styled from "styled-components";

const colorsAndShadows = {
  mainGrey: "#EAE8E8",
  blackShadow: "0rem 0.2rem 1rem black",
  fontMainColor: "#2E292F",
  mainOrange: "#da5f02",
};

export const RecipesContainer = styled.div`
  width: 100%;
  height: min-content;
  display: grid;
  gap: 2rem;
  justify-items: center;
  align-items: center;
  padding-top: 4.5rem;
`;

export const RecipesHeader = styled.h1`
  color: ${colorsAndShadows.fontMainColor};
`;

export const SearchRecipesContainer = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const SearchRecipesHeaderContainer = styled.div`
  width: 30rem;
  height: min-content;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const SearchRecipesHeader = styled.h3`
  color: ${colorsAndShadows.fontMainColor};
`;

export const SearchRecipesSearchBox = styled.input`
  width: 24rem;
  height: 3rem;
  font-family: "Jost", sans-serif;
  padding: 1rem;
  font-size: 1.5rem;
`;

export const RecentRecipesHeader = styled.h3`
  color: ${colorsAndShadows.fontMainColor};
`;

export const RecipesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
