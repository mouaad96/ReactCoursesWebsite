import React from "react";
import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <div className="app__SectionHeader">
      <h1>{props.title}</h1>
      <i className={props.class}></i>
    </div>
  );
};

export default SectionHeader;
