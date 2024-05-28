    import React from 'react'
import Header from '../../Components/Header'
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Leftsider from './Leftsider'
import { useSelector } from 'react-redux'



    
    function Home() {
      const {portfolioData}=useSelector((state)=>state.root);
      return (
        <div>
      
          <Header />
        
          {portfolioData &&(

          <div className='bg-primary px-40 sm:px-5'>
          <Intro/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Footer/>
          <Leftsider/>
          </div>
          )}
        </div>
      )
    }
    
    export default Home