import React from "react"


class Project extends React.Component {
  render (){
    const {id,repo} = this.props
  return (
   <React.Fragment>
    <li> {id} : {repo.name} </li>
   </React.Fragment> 
  )
}
}


export default Project;