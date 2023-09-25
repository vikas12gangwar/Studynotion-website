import React from 'react'
import frameImage from "../assets/frame.png"
import Signupform  from './Signupform'
import Loginform from "./Loginform"
import {FcGoogle} from 'react-icons/fc'

const Template = ({title,desc1,desc2,image ,formtype,setisLoggedin}) => {
  return (
    <div  className=' w-11/12 max-w-[1060px] mx-auto py-12 flex flex-row justify-between'>
        <div  className='w-11/12 max-w-[450px]  mx-0 '>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.235rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.25]  mt-2 '>
                <span className='text-richblack-5 py-3 ' >{desc1}</span><br></br>
              
                <span className='text-blue-100 italic '>{desc2}</span>  
            </p>
            { formtype==="signup"?(<Signupform setisLoggedin={setisLoggedin}/>):(<Loginform setisLoggedin={setisLoggedin}/>)}
            <div className='flex flex-row w-full items-center  my-4 gap-x-2 '>
                <div className='h-[1px] w-full bg-richblack-700' ></div>
                <p className='text-richblack-700  font-medium leading-[1.375rem]'>OR</p>
                <div className='h-[1px] w-full bg-richblack-700'  ></div>
            </div>
            <button className='w-full  flex justify-center mt-6 items-center  gap-x-2 rounded-[8px] font-medium text-richblack-100 border border-richblack-5 px-[12px] py-[8px] '>
                <FcGoogle/>
                <p>
                    Sign up with  google 
                </p>
            </button>
        </div>
        <div className='relative w-[400px] h-[400px] '>
           <img src={frameImage}
            alt="Pattern"
            width={558}
            height={504}
            loading='lazy' />
            <img src={image}
            alt="Pattern"
            width={558}
            height={490}
            loading='lazy' className='absolute -top-[10px] -left-[10px]'/>

        </div>
           
    </div> 
  )
}

export default Template