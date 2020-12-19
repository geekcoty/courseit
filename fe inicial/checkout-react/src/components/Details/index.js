import React from "react"
import "./style.scss";


class Details extends React.Component {
  render() {
    return (
      <div className="gen-details-wrapper">
        <hr className="divisor"></hr>
        <p> Shipping </p>
        <hr className="divisor"></hr>
        <p> Total </p>
      </div>
    );
  }
}

export default Details