import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="app__header app__bg app__wrapper section__padding"
      id="Home"
    >
      <div className="app__header-leftsection">
        <p className="app__header-leftsection_paragraph">
          Create your account now and join our community to benefit from our
          courses!
        </p>
        <div className="app__header-leftsection_buttons">
          <button className="app__header-leftsection_btnregister">
            Register
          </button>
          <button className="app__header-leftsection_btnsign">Sign In</button>
        </div>
      </div>

      <div className="app__header-rightsection">
        <div className="app__header-rightsection_search">
          <input type="text" placeholder="Search our 1000+ courses" />
          <button className="app__header-rightsection_btnsearch">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <a href="#" className="app__header-rightsection_explore">
          Explore All Courses
        </a>
      </div>
    </div>
  );
};

export default Header;
