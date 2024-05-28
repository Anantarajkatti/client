import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { HideLoading, ShowLoading } from '../../redux/rootslice';
import { useDispatch } from 'react-redux';

function Login() {
    const [user,setUser]=useState({
        username:"",
        password:""
    })
    const dispatch=useDispatch()  
    const login=async()=>{ 
        try{
            dispatch(ShowLoading()) 
            const response=await axios.post('/api/portfolioRoute/admin-login',user);
            dispatch(HideLoading()) 
             if(response.data.success){
                message.success(response.data.message)
                localStorage.setItem('token',response.data);
                window.location.href='/admin';

            }else{
                message.error(response.data.message)
            }
        } catch(error){
            message.error(error.message)
        }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col'>
      <h1 className='text-2xl'>Admin Login</h1>
      <hr />
      <input type='text' value={user.username} onChange={(e)=> setUser({...user,username:e.target.value})} placeholder='username'/>
      <input type='password' value={user.password} onChange={(e)=> setUser({...user,password:e.target.value})} placeholder='password'/>
     <button className='bg-primary text-white p2 rounded-lg' onClick={login}>Login</button>
    </div>
    </div>
  )
}

export default Login