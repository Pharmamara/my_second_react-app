import React from "react";
import "./data.js";
class Card extends React.Component {
  render() {
    const {
      url,
      name,
      universe,
      alterego,
      occupation,
      friends,
      superpowers,
      info,
    } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <img src={url} alt={name} />
          <h4 className="card-name">{name}</h4>
          <p className="card-universe">{universe}</p>
          <p className="card-alterego">{alterego}</p>
          <p className="card-occupation">{occupation}</p>
          <p className="card-friends">{friends}</p>
          <p className="card-superpowers">{superpowers}</p>
          <p className="card-info">{info}</p>
        </div>
        <div className="card-footer">
          <span className="card-score">#####</span>
        </div>
      </div>
    );
  }
}
export default Card;
