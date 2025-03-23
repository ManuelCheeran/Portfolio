import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { ImMail4 } from "react-icons/im";
import { CiFacebook } from "react-icons/ci";
import { color } from 'framer-motion';

function HeroSection() {

  const openResume = () => {
    window.open('./MEARN.pdf', '_blank');
  };

  return (
    <section>
      <div className="hero">
        <div className="containerOne">
          <h5>ME<span style={{ color: "red", fontWeight: "1000" }} >A</span><span style={{color:"blue" , fontWeight: "1000"}}>R</span>N Developer</h5>
          <h1>I'm Manuel Joseph</h1>
          <p>Hi, I’m a passionate MERN stack developer and a B.Tech Computer Science graduate. I love building responsive, user-friendly web applications and bringing creative ideas to life with clean, efficient code. Currently exploring advanced web technologies and always eager to learn and grow. Let’s build something amazing!</p>

          <div className="iconContainer">
            <div className="icons"><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/manuel-cheeran-362451324"><TiSocialLinkedinCircular className='i'/></a></div>
            <div className="icons"><a target='_blank' rel='noopener noreferrer' href="https://github.com/ManuelCheeran"><VscGithub className='i'/></a></div>  
            <div className="icons"><a target='_blank' rel='noopener noreferrer' href="mailto:manuelcheerancareers@gmail.com"><ImMail4 className='i'/></a></div>
            <div className="icons"><a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/profile.php?id=61561968879437"><CiFacebook className='i'/></a></div>
          </div> 

          <button className='Resume' onClick={openResume}>Resume</button>

        </div>
        <div className="containerTwo">
          <img src="https://img.freepik.com/premium-photo/anime-boy-looking-up-sky-with-kite-sky_902846-161239.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
