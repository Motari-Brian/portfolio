import React from "react";
import "./CardImage.css";
const CardImage = (props) => {
  return <div className="cardImage">{props.children}</div>;
};

export default CardImage;
