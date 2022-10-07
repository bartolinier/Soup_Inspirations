

import { Outlet, useNavigate} from "react-router-dom";
import { NavigationContainer, NavigationLogoContainer, NavLinks, NavigationLink,NavigationSignInCtaContainer } from "./navigation.component.styles";

import { useContext, useState } from "react";

import { signOutUser } from "../../utils/firebase/firebase";


import { UserContext } from '../../contexts/user.context';
import UserThumb from "../../components/user-name-thumb.component/user-name-thumb.component";
import UserMenu from "../../components/user-menu.component/user-menu.component";

export default function Navigation (){


const navigate = useNavigate()
    
 
const { currentUser} = useContext(UserContext);
   

const [userMenu, setUserMenu]=useState(false)
    
const handleUserMenu = () =>{


  setUserMenu((prev)=>!prev)

}



    
    return(
<>
       <NavigationContainer>
       
       <NavigationLogoContainer to="/">wxc
       </NavigationLogoContainer>
       
       {!currentUser?<NavigationSignInCtaContainer>
        <p>Sign in to share your recipes!</p>
       </NavigationSignInCtaContainer>:null}


       <NavLinks>
      
      <NavigationLink 
       to="/recipes">Recipes
       </NavigationLink>
  

       {currentUser ? (
            <UserThumb showMenu={handleUserMenu} email={currentUser.email.toUpperCase()} />
          ) : ( <NavigationLink
       to="/authentication">Sign In
       </NavigationLink>)}
            



       </NavLinks>

       
       
       </NavigationContainer>
       {currentUser && userMenu?<UserMenu logoutAction={()=>{
        handleUserMenu()
        signOutUser() 
        navigate("/")

        }} email={currentUser.email}/>:null}
      
       <Outlet/>
     
        </>
    )
}