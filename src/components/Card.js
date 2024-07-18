import React from "react";
import "./Card.css";

const HeroCard = ({ url, name, alterego, occupation, superpowers, info }) => {
  return (
    <div className="HeroCard">
      <img className="hc-image" src={url} alt={name} />
      <div className="hc-name">Имя: {name}</div>
      <div className="hc-alterego">Второе Я: {alterego}</div>
      <div className="hc-occupation">
        <span className="hc-span">Призвание:</span> {occupation}
      </div>
      <div className="hc-superpowers">
        <span className="hc-span">Суперспособности:</span> {superpowers}
      </div>
      <div className="hc-description">{info}</div>
    </div>
  );
};

export default HeroCard;
