import React from "react"


class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: "black"
    }
  }
  handleClick(){
    if (this.state.color ==="black"){
      this.setState({
        color: "blue"
      })} else {
        this.setState({
          color:"black"
        })
      }
    }

  render(){
    return (
    <div>

      <p style={{color: this.state.color}}> Press the button for magic </p>
      <button onClick = {() => this.handleClick()}> magic </button>

    </div>
    )
  }
}

export default Button