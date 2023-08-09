import React from "react";
import "./css/home.css";
import Social from '../social/Social';
import '../social/Social.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="container">
      <h1>Hotel Aaradhya</h1>
      <h3>Banquet Hall | Rooms | Movie Theatre | Restaurant</h3>
      <div className="photos">
        <div><img src="images\5.jpg" alt="" /></div>
        <div><img src="images\43.jpg" alt="" /></div>
        <div><img src="images\49.jpg" alt="" /></div>
        <div><img src="images\60.jpg" alt="" /></div>
        <div><img src="images\74.jpg" alt="" /></div>
        <div><img src="images\112.jpg" alt="" /></div>
      </div>
      <div className="footer">
        <div className="call">
          <span>Call Us At</span>
          <p>02363-299890</p>
          <p>+91 75591 14122 </p>
          <p>+91 94233 62122</p>
        </div>
        <div className="email">
          <span>Email Us At</span>
          <p>aradhyaadorer@gmail.com</p>
          <div className="social">
            <Social/>
          </div>
        </div>
        <div className="location ">
        <div className="buttons">
        <a href="https://goo.gl/maps/kePrdPUatD6ykwGC7"><FontAwesomeIcon icon={faLocationDot} className="ics"/></a>
        <p>Zarap zero point, Near Nemale bridge,
Sindhudurg , Kudal, India, Maharashtra - 416510</p>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
