import React from "react";
import "./ContactUs.css";
import { SectionHeader } from "../../Components";

const ContactUs = () => {
  return (
    <div className="app__contactus section__padding">
      <SectionHeader class="fa-solid fa-message" title="Contact Us" />
      <div className="app__contactus-container">
        <form className="app__contactus-container-form">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" cols="20" rows="5"></textarea>
          <button>Send</button>
        </form>
        <div className="app__contactus-container-infos">
          <div className="app__contactus-container-infos_phone">
            <span>
              <i className="fa-solid fa-phone"></i> Call Us
            </span>
            <p> +212677882074</p>
            <p> +212752361481</p>
          </div>
          <div className="app__contactus-container-infos_email">
            <span>
              <i className="fa-solid fa-at"></i> Email Us
            </span>
            <p>mouaadessafryouy1@gmail.com </p>
            <p>mouaadosse96@gmail.com </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
