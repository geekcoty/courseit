import React from "react"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import axios from "axios"
import './App.css';
import Autocomplete from "./components/Autocomplete";

class App extends React.Component {
  handleCallback(newValue) {
    this.setState({
      autocompleteValue: newValue
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userPic: "",
      bio: "",
      repos: [],
      autocompleteValue:""
    };
  }

  async componentDidMount() {
    const userData = await axios("https://api.github.com/users/geekcoty");
    const userRepos = await axios(
      "https://api.github.com/users/geekcoty/repos"
    );
    
    const {name, avatar_url,bio}  =userData.data

      this.setState({
        name: name,
        userPic: avatar_url,
        bio: bio,
        repos: userRepos.data
      });
  }
  render() {
    const {name, userPic, bio, repos} = this.state
    return (
      <div className="App">
        <Navbar name={name} />

        <img src={userPic} className="userPic" />
        <p> {bio}</p>
        <Autocomplete handleCallback={(newValue) => this.handleCallback(newValue)}/>
        <p> Buscaste: {this.state.autocompleteValue}</p>
        <Projects repos={repos} />
      </div>
    );
  }
}
export default App;

