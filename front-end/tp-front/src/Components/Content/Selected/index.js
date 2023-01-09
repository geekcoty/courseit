import React from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import selected  from "./selected.module.scss"

import "./fav.scss"

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
    const {propName,propRating,propSynopsis,propYear,propSeasons,propCover} = this.props;
    const {up,down} =this.state;
   
    return (
      <div className={selected.wrapper}
       style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${propCover})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
            }}>
        <div className={selected.general}>
          <p className={selected.name}> {propName}</p>
          <div className={selected.details}>
            <p className={selected.year}>{propYear}</p>
            <p className={selected.rating}>{propRating}</p>
            <p className={selected.seasons}> {propSeasons}</p>
          </div>
          <div className={selected.herosynopsis}>
            <p className={selected.synopsis}>{propSynopsis}</p>
          </div>

          <button className={selected.button}>
            Play Media
          </button>
          <button className={selected.button} onClick={()=>this.handleAdd()}>
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