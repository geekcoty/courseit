import React from "react";

import Logo from "./Logo";

import Menu from "./Menu";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <Logo />
        <Menu />
      </div>
    );
  }
}

export default Navbar;
