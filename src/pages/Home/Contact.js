import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {
    const {portfolioData}=useSelector((state)=>state.root);
    const {contact}=portfolioData;
  
  return (

    <div>
        <SectionTitle title="Contact Me"/>
        <div className='flex items-center justify-evenly sm:flex-col'>
           <div className='flex flex-col gap-1'>
           <p className='text-white text-md'>{'{'}</p>
            {Object.keys(contact).map(
              (key)=>
              key!=="_id" &&(
                <p className='ml-7'>
                    <span className='text-tertiary text-md'>{key}  : </span> <span className='text-tertiary text-md'>{contact[key]}</span>
                </p>
              
            ))}
            <p className='text-white'>{'}'}</p>   
           </div>
           <div>
            <img src='https://cdn-icons-png.freepik.com/256/8673/8673857.png?ga=GA1.1.1002419494.1716552411&semt=ais_hybrid' alt='' className='h-50'/>
           </div>
        </div>
    </div>
    
  )
}

export default Contact