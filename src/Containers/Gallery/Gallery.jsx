import React from "react";
import "./Gallery.css";

import { SectionHeader } from "../../Components";
import { data } from "../../constants";

const Gallery = () => {
  return (
    <div className="app__events section__padding" id="Gallery">
      <SectionHeader class="fa-solid fa-calendar-check" title="Events" />
      <div className="app__events-container">
        {data.events.map((event) => (
          <div className="app__events-event" key={event.id}>
            <img src={event.image} alt="event" />
            <div className="app__events-event_infos">
              <h2>{event.title}</h2>
              <p>{event.about}</p>
              <a href="#">More Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
