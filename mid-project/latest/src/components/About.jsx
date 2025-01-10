import React from 'react'
const About = (props) => {
  return (
    <section>
    <div className='about-page'>
      <div className='about-pic'>
        <img src={props.image} alt="me" />
      </div>
    <div>  
    <h1>About Me</h1>
    <p>My name is Muhammad Suleman. I'm full stack developer based in Lahore,Pakistan, and I am very passionate and dedicated to my work. With 3 years of experience as a professional full stack developer, I have acquired the skills necessary to build great and premium wesites</p>
    </div>
    </div>
    </section>
    
    
  )
}

export default About;
