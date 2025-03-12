import React, { useEffect, useState } from 'react';

function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      setTheme('dark');
    }
  }, []);

  function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  return (
    <div className='headerSection'>
      <div className="header">
        <div className="logo">
        </div>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Skills">Skills</a>
          <button onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
