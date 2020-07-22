import React from "react"
import Project from "../Project"


class Projects extends React.Component {
  render (){

    const {repos} = this.props
  return (
   <React.Fragment>
   <h2> Projects </h2>
   <ul>
    {repos.map((repo, key) => {
      return (
        <Project key = {key} id = {key} repo = {repo}  />
      )
    })}
    </ul>


   </React.Fragment> 
  )
}
}


export default Projects;