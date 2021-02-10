import React from "react"
import SlickCarrousel from "../Carrousel/SlickCarrousel"


class Carrousel extends React.Component {
  render () {
    const { content } =this.props
    return (
      <SlickCarrousel
        content={content}
        title1={"Series"}
        title2={"Movies"}
        title3={"My List"}
      />
    );
  }
}


export default Carrousel