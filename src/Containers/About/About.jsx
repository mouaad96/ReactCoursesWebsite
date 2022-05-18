import React from "react";
import "./About.css";
import { images } from "../../constants";
import { SectionHeader } from "../../Components";

const About = () => {
  return (
    <div className="app__about section__padding app__wrapper" id="About">
      <SectionHeader class="fa-solid fa-question" title="About Us" />
      <div className="app__about-content">
        <img className="app__about-img" src={images.about} alt="about" />

        <p className="app__about-text">
          Online Study is now in trend, suppose due to some emergency issues it
          is not possible to conduct regular school classes than in such
          scenarios online studies are fruitful for students. From the
          continuation of the above paragraph here I am providing some
          advantages of online studies: Timing Friendly: Some vocational courses
          or regular courses provide an option to study online. Here students
          have the option to choose the slot as per their accordance. This
          pattern can be timing friendly for students. Reduce the Reachability
          Issue: Students can attend classes from their homes. It takes less
          time to attend an online class. At the same time, various groups can
          attend online classes. Saves Money: For users and teachers, both
          points of view online classes are cheaper than traditional classes.
          They both can access the internet from their own devices.
        </p>
      </div>
    </div>
  );
};

export default About;
