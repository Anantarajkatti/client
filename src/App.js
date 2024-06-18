import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home" 
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading, setPortfoliodata } from "./redux/rootslice";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";
 
  


function App() {
  const {loading,portfolioData,reloadData}=useSelector((state)=>state.root);
  
//  const [showLoading,setSHowLoading]=useState(false)
  const  dispatch= useDispatch()
 const getPortfolioData=async()=>{
  try{
    dispatch(ShowLoading());
    const response= await axios.get("https://dynamic-portfolio-28yn.onrender.com/api/portfolioRoute/get-portfolio-data");
    dispatch(setPortfoliodata(response.data))
    dispatch(ReloadData(false))
    // console.log(response)
    // console.log(response.data)
    dispatch(HideLoading())
  }catch(error){
    dispatch(HideLoading())
  }
 }

 useEffect(()=>{
  if(!portfolioData){
  getPortfolioData()
  }
 },[portfolioData])

 useEffect(()=>{
  if(reloadData){
    getPortfolioData()
  }
 },[reloadData])

//  useEffect(()=>{
//   console.log(portfolioData)
  
//  },[portfolioData])



  return (
    <BrowserRouter>
    {loading?<Loader/>:null}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<Admin/>}/> 
        <Route path="/admin-login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
