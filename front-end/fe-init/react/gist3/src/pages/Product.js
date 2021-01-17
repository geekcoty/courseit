import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import startups from "../data/startups.json"
import "../pages/product.scss"

class Product extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      logo:"",
      desc:"",
    }
  }

  componentDidMount() {
    const filtered = startups.filter((startup) => {
      return startup.id.toLowerCase() === this.props.match.params.Id.toLowerCase();
    });
    
    this.setState({
      name: filtered[0].name,
      logo: filtered[0].logo,
      desc: filtered[0].desc    
  });
  }

  render() {
        const { logo, name, desc } = this.state;
return(
      <React.Fragment>
        <Navbar />
        <div className="general-wrapper">
          <div className="color-div">
            <p className="startup">{name}</p>
          </div>
          <div className="pic-div">
            <img
              src= {logo}
              alt="img startup"
              className="pic"
            />
          </div>
          <div className="content-div">
            <h3 className="title">Descripción</h3>
            <p> {desc}</p>
          </div>
          
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Product