import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'

import {AiOutlineEyeInvisible,AiOutlineEye} from  "react-icons/ai"

export const Signupform = ({setisLoggedin}) => {
    function submitHandler(event)
  {
    event.preventDefault();
    if(formData.createpassword!==formData.confirmpassword){
        toast.error("password doesnot match");
        return ;
    }
    setisLoggedin(true);

    toast.success("Account created ");
    navigate("/dashboard")
    const finaldata={...formData,accountType}
    console.log("printing Signup  data",finaldata)

  }

  const navigate=useNavigate();
    const [formData,setFormData]=useState(
        {
            firstname:"",
            lastname:"",
            email:"",
    
            createpassword:"",
            confirmpassword:""

        })
    const[createPassword,setcreatePassword]=useState(false)
    const[confirmPassword,setconfirmPassword]=useState(false)
    const[accountType,setaccountType]=useState("Student")
  
    function changeHandler(event){
        setFormData((prev)=>(
            {
            ...prev,
            [event.target.name]:event.target.value
            }
        ))
        
        }
  return (
    <div  >
        <div className='max-w-max flex flex-row bg-richblack-800 p-1 gap-x-1 my-6 rounded-full  '>
            <button
            className={`${ accountType==="student"?
            " bg-richblack-900 text-richblack-5":
            " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-800`}
            
            onClick={()=>setaccountType("student")}>
                Student 
            </button>
            <button 
            className={`${ accountType==="Instructor"?
            " bg-richblack-900 text-richblack-5":
            " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-800`}
            onClick={()=>setaccountType("Instructor")}>
                Instructor
            </button>
        
        </div>
        <form onSubmit={submitHandler}  className='flex flex-col gap-y-4 ' >
            <div  className='flex flex-row justify-between gap-y-2'>
                <label> 
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup> </p>
                    <input className='bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px]  hover:border border-richblack-5 px-[12px] py-[8px]'
                    required
                    type="text"
                    name="firstname"
                    onChange={changeHandler}
                    placeholder='Enter first name'
                    value={formData.firstname}
                    />
                </label>
                <label> 
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>  Last Name<sup className='text-pink-200'>*</sup> </p>
                    <input className='bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px]  hover:border border-richblack-5 px-[12px] py-[8px]'
                    required
                    type="text"
                    name="lastname"
                    onChange={changeHandler}
                    placeholder='Enter last name'
                    value={formData.lastname}
                    />
                </label>

            </div>
             <label> 
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email<sup className='text-pink-200'>*</sup> </p>
                <input className='bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px]  hover:border border-richblack-5 px-[12px] py-[8px]'
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder='Enter email address'
                value={formData.email}
                />
            </label>
            <div className='flex w-full flex-row justify-between gap-y-3'>
            
                <label className=' relative'> 
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create password<sup className='text-pink-200'>*</sup> </p>
                    <input
                    required className='bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px]  hover:border border-richblack-5 px-[12px] py-[8px]'
                    type={createPassword?('text'):('password')}
                    name="createpassword"
                    onChange={changeHandler}
                    placeholder='Create Password'
                    value={formData.createpassword}
                    />
                    <span  className='absolute right-3 top-[38px] cursor-pointer '  onClick={()=>setcreatePassword((prev)=>!prev)}> 
                        {createPassword?(<AiOutlineEyeInvisible font-size={24} fill='#AFB2BF' />):(<AiOutlineEye font-size={24} fill='#AFB2BF'/>)}
                </span>
                </label>
                <label className=' relative'> 
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup> </p>
                    <input
                    required className='bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px]  hover:border border-richblack-5 px-[12px] py-[8px]'
                    type={confirmPassword?('text'):('password')}
                    name="confirmpassword"
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    value={formData.confirmpassword}
                    />
                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer ' onClick={()=>setconfirmPassword((prev)=>!prev)}> 
                        {confirmPassword?(<AiOutlineEyeInvisible font-size={24} fill='#AFB2BF'/>):(<AiOutlineEye font-size={24} fill='#AFB2BF' />)}
                </span>
                </label>
            
            </div>
            <button className='mt-6 bg-blue-500 rounded-[8px] font-medium text-richblack-900  px-[12px] py-[8px]' >Create Account</button>
            



        </form>

    </div>
  )
}
export default Signupform
