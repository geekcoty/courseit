import React from "react"
import Navbar from "../Components/Navbar"
import Content from "../Components/Content"
import Footer from "../Components/Footer"
import courflix from "../data/courflix.json"

import "../../src/Pages/style.scss"

class MediaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: false,
      id: props.match.params.id,
    };
  }
  componentDidMount() {
    const { id } = this.state;

    const filter = courflix.series.filter((serie) => serie.id == id);

    this.setState({ serie: filter.length > 0 ? filter[0] : {} });

    console.log(filter)
  }

  render() {
    console.log(this.props);
    return (
      <div className="app-wrapper">
        <Navbar />
        <Content mediaHero="courflix"/>
        <Footer />
      </div>
    );
  }
}


export default MediaPage