import React from 'react'
import { FaLink } from 'react-icons/fa';

function ProjectSection() {
  return (
    <section>

      <div className="project">

      <div className="projectContent">
      <h2 id='Projects'>Projects</h2>
      </div>

    <div className="box">

    <div className="projectBox">
    <div className="miniboxOne"><img src="https://cdn.pixabay.com/photo/2024/04/10/07/02/man-8687405_1280.jpg" alt="" /></div>
    <div className="miniboxTwo">
      <h5>Travel Blog</h5>
      <p>
  <ul>
    <li>Technology Stack: Built using HTML, CSS, and JavaScript.</li>
    <li>Responsive Design: Optimized for seamless performance across devices of all screen sizes.</li>
    <li>API Integration: Fetches real-time weather data from a public weather API.</li>
    <li>User-Friendly Interface: Displays weather details like temperature, location, and conditions.</li>
    <li>Interactivity: Provides instant weather updates based on user input.</li>
  </ul>
</p>
        <div className="buttonContainer"><a href="https://manuelcheeran.github.io/Travel_blog/" target='_blank' rel='noopener noreferrer'><button><FaLink size={24} color="#007BFF" /></button></a></div>
  
    </div>
    </div>

    <div className="projectBox">
    <div className="miniboxOne"><img src="https://img.freepik.com/premium-photo/beautiful-landscape-with-blue-sky-illustration-anime-style-blue-sky-with-clouds-landscape-background-heavens-with-bright-weather-summer-season-outdoor-anime-style_567294-57012.jpg" alt="" /></div>
    <div className="miniboxTwo">
    <h5>Weather API</h5>
    <p>
      <ul>
        <li>Technology Stack: Built using HTML, CSS, and JavaScript.</li>
        <li>API Integration: Fetches real-time weather data from a public weather API.</li>
        <li>Responsive Design: Optimized for seamless performance across devices of all screen sizes.</li>
        <li>Dynamic UI: Displays weather information like temperature, location, and conditions.</li>
        <li>Interactive Features: Provides instant weather updates based on user input.</li>
        <a href="https://graceful-donut-9354b9.netlify.app/" target='_blank' rel='noopener noreferrer'>
      <button><FaLink size={24} color="#007BFF" /></button>
    </a>
      </ul>
    </p>
    </div>
    </div> 

    <div className="projectBox">
    <div className="miniboxOne"><img src="https://static.vecteezy.com/system/resources/thumbnails/027/573/552/small_2x/animation-phone-with-social-media-post-blogging-influencer-blogger-girl-character-flat-cartoon-animation-design-element-4k-footage-alpha-channel-transparency-for-web-design-video.jpg" alt="" /></div>
    <div className="miniboxTwo">
    <h5>Media Player</h5>
    <p><ul>
  <li>Technology Stack: Built with Vite.js, HTML, CSS, Bootstrap, Node.js, and Express.js, using db.json as a lightweight database.</li>
  <li>Full-Stack Functionality: A responsive design with complete CRUD functionality.</li>
  <li>Seamless API integration with Axios for efficient front-end and back-end communication.</li>
  <li>Responsive Design: Optimized for seamless performance across devices of all screen sizes.</li>
  <div className="buttonContainer"><a href="https://mediaplayer-frontend-ten-sigma.vercel.app/home" target='_blank' rel='noopener noreferrer'><button><FaLink size={24} color="#007BFF" /></button></a></div>
</ul></p>


    </div>
    </div> 


     
    </div>

      </div>
      

  </section>
  )
}

export default ProjectSection