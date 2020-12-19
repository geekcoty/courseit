import React from "react"
import "./style.scss";


class Form extends React.Component{
  render () {
    return (
      <div className="gen-wrapper">
        <h5 className="form-section-title">Contact information </h5>
        <p className="input-title">E-mail:</p>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="E-mail..."
        />
        <p className="input-title">Phone:</p>
        <input
          type="phone"
          name="email"
          className="input"
          placeholder="Phone..."
        />
        <h5 className="form-section-title">Shipping address </h5>
        <p className="input-title">Full name</p>
        <input
          type="text"
          name="fullname"
          className="input"
          placeholder="Full Name..."
        />
        <p className="input-title">Address:</p>
        <input
          type="text"
          name="address"
          className="input"
          placeholder="Your address..."
        />
        <p className="input-title">City:</p>
        <input
          type="text"
          name="city"
          className="input"
          placeholder="Your city..."
        />
        <div className="form-subwrapper">
        <span className="input-title">Country:</span>
          <select className="select-input">
            Your country...
            <option value="argentina">Argentina</option>
            <option value="spain">Spain</option>
            <option value="ireland">Ireland</option>
            <option value="emirates"> Emirates</option>
          </select>
          <span className="input-title"> Postal code:</span>
          <input
            type="text"
            name="postalcode"
            className="pc-input"
            placeholder="Your postal code..."
          />
      </div>

        <div className="form-end-wrapper">

            <input type="checkbox" className="form-check" />
            <span> It's a gift.</span>

          <button className="form-button"> continue</button>
        </div>
      </div>
    );
  }
}


export default Form