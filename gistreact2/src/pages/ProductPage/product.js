import React from "react";


class ProductPage extends React.Component {
  render () {
    console.log (this.props);
    return (

      <React.Fragment>
        <p> Soy una product page</p>
        Mi id es {this.props.match.params.courseit}
      </React.Fragment>
    )
  }
}

export default ProductPage;