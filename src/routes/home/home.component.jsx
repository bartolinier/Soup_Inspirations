import {React, useContext} from 'react'

import { NavLink } from 'react-router-dom'

import { UserContext } from '../../contexts/user.context';



import { HomeContainer, MainPageTxtContainer, MainTxt, SubTxt, RecipesBtnContainer } from './home.component.styles'

export default function Home() {
  const { currentUser} = useContext(UserContext);

  return (
   <>
<HomeContainer>

<MainPageTxtContainer>
  <MainTxt>
    Soup Inspirations
  </MainTxt>
  <SubTxt>
  Find and share inspirations with other soup lovers!
  </SubTxt>
 
</MainPageTxtContainer>
<RecipesBtnContainer>
   <NavLink to="recipes">Recipes</NavLink>
</RecipesBtnContainer>

</HomeContainer>

   </>
  )
}
