    import React, { useEffect } from 'react'
import Header from '../../Components/Header'
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Leftsider from './Leftsider'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import { setPortfoliodata } from '../../redux/rootslice'



    
    function Home() { 
      const dispatch = useDispatch();
      const {portfolioData}=useSelector((state)=>state.root);
      console.log(portfolioData)
      useEffect(() => {
        const fetchPortfolioData = async () => {
          try {
            const response = await axios.get("https://dynamic-portfolio-28yn.onrender.com/api/portfolioRoute/get-portfolio-data");
            dispatch(setPortfoliodata(response.data));
          } catch (error) {
            console.error('Error fetching portfolio data:', error);
          }
        };
    
        fetchPortfolioData();
      }, [dispatch]);
    
      
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