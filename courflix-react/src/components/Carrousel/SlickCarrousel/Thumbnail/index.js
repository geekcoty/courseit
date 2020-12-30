import React from "react";

class Thumbnail extends React.Component{

  render () {
  return (

      <img src={this.props.content.series[0].thumbnail} className="imgThumb" />

  );
  }
}

export default Thumbnail;