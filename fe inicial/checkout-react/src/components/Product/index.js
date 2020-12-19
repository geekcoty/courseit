import React from "react"
import "./style.scss";


class Product extends React.Component {
  render() {
    return (
      <div className="gen-wrapper">
        <p className="item"> item </p>
        <p className="price"> price </p>
        <img className="pic" src="#" alt="pic"/>
      </div>
    )
  }
}

export default Product