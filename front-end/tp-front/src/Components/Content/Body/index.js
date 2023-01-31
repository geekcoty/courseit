import React from "react";
import Carrousel from "../Body/Carrousel";
import courflix from "../../../data/courflix.json";

class Body extends React.Component {
  render() {
    const data = courflix;
    const { myList } = this.props;
    return (
      <Carrousel
        content={data}
        title1={"Series"}
        title2={"Movies"}
        title3={myList}
      />
    );
  }
}

export default Body;
