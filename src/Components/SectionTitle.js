import React from 'react'

function SectionTitle({
    title,
}) {
  return (
    <div className='flex gap-10 items-center py-10'>
    <div className='text-3xl text-[#4bd1ef]'>{title}</div>
    <div className='w-60 h-[1px] bg-tertiary'></div>
    </div>
  )
}

export default SectionTitle