// import React from 'react'
import { useNavigate } from 'react-router-dom'

 const PrivateRoute = ({isLoggedin,children}) => {
    const navigate=useNavigate();

   
    
        if(isLoggedin){
            return children;
        }
        else{
            navigate("/login")

        }
    
  
}
export default PrivateRoute