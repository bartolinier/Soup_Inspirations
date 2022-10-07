import React from 'react'
import SignIn from '../../components/sign-in.component/sign-in.component'
import SignUp from '../../components/sign-up.component/sign-up.component'

import { AuthenticationContainer } from './authentication.component.styles'

export default function Authentication() {
  return (
   <AuthenticationContainer>
 <h1>Sign In</h1>
 <div>
<SignIn/>
 </div>
 <div>vertical line</div>
 <div>
<SignUp/>
 </div>

   </AuthenticationContainer>
  )
}
