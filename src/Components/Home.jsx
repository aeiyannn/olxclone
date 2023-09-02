import React from "react";
import Header from "./Header/Header";
import Category from "./category/category";
import Slider from "./Slider/Slider";
import Subcategory from "./Subcategory/subcategory";
import Viewads from "./Ads/Viewads";
import Fslider from "./FSlider/Fslider";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";



function Home() {
  // let navigate=useNavigate()
  // const signup=()=>{
  //   navigate("/post")
  // }
  
  return (
    <>
    <Header/>
    <Category/>
    <Slider/>
    <Subcategory/>
    <Viewads/>
    <Fslider/>
    <Footer/>
    {/* <button onClick={()=>signup()} style={{bottom:0 ,position:"fixed"}} > Hello</button> */}
    </>
    
  );
}

export default Home;
