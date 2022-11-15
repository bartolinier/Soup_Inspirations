import { React } from "react";

import {
  HomeContainer,
  MainPageTxtContainer,
  MainTxt,
  SubTxt,
  RecipesBtnContainer,
  ButtonLink,
} from "./home.component.styles";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <MainPageTxtContainer>
          <MainTxt>Soup Inspirations</MainTxt>
          <SubTxt>A place for soup lovers!</SubTxt>
        </MainPageTxtContainer>
        <RecipesBtnContainer>
          <ButtonLink to={"/recipes"}>Recipes</ButtonLink>
        </RecipesBtnContainer>
      </HomeContainer>
    </>
  );
}
