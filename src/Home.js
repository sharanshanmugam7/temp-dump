import React from 'react'
import './Home.css'
import 'boxicons'
import { useState } from 'react';
import { useEffect } from 'react';
import Typed from 'typed.js';


export default function Home() {
    const [hoveredl, setHoveredl] = useState(false);
    const [hoveredi, setHoveredi] = useState(false);
    const [hoveredt, setHoveredt] = useState(false);
    const [hoveredg, setHoveredg] = useState(false);
    const [hoveredar, setHoveredar] = useState(false);
    useEffect(() => 
    {
        const options = {
          strings: ['IoT Enthusiast','Web Developer'],
          typeSpeed: 50, 
          backSpeed: 30, 
          loop: true, 
        };
        const typed = new Typed('.typing', options);
        return () => {
            typed.destroy();
          };
    }, []);

    const scrollToAbout = () => {
      const aboutSection = document.getElementById('about');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    
  return (
    <div className="main">
        <header className="head">
            <a href="#" className="icon">.Sha</a>
            <nav className="bar">
                <a href="#" style={{"--i":1}} className="active">Home</a>
                <a href="#" style={{ "--i": 2 }} onClick={scrollToAbout}>About</a>
                <a href="#" style={{"--i":3}} >Qualification</a>
                <a href="#" style={{"--i":4}} >Projects</a>
                <a href="#" style={{"--i":5}} >Contact</a>
            </nav>
        </header>

        <section className="home" id="home">
            <div className="hcontent">
                <h1>Hi, I'm Sharan</h1>
                <h3>
                    <span className="typing"></span>
                </h3>
                <p>
                    Passionate IoT Explorer and Frontend Developer, 
                    merging innovation with every code line. 
                    My digital journey is a relentless pursuit of 
                    excellence, transforming projects into opportunities 
                    for cutting-edge tech and creative solutions. 
                    Welcome to the boundless adventure of innovation!                
                </p>
                <div className="media" >
                    <a href="https://www.linkedin.com/in/sharan-s-95b18b224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredl(true)} onMouseLeave={() => setHoveredl(false)}>
                      <box-icon type='logo' name='linkedin' animation='tada-hover' color={hoveredl ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                    <a href="https://www.instagram.com/sha_.z.__?igsh=YzVkODRmOTdmMw==" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredi(true)} onMouseLeave={() => setHoveredi(false)}>
                      <box-icon name='instagram-alt' type='logo' animation='tada-hover' color={hoveredi ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                    <a href="https://twitter.com/Sharans777?t=ozRwxfH6r5DQMowIvJereQ&s=09" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredt(true)} onMouseLeave={() => setHoveredt(false)}>
                      <box-icon name='twitter' type='logo' animation='tada-hover' color={hoveredt ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                    <a href="https://github.com/sharanshanmugam7" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredg(true)} onMouseLeave={() => setHoveredg(false)}>
                      <box-icon name='github' type='logo' animation='tada-hover' color={hoveredg ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                </div>
                    <div className="dn" onMouseEnter={() => setHoveredar(true)} onMouseLeave={() => setHoveredar(false)}>
                        <a href="#" onClick={scrollToAbout}>
                            <box-icon name="down-arrow-alt" animation="fade-down" color={hoveredar ? '#66FCF1' : 'white'}></box-icon>
                        </a>
                    </div>
            </div>
        </section>
        <section className="about" id="about" style={{ paddingTop: '100px' }}>
        <div className="a-img">

        </div>
        <div className="acontent">
          
        <h2 className="ahead">About</h2>
          <p>
            Hey there!👋, I'm Sharan —Passionate IoT Explorer and Frontend Developer, 
            I orchestrate digital symphonies with lines of code, 
            turning mere projects into mind-blowing experiences. 
            Pioneering transformative solutions, my work 
            transcends conventional boundaries, inviting you 
            to witness innovation and precision dance in perfect 
            harmony. Elevate your projects to celestial heights
            —let's connect and co-create a technological masterpiece 
            that leaves an indelible mark on the digital landscape! 🚀
          </p>
          <div className="media" >
                    <a href="https://www.linkedin.com/in/sharan-s-95b18b224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredl(true)} onMouseLeave={() => setHoveredl(false)}>
                      <box-icon type='logo' name='linkedin' animation='tada-hover' color={hoveredl ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>

                    <a href="https://github.com/sharanshanmugam7" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredg(true)} onMouseLeave={() => setHoveredg(false)}>
                      <box-icon name='github' type='logo' animation='tada-hover' color={hoveredg ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
            </div>
            <div class="resume-btn">
              <a href="/path-to-your-resume" download>
                    Download Resume
              </a>
            </div>
        </div>
        <div className="edu">
          <div className="econt">
            <div className="ebox">
            <box-icon name='code-alt' animation='flashing' color='#66FCF1'></box-icon>
            <h3>Technical Proficiencies</h3>
            <ul className="tech-list">
              <li>C++</li>
              <li>Embedded C++</li>
              <li>Java</li>
              <li>JavaScript (JS)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
