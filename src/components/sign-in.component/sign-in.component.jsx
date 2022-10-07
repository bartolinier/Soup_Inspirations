import {React, useState} from 'react'

import { useNavigate } from "react-router-dom";


import { SignInWithGooglePopup, SignInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'


const defaultFormFields ={

  email:'',
  password:'',
 

}



export default function SignIn() {

  const navigate = useNavigate()

const [formFields, setFormFields ] = useState(defaultFormFields);

const {email, password} = formFields;

const resetFormFields = ()=>{
  setFormFields(defaultFormFields)
  }
  
const handleSubmit = async (event)=>{


event.preventDefault();
  
try{
    await SignInAuthUserWithEmailAndPassword (email,password)
    navigate("/")
    resetFormFields()
   
  
  
}catch(error){
  if(!email){
    console.log("brak maila")
  }
  
  }
      
}

  const handleChange = (event)=>{

    const {name, value} = event.target;
   
    setFormFields({...formFields,[name]:value})
   
   }
   
   const handleGoogleLogin = async ()=>{
  
    await SignInWithGooglePopup();
    navigate("/")
   
  
    }
    


  return (
    <>
       <h2>Sign in</h2> 
       <form onSubmit={handleSubmit}>
       <label htmlFor="sign-in-email"> e-mail </label>
        <input  type="email" 
        required 
        onChange={handleChange} 
        name="email" 
        id="sign-in-email" 
        value={email}/> 
       
     
        <label htmlFor="password"> password </label>
        <input type="password" 
        required 
        onChange={handleChange} 
        name="password" 
        value={password} />
    
        <a href="reset-password">Forgot password?</a>
        <button href="/" type='submit'>Sign in</button>
       </form>

       <p>or</p>
       <button onClick={handleGoogleLogin}>Log in with Google</button>
    </>
  )
}
