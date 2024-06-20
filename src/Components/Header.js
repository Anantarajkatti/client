import React from 'react';
import {useNavigate,useLocation } from 'react-router-dom';



function Header() {
 
  const navigate=useNavigate()
  const location = useLocation();
  const isAdminPath = location.pathname.includes('/admin');
  const isRootPath = location.pathname === '/';
  
  // const [adminClick, setadminClick]= React.useState(false)
  // console.log(adminClick)
  return (
    <div className='p-5 bg-primary flex justify-between header'>
       <div className='p-5 bg-primary flex' >
        <h1 className='text-secondary text-4xl font-semibold'>A</h1>
        <h1 className='text-secondary text-4xl font-semibold'>R</h1>
        <h1 className='text-secondary text-4xl font-semibold'>K</h1>
        </div>
           {isAdminPath? <div className=' text-white px-10 py-3 rounded'> 
            
             <button className='border-2 border-tertiary text-white px-10 py-3 rounded' onClick={()=>{navigate('/')
              }} > Preview</button>
         </div> : isRootPath ?<div className=' text-white px-10 py-3 rounded'> 
            <h3>Edit Info here</h3>
             <button className='border-2 border-tertiary text-white px-10 py-3 rounded' 
           onClick={()=>{navigate('/admin-login')
           }} > admin</button>
         </div>: null}

    </div>
  )
}

export default Header

