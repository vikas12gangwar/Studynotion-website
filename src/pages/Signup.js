import React from 'react'
import Template from './Template'
import signupimage from '../assets/signup.png'

const Signup = ({setisLoggedin}) => {
  return (
    <div> 
      <Template
      title="Join the millions learning to code studynotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupimage}
      formtype="signup"
      setisLoggedin={setisLoggedin}
    />
    </div>
  )
}
export default Signup
