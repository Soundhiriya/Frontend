import {SignUp } from "@clerk/clerk-react";
import './signUppage.css'

const SignUppage = () => {
  return (
    <div className='signUppage'>
      <SignUp path="/sign-up" signInUrl="/sign-in"/>
    </div>
  )
}

export default SignUppage
