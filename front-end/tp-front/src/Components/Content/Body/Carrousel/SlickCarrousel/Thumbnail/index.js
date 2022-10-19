import React from "react";
import { Link } from "react-router-dom";

class Thumbnail extends React.Component {
  render() {
    const { thumbnail, id} = this.props.data;

    return (
      <React.Fragment>
        <Link to={`/content/${id}`}>
          <img src={thumbnail} alt="media thumbnail"/>
        </Link>
      </React.Fragment>
    );
  }
}

export default Thumbnail;
