import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import courflix from "../data/courflix.json"

import "../App.scss";

class Content extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    cover: "",
    name:"", 
    rating:"", 
    synopsis:"", 
    year:"", 
    seasons:"" 
  }
}

componentDidMount(){
  const filtered = courflix.filter((data) => {
    return data.id === this.props.match.params.id;
  });

  this.setState({
    cover: filtered[0].cover,
    name: filtered[0].name,
    rating: filtered[0].rating,
    synopsis:filtered[0].synopsis,
    year: filtered[0].year,
    seasons: filtered[0].seasons,
  });

}

  render() {
    return (
      <div className="content-wrapper">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default Content;