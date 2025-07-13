import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import bell_icon1 from '../../assets/bell_icon.png';
import profile_img from '../../assets/profile_img.png';
import dropdownicon from '../../assets/dropdownicon.png';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('navbar-dark'); // Add class on scroll
      } else {
        navRef.current.classList.remove('navbar-dark'); // Remove class
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#tv-shows">TV Shows</a></li>
  <li><a href="#movies">Movies</a></li>
  <li><a href="#new-popular">New & Popular</a></li>
  <li><a href="#my-list">My List</a></li>
  <li><a href="#language">Browse by Language</a></li>
</ul>


      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search" className="icons" />
        <p>Children</p>
        <img src={bell_icon1} alt="search" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="search" className="profile" />
          <img src={dropdownicon} alt="" className="icons" />
          <div className="dropdown">
            <p onClick={() => { logout() }}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
