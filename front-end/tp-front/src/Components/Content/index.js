import React from "react";
import Hero from  "./Hero"
import Body from "./Body"

import courflix from "../../data/courflix.json"
class Content extends React.Component {

  render() {
    const data = courflix
    return (
      <React.Fragment>
        <Hero
          homeHero={data.series[15]}
          mediaHero={data}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.series[15].cover})`,
            backgrounPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Body />
      </React.Fragment>
    );
  }
}

export default Content
