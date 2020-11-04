import React from "react"


class Autocomplete extends React.Component {
  handleChange(e){
    this.props.handleCallback(e.target.value)
  }
  render() {
    return (
      <React.Fragment>
        <input type="text" onChange= {(e) => {this.handleChange(e)}} />
      </React.Fragment>
    )
  }
}

export default Autocomplete