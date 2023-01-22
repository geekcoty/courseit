import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
class Menu extends React.Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  
  render() {
    const { toggle } = this.state;
    return (
      <React.Fragment>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <HashLink smooth to="/#series" className="link">
              <span>Series</span>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#movies" className="link">
              <span>Movies</span>
            </HashLink>
          </li>
          <HashLink smooth to="#mylist" className="link">
            <span>My List</span>
          </HashLink>
          <li>
            <Link to="/" className="link" >Home</Link>
          </li>
          <li className="close" onClick={this.menuToggle}>
            X
          </li>
        </ul>
        <div className="menu" onClick={this.menuToggle}>
          Menu
        </div>
      </React.Fragment>
    );
  }
}
export default Menu;
