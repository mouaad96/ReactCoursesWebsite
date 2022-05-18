import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer ">
      <div className="app__footer-main section__padding">
        <div className="app__footer-main-socials">
          <h3>Socials</h3>
          <ul>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-discord"></i>
            <i className="fa-brands fa-instagram"></i>
          </ul>
        </div>
        <div className="app__footer-main-links">
          <h3>Useful Links</h3>
          <ul>
            <a href="#">First Link</a>
            <a href="#">Second Link</a>
            <a href="#">Third Link</a>
            <a href="#">Fourth Link</a>
            <a href="#">Fifth Link</a>
          </ul>
        </div>

        <div className="app__footer-main-Services">
          <h3>Our Services</h3>
          <ul>
            <a href="#">First Service</a>
            <a href="#">Second Service</a>
            <a href="#">Third Service</a>
            <a href="#">Fourth Service</a>
            <a href="#">Fifth Service</a>
          </ul>
        </div>
      </div>
      <div className="app__footer-sub">
        <p>
          <span>©</span> Copyright <a href="#">Online Courses</a>. All Rights
          Reserved
        </p>
        <p>
          Designed by <a href="#">Mouaad Es-safryouy</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
