import React from "react"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import axios from "axios"
import './App.css';

class App extends React.Component {

  async componentDidMount () {
    const userData = await axios("https://api.github.com/users/geekcoty");
    const userRepos = await axios("https://api.github.com/users/geekcoty/repos");
  

  }
  render () {
  return (
    <div className="App">
      <Navbar name={this.state.name} />
      <img src={this.state.userPic}  className="userPic"/>
      <p> {this.state.bio}</p>
      <Projects/>
    </div>
  );
}
}
export default App;


constructor(props) {
    super(props);
    this.state = {
      name: [],
    };
  }
  async componentDidMount() {
    const userRepos = await fetch(
      "https://api.github.com/users/geekcoty/repos"
    );
    const userReposJson = await userRepos.json();
   this.setState({
     name:userReposJson.name
   })
  }