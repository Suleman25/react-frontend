import React from "react";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import './App.css';
import image1 from './assets/img1.png';
import image2 from './assets/img2.png';
import image3 from './assets/img3.png';
import { useState } from "react";


function App (){
  const [selectedTopic , setselectedTopic]=useState();
  const menu = (abc)=>{
    setselectedTopic (abc)
    console.log(abc)

  }


  return (
    <>
    <section  className="background-img"style= {{backgroundImage: `url(${image3})`}}>
    <header className="header-bar">
     <span className="logo" >Front-End</span>
      <div>
        <nav>
        <ul className="nav-menu">
            <Header isSelected = {selectedTopic=== 'home'}select={()=>{menu('home')}}>Home</Header>
            <Header isSelected = {selectedTopic=== 'about'}select={()=>{menu('about')}}>About</Header>
            <Header isSelected = {selectedTopic=== 'services'}select={()=>{menu('services')}}>Services</Header>
            <Header isSelected = {selectedTopic=== 'resume'}select={()=>{menu('resume')}}>Resume</Header>
            <Header isSelected = {selectedTopic=== 'portfolio'}select={()=>{menu('portfolio')}}>Portfolio</Header>
            <Header isSelected = {selectedTopic=== 'blog'}select={()=>{menu('blog')}}>Blog</Header>
            <Header isSelected = {selectedTopic=== 'contact'}select={()=>{menu('contact')}}>Contact</Header>
            
          </ul>
        
        </nav>
      </div>
      </header>
      <div className="content">
      <ImageSection image={image2} title = "Muhammad Suleman" description = "A Creative Freelancer & Full Stack Developer"/>
    </div>
      </section>
</> 
  )
  };
  export default App;