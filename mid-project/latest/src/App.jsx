import React from "react";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import './App.css';
import image2 from './assets/img2.png';
import image3 from './assets/img3.png';
import image5 from './assets/me.jpg';
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./components/About";
import  Services  from "./components/Services";


function App (){
  const [selectedTopic , setselectedTopic]=useState();
  const menu = (abc)=>{
    setselectedTopic (abc)
    console.log(abc)

  }


  return (
    <BrowserRouter>
    <section  className="background-img"style= {{backgroundImage: `url(${image3})`}}>
    <header className="header-bar">
     <span className="logo" >Portfolio</span>
      <div>
        <nav>
        <ul className="nav-menu">
            <Header isSelected = {selectedTopic === 'home'} select={()=>{menu('home')}} to = '/'>Home</Header>
            <Header isSelected = {selectedTopic === 'about'} select={()=>{menu('about')}} to = '/about'>About</Header>
            <Header isSelected = {selectedTopic === 'services'} select={()=>{menu('services')}} to = '/services'>Services</Header>
            <Header isSelected = {selectedTopic === 'projects'} select={()=>{menu('projects')}} to = '/projects'>Projects</Header>
            <Header isSelected = {selectedTopic === 'contact'} select={()=>{menu('contact')}} to ='/contact'>Contact</Header>
            
          </ul>
        
        </nav>
      </div>
      </header>
      <div className="content"> 
        <Routes>
          <Route path ='/' element={
            <ImageSection image={image2} title = "Muhammad Suleman" description = "A Creative Freelancer & Full Stack Developer"/>}
            />
          </Routes>
      </div>
      <div className="about-contant">
        <Routes>
            <Route path="/about" element={
              <About image={image5} />
            } />
        </Routes>
      </div> 
      <div className="service-content">
        <Routes>
          <Route path = "/services" element={
                <Services />
              }/>
        </Routes>
        
        </div>  
      </section>
</BrowserRouter> 
  )
  };
  export default App;
