import React from "react"


class Navbar extends React.Component {


  
  render (){
  return (
   <React.Fragment>
   {this.props.name}
   </React.Fragment> 
  )
}
}


export default Navbar;