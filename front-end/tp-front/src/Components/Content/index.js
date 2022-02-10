import React from "react";
import Hero from  "./Hero"
import Body from "./Body"

import courflix from "../../data/courflix.json"

class Content extends React.Component {

  render() {
    const data = courflix

    const courflixArray = Object.values(data)
    console.log(courflixArray)

    return (
      <React.Fragment>
        <Hero
          homeHero={data.series[15]}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.series[15].cover})`,
            backgrounPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          media={courflixArray}
        />
        <Body />
      </React.Fragment>
    );
  }
}

export default Content
