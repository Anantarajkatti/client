import React from 'react'
// import { experiences } from '../../resources/experiences'
import SectionTitle from '../../Components/SectionTitle';
import { useSelector } from 'react-redux';

function Experience() {
    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);
    const {portfolioData}=useSelector((state)=>state.root);
    const {experiences}=portfolioData;
    
  

  return (
    <div>
      <SectionTitle title="Experience"/>
    <div className='flex py-10 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#4e5048] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
           {experiences.map((experience, index)=>(
            <div 
             onClick={()=>{
                setSelectedItemIndex(index);
             }}
             className='cursor-pointer'>
                <h1 className={`text-xl px-10 ${selectedItemIndex===index ?'text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#4e5344] py-3 sm:':'text-white'}`}>{experience.period}</h1>
            </div>
           ))}
        </div>
        <div className='flex flex-col gap-5'>
        <h1 className='text-secondary text-2xl'>{experiences[selectedItemIndex].title}</h1>
        <h1 className='text-[#9eb57c] text-xl'>{experiences[selectedItemIndex].company}</h1>
        <p className='text-white text-md'>{experiences[selectedItemIndex].description}</p>

        </div>
    </div>
</div>
  )
}

export default Experience