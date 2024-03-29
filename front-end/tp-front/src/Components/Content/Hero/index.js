import React from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: "iconStyle",
      down: "iconStyle",
    };
  }

  handleClickUp() {
    if (this.state.up === "iconStyle") {
      this.setState({
        up: "iconStyle up",
        down: "iconStyle",
      });
    } else {
      this.setState({
        up: "iconStyle",
      });
    }
  }

  handelClickDown() {
    if (this.state.down === "iconStyle") {
      this.setState({
        up: "iconStyle",
        down: "iconStyle down",
      });
    } else {
      this.setState({
        down: "iconStyle",
      });
    }
  }

  render() {
    const { name, year, synopsis, rating, seasons } = this.props.homeHero || {};
    const { up, down } = this.state;
    return (
      <div className="hero-wrapper" style={this.props.style}>
        <div className="general-wrapper">
          <p className="name"> {name}</p>
          <div className="content-details">
            <p className="year">{year}</p>
            <p className="rating">{rating}</p>
            <p className="seasons"> {seasons}</p>
          </div>
          <div className="hero-synopsis">
            <p className="synopsis">{synopsis}</p>
          </div>
          <a
            href="https://www.marsinvestigations.net/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <button className="button">Play Media</button>{" "}
          </a>
          <a
            href="https://youtu.be/5KvBAa2PuVo"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button">Watch Trailer</button>{" "}
          </a>
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={up}
            onClick={() => this.handleClickUp()}
          />
          <FontAwesomeIcon
            icon={faThumbsUp}
            rotation={180}
            className={down}
            onClick={() => this.handelClickDown()}
          />
        </div>
      </div>
    );
  }
}

export default Hero;
