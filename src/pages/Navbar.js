import React from 'react'
import {Link } from "react-router-dom"
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast';

 const Navbar = (props ) => {
  let isLoggedin=props.isLoggedin;
  const setisLoggedin=props.setisLoggedin;
  return (
    <div className=' w-11/12 max-w-[1060px] mx-auto flex  justify-between py-4 text-richblack-100 items-center '> 
        <Link to="/">
            <img src={logo} alt='logo' width={160} height={160}/>
        </Link>
        <nav>
          <ul className='flex gap-6 flex-row'>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="#">About </Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className=' flex items-center gap-x-4 '>
          { ! isLoggedin&&
            <Link to="/login">
              <button className=' bg-richblack-800 py-[6px] px-[10px]   rounded-[8px] border border-richblack-700'>Log in</button>
            </Link>
          }
          { ! isLoggedin&&
            <Link to="/signup">
              <button  className=' bg-richblack-800 py-[6px] px-[10px]   rounded-[8px] border border-richblack-700' >Sign up</button>
            </Link>
          }
          {  isLoggedin&&
            <Link to="/" >
              <button className=' bg-richblack-800 py-[6px] px-[10px]   rounded-[8px] border border-richblack-700' onClick={()=>{
                setisLoggedin(false);
                toast.success('Logged out ')
              }}>Logout</button>
            </Link>
          }
          {  isLoggedin&&
            <Link to="/dashboard">
              <button className=' bg-richblack-800 py-[6px] px-[10px]   rounded-[8px] border border-richblack-700'>Dashboard</button>
            </Link>
          }
        </div>
    </div>
  )
}

export default Navbar;
