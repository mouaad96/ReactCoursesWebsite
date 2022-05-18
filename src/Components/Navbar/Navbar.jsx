import React, { useState } from "react";
import "./Navbar.css";

import images from "../../constants/images";

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);

  return (
    <>
      <div className="app__navbar">
        <div className="app__navbar-logo">
          <i className="fa-solid fa-graduation-cap"></i>
          <span>Online Courses</span>
        </div>
        <ul className="app__navbar-links">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Latest">Latest Addition</a>
          </li>
          <li>
            <a href="#Gallery">Gallery</a>
          </li>
          <li>
            <a href="#ContactUs">Contact Us</a>
          </li>
        </ul>
        <span className="show_menu" onClick={() => setShowmenu(!showmenu)}>
          {showmenu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </span>
      </div>
      {showmenu && (
        <ul className="app__smallnavbar-links">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Latest">Latest Addition</a>
          </li>
          <li>
            <a href="#Gallery">Gallery</a>
          </li>
          <li>
            <a href="#ContactUs">Contact Us</a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
