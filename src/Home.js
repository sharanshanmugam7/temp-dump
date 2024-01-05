import React from 'react'
import './Home.css'
import 'boxicons'
import { useState } from 'react';
import { useEffect } from 'react';
import Typed from 'typed.js';


export default function Home() {
    const [hovered, setHovered] = useState(false);
    useEffect(() => 
    {
        const options = {
          strings: ['Frontend Developer'],
          typeSpeed: 50, 
          backSpeed: 30, 
          loop: true, 
        };
        const typed = new Typed('.typing', options);
        return () => {
            typed.destroy();
          };
    }, []);

    
  return (
    <div className="main">
        <header className="head">
            <a href="#" className="icon">.Sha</a>
            <nav className="bar">
                <a href="#" style={{"--i":1}} className="active">Home</a>
                <a href="#" style={{"--i":2}} >About</a>
                <a href="#" style={{"--i":3}} >Specialization</a>
                <a href="#" style={{"--i":4}} >Projects</a>
                <a href="#" style={{"--i":5}} >Contact</a>
            </nav>
        </header>
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="home" id="home">
=======
        <section className="home">
>>>>>>> 699e721ccfe8ee4f1c09a80949b4b433d2dda86a
=======
        <section className="home">
>>>>>>> 699e721ccfe8ee4f1c09a80949b4b433d2dda86a
            <div className="hcontent">
                <h1>Hi, I'm Sharan</h1>
                <h3>
                    <span className="typing"></span>
                </h3>
                <p>Passionate and versatile, I am a seasoned Frontend Developer, 
                    Backend Enthusiast, and IoT Explorer, continuously pushing 
                    the boundaries of technology and weaving innovation into 
                    every line of code. My journey in the digital realm is 
                    fueled by a relentless pursuit of excellence, where 
                    each project becomes an opportunity to merge 
                    cutting-edge technology with creative solutions.
                </p>
                    <div className="dn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <a href="#">
                            <box-icon name="down-arrow-alt" animation="fade-down" color={hovered ? 'black' : 'white'}></box-icon>
                        </a>
                    </div>
            </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="about" id="about">
        <div className="a-img">

        </div>
        <div className="acontent">
        <h1>About Me</h1>
          <p>This is the about section below the home section.</p>
        </div>
      </section>
=======
        
>>>>>>> 699e721ccfe8ee4f1c09a80949b4b433d2dda86a
=======
        
>>>>>>> 699e721ccfe8ee4f1c09a80949b4b433d2dda86a
    </div>
  )
}
