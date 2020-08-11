import React from "react";

import "./style.css";


class Form extends React.Component {
  render (){
    return (
      <div className="form-wrapper">
        <p className="form-title"> Contact information</p>

        <p className="form-subtitle"> E-mail</p>
        <input
          className="form-input"
          type="text"
          name="email"
          placeholder="Enter your e-mail..."
        />

        <p className="form-subtitle"> Phone</p>
        <input
          className="form-input"
          type="text"
          name="phone"
          placeholder="Enter your phone..."
        />

        <p className="form-title"> Shipping address</p>

        <p className="form-subtitle"> Full name</p>
        <input
          className="form-input"
          type="text"
          name="fullname"
          placeholder="Enter your name..."
        />

        <p className="form-subtitle"> Address</p>
        <input
          className="form-input"
          type="text"
          name="address"
          placeholder="Your address..."
        />

        <p className="form-subtitle"> City</p>
        <input
          className="form-input"
          type="text"
          name="city"
          placeholder="Your city..."
        />

        <div className="form-subwrapper">

        <p className="form-subtitle"> Country</p>
        <select className="form-select">
          <option selected value ="your-country"> Your country...</option>
          <option value ="argentina">Argentina</option>
          <option value ="argentina">Uruguay</option>
          <option value ="argentina">Paraguay</option>
          <option value ="argentina">Chile</option>
        </select>
        <p className="form-subtitle"> Postal code</p>
        <input
          className="form-subwrapper-input"
          type="text"
          name="postal"
          placeholder="Your postal code..."/>
        </div>
        <input className="form-checkbox"
        type="checkbox"/><span>
          Save this information for next time
        </span>
        <button className="form-button"> Submit </button>
      </div>
    );
  }
}


export default Form;
