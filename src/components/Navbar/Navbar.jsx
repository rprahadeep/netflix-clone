import React from 'react';
import logo from '../../assets/logo.png';
import searchicon from '../../assets/search_icon.svg';
import bellicon from '../../assets/bell_icon.svg';
import profileimg from '../../assets/profile_img.png';
import careticon from '../../assets/caret_icon.svg';
import './Navbar.css';
import { logout } from '../../firebase';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo}></img>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchicon} className="icons"></img>
        <p>Children</p>
        <img src={bellicon} className="icons"></img>
        <div className="navbar-profile">
          <img src={profileimg} className="profile"></img>
          <img src={careticon}></img>
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
