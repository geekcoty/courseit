import React from "react";
import Hero from  "./../Components/Hero"
import Body from "./../Components/Body"

class Content extends React.Component {
  render() {
    return (
    <React.Fragment>
      <Hero/>
      <Body/>
    </React.Fragment>
    )
  }
}

export default Content
