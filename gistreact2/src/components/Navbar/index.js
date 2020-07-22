import React from "react"

class Navbar extends React.Component {
handleChange(e) {
  const inputValue = e.target.value;
  const { getData } = this.props;

  getData (inputValue);
}


  render (){
    //<p> {this.state.inputValue}</p>
    return (
      <React.Fragment>
        <nav> 
          <h1> Soy un NavBar</h1>
          <button> Buscar Startups </button>
          <input onChange ={(e)=> this.handleChange(e)}type="text" />
          

        
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar;

