import React from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./selected.scss"

class Selected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUp: "iconStyle",
      selectedDown: "iconStyle",
    };
  }
  handleAdd (mediaInfo){
    this.props.addToMyList(mediaInfo)
  }
  handleClickUp() {
    if (this.state.selectedUp === "iconStyle") {
      this.setState({
        selectedUp: "iconStyle selectedUp",
        selectedDown: "iconStyle",
      });
    } else {
      this.setState({
        selectedUp: "iconStyle",
      });
    }
  }

  handelClickDown() {
    if (this.state.selectedDown === "iconStyle") {
      this.setState({
        selectedUp: "iconStyle",
        selectedDown: "iconStyle selectedDown",
      });
    } else {
      this.setState({
        selectedDown: "iconStyle",
      });
    }
  }

  render() {
    const {propName,propRating,propSynopsis,propYear,propSeasons,propCover} = this.props;
    const {selectedUp,selectedDown} =this.state;
   
    return (
      <div
        className="selectedWrapper"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${propCover})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="selectedGeneral">
          <p className="selectedName"> {propName}</p>
          <div className="selectedDetails">
            <p className="selectedYear">{propYear}</p>
            <p className="selectedRating">{propRating}</p>
            <p className="selectedSeasons"> {propSeasons}</p>
          </div>
          <div className="selectedHerosynopsis">
            <p className="selectedSynopsis">{propSynopsis}</p>
          </div>

          <button className="selectedButton">Play Media</button>
          <button className="selectedButton" onClick={() => this.handleAdd()}>
            Add to "My list"
          </button>
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={selectedUp}
            onClick={() => this.handleClickUp()}
          />
          <FontAwesomeIcon
            icon={faThumbsUp}
            rotation={180}
            className={selectedDown}
            onClick={() => this.handelClickDown()}
          />
        </div>
      </div>
    );
  }
}

export default Selected