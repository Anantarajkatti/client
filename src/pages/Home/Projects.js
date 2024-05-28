import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
// import { projects } from '../../resources/projects';
import { useSelector } from 'react-redux';

function Projects() {

    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);

    const {portfolioData}=useSelector((state)=>state.root);
    const {projects}=portfolioData;

  return (

    <div>
    <SectionTitle title="Projects"/>
    <div className='flex py-10 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#4e5048] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
           {projects.map((project, index)=>(
            <div 
             onClick={()=>{
                setSelectedItemIndex(index);
             }}
             className='cursor-pointer'>
                <h1 className={`text-xl px-10 ${selectedItemIndex===index ?'text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#4e5344] py-3 sm:':'text-white'}`}>{project.title}</h1>
            </div>
           ))}
        </div>
        <div className="flex gap-10 items-center justify-center sm:flex-col">
        <img src={projects[selectedItemIndex].image} alt='' className='h-60 w-72'/>
        <div className='flex flex-col gap-5'>
        <h1 className='text-secondary text-2xl'>{projects[selectedItemIndex].title}</h1>
        <h1 className='text-[#9eb57c] text-xl'>{projects[selectedItemIndex].company}</h1>
        <p className='text-white text-md'>{projects[selectedItemIndex].description}</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Projects