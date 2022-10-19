import React from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styleSel.scss"

class Selected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: "iconStyle",
      down: "iconStyle",
    };
  }
  handleAdd (mediaInfo){
    this.props.addToMyList(mediaInfo)
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