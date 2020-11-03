import React from "react"

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h4> {this.props.name} </h4>
      </div>
    );
  }
}


export default Navbar