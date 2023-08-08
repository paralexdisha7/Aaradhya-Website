import React from "react";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope ,faPhone} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="buttons">
      <a href="https://www.instagram.com/hotel_aaradhya_/">
        <FontAwesomeIcon icon={faInstagram} className="ics" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} className="ics" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=7559114122">
        <FontAwesomeIcon icon={faWhatsapp} className="ics" />
      </a>
      <a href="tel:7559114122">
        <FontAwesomeIcon icon={faPhone} className="ics" />
      </a>
      <a href="https://www.youtube.com/@hotel_aaradhya_">
        <FontAwesomeIcon icon={faYoutube} className="ics" />
      </a>
      {/* <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a> */}
    </div>
  );
};

export default Social;
