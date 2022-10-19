import React from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import "./styleSel.scss"
=======
import courflix from "../data/courflix.json"
import "./style.scss";
>>>>>>> 598a3e1c152185aaf3b41fa31711cb2ec3b900be

class Selected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: "iconStyle",
      down: "iconStyle",
    };
  }
<<<<<<< HEAD
  handleAdd (mediaInfo){
    this.props.addToMyList(mediaInfo)
  }
=======

>>>>>>> 598a3e1c152185aaf3b41fa31711cb2ec3b900be
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
<<<<<<< HEAD
    const {propName,propRating,propSynopsis,propYear,propSeasons,propCover} = this.props;
    const {up,down} =this.state;
    return (
      <div className="hero-wrapper"
       style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${propCover})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
            }}>
        <div className="general-wrapper">
          <p className="name"> {propName}</p>
          <div className="content-details">
            <p className="year">{propYear}</p>
            <p className="rating">{propRating}</p>
            <p className="seasons"> {propSeasons}</p>
          </div>
          <div className="hero-synopsis">
            <p className="synopsis">{propSynopsis}</p>
          </div>

          <button className="button">
            Play Media
          </button>
          <button className="button" onClick={()=>this.handleAdd()}>
            Add to "My list"
          </button>
=======
    const {name, rating, synopsis, year, seasons,cover} = this.props;
    const {up,down} =this.state;
    
    return (
      <div className="hero-wrapper">
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
            Play Media
          </a>
          <a href="http://google.com" className="button">
            Add to "My list"
          </a>
>>>>>>> 598a3e1c152185aaf3b41fa31711cb2ec3b900be
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

export default Selected