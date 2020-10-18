import React from "react";

import "./style.scss";
import {Link} from "react-router-dom";

import Form from "../components/Form";
import Cart from "../components/Cart";


class CheckOut extends React.Component{
  render(){
    return (
      <div className="content-wrapper">
        <Link to="/"> Volver a Productos </Link>
        <Form />
        <Cart />
      </div>
    );
  }
}

export default CheckOut;
