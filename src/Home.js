import React from 'react'
import './Home.css'
import 'boxicons'
import { useState } from 'react';
export default function Home() {
    const [hovered, setHovered] = useState(false);
  return (
    <div className="main">
        <header className="head">
            <a href="#" className="icon">.Sha</a>
            <nav className="bar">
                <a href="#" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Specialization</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        </header>
        <section className="home">
            <div className="hcontent">
                <h1>Hi, I'm Sharan</h1>
                <h3>Frontend Developer</h3>
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
        
    </div>
  )
}
