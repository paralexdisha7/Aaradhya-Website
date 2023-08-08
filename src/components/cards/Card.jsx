import React from "react";
import "./Card.css";
const Card = (props) => {
  const { head, text, image, ...rest } = props;
  return (
    <div className="tab">
      <div {...rest} className="header">
        {head}
      </div>
      <div className="imag">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
