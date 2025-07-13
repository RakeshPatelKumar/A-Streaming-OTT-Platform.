import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import bell_icon1 from '../../assets/bell_icon.png';
import profile_img from '../../assets/profile_img.png';
import dropdownicon from '../../assets/dropdownicon.png';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('navbar-dark');
      } else {
        navRef.current.classList.remove('navbar-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tv-shows">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/new-popular">New & Popular</Link></li>
          <li><Link to="/my-list">My List</Link></li>
          <li><Link to="/language">Browse by Language</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="search" className="icons" />
        <p>Children</p>
        <img src={bell_icon1} alt="notifications" className="icons" />

        <div className="navbar-profile">
          <img src={profile_img} alt="profile" className="profile" />
          <img src={dropdownicon} alt="dropdown" className="icons" />
          <div className="dropdown">
            <p onClick={logout}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
