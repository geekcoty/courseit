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
      mediaName: "",
      mediaRating: "",
      mediaSynopsis: "",
      mediaYear: "",
      mediaSeasons: "",
      mediaCover: "",
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
        down: "iconStyle down",
      });
    } else {
      this.setState({
        down: "iconStyle",
      });
    }
  }

  render() {
    const { name, rating, synopsis, year, seasons } = this.props.homeHero;
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
          <a href="http://google.com" className="button">
            Play episode
          </a>
          <a href="http://google.com" className="button">
            Add to "My list"
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
