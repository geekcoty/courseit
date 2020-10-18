import React from 'react';
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import axios from "axios"


class App extends React.Component {
constructor (props){
  super (props);

  this.state = {
    name:"",
    avatar_url:"",
    bio:"",
    repos: [],
  }
}

async componentDidMount (){

const userData = await axios ("https://api.github.com/users/geekcoty")
const userRepos = await axios ("https://api.github.com/users/geekcoty/repos")

//console.log(userData);

const {name,avatar_url, bio} = userData.data

this.setState({

name: name,
avatar_url: avatar_url,
bio: bio,
repos: userRepos.data
})

}



  render (){

  return (
   <React.Fragment>

  <Navbar name= {this.state.name} />
  <img src="{this.state.avatar_url}" alt="user profile pic"/>
  <p> {this.state.bio} </p>
  <Projects repos = {this.state.repos}/>

   </React.Fragment> 
  )
}
}


export default App;
