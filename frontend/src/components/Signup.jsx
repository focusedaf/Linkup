import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import validator from 'validator'
const Signup = ({setToken}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  useEffect(() => {
    // Disable scrolling when this component is mounted
    document.body.style.overflow = "hidden";

    // Cleanup: Restore scrolling when this component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const onSubmitHandler = async (e)=>{
    try {
      e.preventDefault();
      const response =await axios.post(backendUrl + '' ,{email,password})

     if(response.data.success){
        setToken(response.data.token)
     }else{
      toast.error(response.data.message)
     }
      
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  const valiadteEmail = (e) => {
    const email = e.target.value;
    if(validator.isEmail){
        return "Valid Email"
    }else{
        return "Enter Valid email"
    }
  }
  return (
    <div className='overflow-hidden min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-xl font-bold mb-4'>Join Linkup Now!</h1>
        <form onSubmit={onSubmitHandler}>
        <div className='mb-3 min-w-72' >
            <p className='text-sm font-medium text-gray-700 mb-2'>Name</p>
            <input onChange={(e)=>setName(e.target.value)}className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type ="text" placeholder='Name' required/>
          </div>
          <div className='mb-3 min-w-72' >
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input onChange={(e)=>{setEmail(e.target.value);valiadteEmail(e.target.value)}} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type ="email" placeholder='Email' required/>
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type ="password" placeholder='Password' required/>
          </div>
          <button className='bg-gray-900 hover:bg-black mt-2 w-full py-2 px-4 rounded-md text-white' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Signup

