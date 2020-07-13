import React from "react";


class MagicButton extends React.Component {

   constructor(props) {
    super(props);

      this.state = {
        color: "black"
        }
  }
    
    handleClick (){
      if (this.state.color === "black") {
        this.setState ({
          color: "red",
        })
          } else {this.setState({
          color:"black"
        })}
    }
  

  render (){
    return (
      <React.Fragment>
      <p style={{color: this.state.color}}> Hace click en el botón y mirá lo que pasa</p>
      <button onClick = { () => this.handleClick()}> Presioname </button>
      </React.Fragment>
    )
  }
}

export default MagicButton;
