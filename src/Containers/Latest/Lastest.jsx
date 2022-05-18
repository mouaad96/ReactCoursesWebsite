import React from "react";
import "./Latest.css";
import { data } from "../../constants";
import { SectionHeader } from "../../Components";
const Lastest = () => {
  return (
    <div className="section__padding app__latest" id="Latest">
      <SectionHeader class="fa-solid fa-marker" title="Latest Courses" />
      <div className="app__latest-courses">
        {data.courses.map((course) => (
          <div className="app__latest-course" key={course.id}>
            <img
              className="app__latest-course_img"
              src={course.image}
              alt="csharp"
            />
            <div className="app__latest-course_infos">
              <h2>{course.category}</h2>
              <div className="infos">
                <h4>
                  {course.title}
                  <span> ({course.videos} videos)</span>
                </h4>
                <p>{course.about}</p>

                <a href="#">Explore</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lastest;
