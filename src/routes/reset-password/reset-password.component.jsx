import {React, useState, useEffect} from 'react'

import { useLocation, useNavigate } from 'react-router-dom';


import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();


const defaultFormFields ={

  email:'',
  password:'',
 

}

export default function ResetPassword() {
 
const navigate = useNavigate()

  const location = useLocation()

  const [formFields, setFormFields ] = useState(defaultFormFields);

  const {email, password} = formFields;
  
  const resetFormFields = ()=>{
    setFormFields(defaultFormFields)
    }



    const handleSubmit = async (event)=>{

      event.preventDefault();
        
      sendPasswordResetEmail(auth, email)
  .then(() => {
 alert("Check Your email to reset your password")
  })
 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Password reset failed!")
  });
            
      }
    

      const handleChange = (event)=>{

        const {name, value} = event.target;
       
        setFormFields({...formFields,[name]:value})
       
       }



  return (
    <>
    <h2>Reset pasword</h2> 
    <h2>Reset pasword</h2> 
     <h2>Reset pasword</h2>  
     <h2>Reset pasword</h2>
     <h2>Reset pasword</h2> 
    <form >
    
    <label htmlFor="email">email</label>
     <input  type="email" 
     required 
     onChange={handleChange} 
     name="email" 
     id="email" 
     value={email}/> 
 
  
     
     <button onClick={handleSubmit} type='submit'>Reset password</button>
    </form>

   
 </>
  )
}
