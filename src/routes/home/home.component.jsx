import { React } from "react";

import { useNavigate } from "react-router-dom";

import UniversalButton from "../../components/universal-button.component/universal-button.component";

import {
  HomeContainer,
  MainPageTxtContainer,
  MainTxt,
  SubTxt,
  RecipesBtnContainer,
  ButtonLink,
} from "./home.component.styles";

export default function Home() {
  const navigate = useNavigate();
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
