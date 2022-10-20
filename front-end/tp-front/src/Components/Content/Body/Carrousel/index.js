import React from "react"
import SlickCarrousel from "../Carrousel/SlickCarrousel"


class Carrousel extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			myList: []
		};
	}

	componentDidMount() {
    const mediaList = []
    const stringMediaList = localStorage.getItem("myMedia")
    if(stringMediaList){
      const selectedList = JSON.parse(stringMediaList);
      selectedList.map((item) => {
       return mediaList.push(item)
      })
    }

    this.setState({
      myList: mediaList
    })
	}

  render () {
    const { content} =this.props
    const {myList} = this.state
    return (
      <SlickCarrousel
        content={content}
        title1={"Series"}
        title2={"Movies"}
        title3={"My List"}
        myList= {myList}
      />
    );
  }
}


export default Carrousel