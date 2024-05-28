import React from 'react'

function Leftsider() {
  return (
    <div className='fixed left-0 bottom-0 px-10  sm:static'>
    <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3 sm:flex-row'>
        
            <a href='https://www.google.com/'><i class="ri-facebook-circle-line text-[#95dae1] text-2xl"></i></a>
        
        <i class="ri-mail-send-line text-[#95dae1] text-2xl"></i>
        <i class="ri-instagram-line text-[#95dae1] text-2xl"></i>
        <i class="ri-linkedin-fill text-[#95dae1] text-2xl"></i>
        <i class="ri-github-fill text-[#95dae1] text-2xl"></i>
        </div>
        <div className='w-[1px] h-32 bg-[#95dae1] sm:hidden'></div>
        </div>
    </div>
    
  )
}

export default Leftsider