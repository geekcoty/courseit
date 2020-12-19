import React from "react"
import Form from "./components/Form"
import Product from "./components/Product"
import Details from "./components/Details"
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="global-wrapper">
        <div className="form-wrapper">
          <h2> Checkout</h2>
          <Form />
        </div>
        <div className="product-wrapper">
          <Product />
          <Details/>
          
        </div>
      </div>
    );
  }
}
export default App;
