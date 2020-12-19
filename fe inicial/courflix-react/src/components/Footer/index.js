import React from "react"
import "./style.scss";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
  render(){
    return (
      <div className="footer-wrapper">
        <span className="credit">
          Made with <FontAwesomeIcon icon={faHeart} /> by{" "}
          <a href="https://twitter.com/rememberplut" className="twitter-handle" target="_new">
            Coty
          </a>
        </span>
      </div>
    );
  }
}


export default Footer;