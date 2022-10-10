import React from "react"
import Navbar from "../Components/Navbar"
import Selected from "../Components/Content/Hero"
import Body from "../Components/Content/Body"
import Footer from "../Components/Footer"

import "../../src/Pages/style.scss"
import courflix from "../data/courflix.json"

class MediaPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      up: "iconStyle",
      down: "iconStyle",
      name:"",
      rating:"",
      synopsis:"",
      year:"",
      seasons:"",
      cover:""
    }
  }
  
  componentDidMount() {
    const datium = courflix
     const courflixArrayTwo = Object.values(datium)

    const filtered = courflixArrayTwo.filter((flix)=> {
      return flix.id === this.props.match.params.Id;
    })

    this.setState({
      name:filtered.name,
      rating:filtered.rating,
      synopsis:filtered.synopsis,
      year:filtered.year,
      seasons:filtered.seasons,
      cover:filtered.cover
    })
    console.log(filtered)
  }
  render() {
       const {name, rating, synopsis, year, seasons,cover} = this.state;

    return (
      <div className="app-wrapper">
        <Navbar />
        <Selected
          name={name}
          rating={rating}
          synopsis={synopsis}
          year={year}
          seasons={seasons}
          cover={cover}
        />
        <Body/>
        <Footer />
      </div>
    );
  }
}
export default MediaPage