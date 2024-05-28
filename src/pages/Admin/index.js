import React from 'react'; // Import React from the 'react' library

 import Header from '../../Components/Header.js'; // Import Header component from its relative path
import { Tabs } from 'antd'; // Import Tabs component from the 'antd' library

 import Adminintro from './Adminintro.js'; // Import Adminintro component from its current directory
 import AdminAbout from './AdminAbout.js'; // Import AdminAbout component from its current directory

 import { useSelector } from 'react-redux'; // Import useSelector hook from 'react-redux'

 import Experiences from './Experiences.js'; // Import  Experiences component from its current directory
 import AdminProjects from './AdminProjects.js'; // Import AdminProjects component from its current directory
import AdminContact from './AdminContact.js'; // Import AdminContact component from its current directory

 const  {TabPane} =Tabs;
 
 


function Admin() {
    const {portfolioData}= useSelector((state)=> state.root)

  return (
    <div>
    <Header/>
    <div className='flex gap-10 items-center px-5 py-3 '>
       <div className='text-5xl text-[#4bd1ef]'>Portfolio Admin</div>
        <div className='w-60 h-[1px] bg-tertiary'></div>
    </div>
    
    {portfolioData && <div className=' px-5'>
      <Tabs defaultActiveKey='1' >
        <TabPane tab="Intro" key="1">
            <Adminintro/>
        </TabPane>
        <TabPane tab="About" key="2">
            <AdminAbout/>
        </TabPane>
        <TabPane tab="Experiences" key="3">
            <Experiences/>
        </TabPane>
        <TabPane tab="Projects" key="4">
            <AdminProjects/>
        </TabPane>
        <TabPane tab="Contact" key="5">
            <AdminContact/>
        </TabPane>
      </Tabs>
    </div>}

    </div>
  )
}

 export default Admin