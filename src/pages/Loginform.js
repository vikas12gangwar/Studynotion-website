import React from 'react'
import {Link, useNavigate } from "react-router-dom"
import {useState} from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from  "react-icons/ai"
import toast from 'react-hot-toast'
import'./Loginform.css'

 const Loginform = ({setisLoggedin}) => {
 

  const navigate=useNavigate();
  const[showPassword,setShowPassword]=useState(false)
  const[FormData,setformData]=useState({
    email:"" ,password:""
  })
  function changeHandler(event){
    
    setformData((prev)=>(
      {
        ...prev,
        [event.target.name]:event.target.value
      }
    ))
    
  }

  function submitHandler(event)
  {
    event.preventDefault();
    setisLoggedin(true);
    toast.success("logged in ");
    navigate("/dashboard")
    const accountdata={...FormData}
    console.log("Printing login data",accountdata)

  }
  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col w-full  gap-y-4 mt-6  '>
        <label className='w-full'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Email Address  <span><sup className='text-pink-200'>*</sup></span></p>
        
          <input className='bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px]  hover:border border-richblack-5 px-[12px] py-[8px] transition-all duration-[10000]'
          required
          name='email'
          type='email'
          placeholder='Enter Email Address '
          value={FormData.email}
          onChange={changeHandler}

             >
          </input>
        </label>
        <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
           Password<span><sup className='text-pink-200'>*</sup></span>
          </p>
          
          <input className='bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px]  hover:border border-richblack-5 px-[12px] py-[8px]'
          required
         
          name='password'
          placeholder='Enter your password'
          type={showPassword?('text'):('password')}
          value={FormData.password}
          onChange={changeHandler}

          >
          </input>
          <span className='absolute right-3 top-[38px] cursor-pointer ' 
          onClick={()=>setShowPassword((prev)=>!prev)}> 
          {showPassword?(<AiOutlineEyeInvisible font-size={24} fill='#AFB2BF'/>):
          (<AiOutlineEye font-size={24} fill='#AFB2BF'/>)}
          </span>
          <Link to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto '>Forgot Password</p>
          </Link>
        </label>
       
          <button className='mt-6 bg-yellow-50 rounded-[8px] font-medium text-richblack-900  px-[12px] py-[8px]' >
            sign in 
          </button >
       

      </form>
    </div>
  )
}
export default Loginform