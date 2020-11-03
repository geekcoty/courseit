import React from "react";
import "./style.css"

class Project extends React.Component {
  render() {
    return (
      <div>
        <p> Repo name: {this.props.repo.name}</p>
      </div>
    );
  }
}

export default Project
