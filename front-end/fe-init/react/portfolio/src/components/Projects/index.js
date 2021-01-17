import React from "react"
import Project from "../Project"
class Projects extends React.Component {
  
  render() {
    const {repos} = this.props
    return (
      <div>
        {repos.map((repo,key) => {
          return (
            <Project key={key} repo={repo}/>
          )
        })}
      </div>
    );
  }
}

export default Projects