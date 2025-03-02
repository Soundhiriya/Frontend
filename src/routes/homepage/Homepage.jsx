import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import './homepage.css'
import { useState } from 'react';

const Homepage = () => {


  const[typingStatus,setTypingStatus]=useState("human1")
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className="orbital"/>
     <div className="left">
      <h1>AI PSYCHIATRIST</h1>
      <h2>Supercharge your creativity and productivity</h2>
      <h3>Welcome! To get the best experience, feel free to share what you need help with, and I’ll guide you through it</h3>
      <Link to="/dashboard">Get Started</Link>
     </div>
     <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <TypeAnimation
              sequence={[
                'Human:hello',
                2000, ()=>{
                  setTypingStatus('bot')
                },
                'Bot:Hey! how it going?',
                2000,()=>{
                  setTypingStatus('human2')
                },
                'Human:yeah,fine',
                2000, ()=>{
                  setTypingStatus('bot')
                },
                'Bot:Glad to hear that',
                2000, ()=>{
                  setTypingStatus('human1')
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt=""  />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Police</Link>
        </div>
      </div>
    </div>

  )
}

export default Homepage
