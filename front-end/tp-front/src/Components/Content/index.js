import React from "react";
import Hero from  "./Hero"
import Body from "./Body"


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
