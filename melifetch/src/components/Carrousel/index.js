import React from "react";


class Carrousel extends React.Component {
  render() {
    return (
    
        <div className="App">
          {this.props.items.map((item) => {
            return (
              <div>
                <p> {item.thumbnail}</p>
                <p> {item.title}</p>
                <p> {item.price}</p>
              </div>
            );
          })}
        </div>
    );
  }
}

export default Carrousel;
