<<<<<<< HEAD
import React from 'react';
import Navbar from '../Components/Navbar';
import Selected from '../Components/Content/Selected';
import Episodes from "../Components/Content/Body/Episodes";
import Footer from '../Components/Footer';

import courflix from '../data/courflix.json';


class MediaPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id:"",
			mediaName: '',
			mediaRating: '',
			mediaSynopsis: '',
			mediaYear: '',
			mediaSeasons: '',
			mediaCover: '',
			thumbnail:""
		};
	}

	// Muestra la serie o pelicula elegida 
	componentDidMount() {
		const datium = courflix;
		const itemSelected = [ ...datium.movies, ...datium.series ].find(
			(item) => item.id === +this.props.match.params.id
		);

		this.setState({
			id:itemSelected.id,
			mediaName: itemSelected.name,
			mediaRating: itemSelected.rating,
			mediaSynopsis: itemSelected.synopsis,
			mediaYear: itemSelected.year,
			mediaSeasons: itemSelected.seasons,
			mediaCover: itemSelected.cover,
			thumbnail:itemSelected.thumbnail,
			episodes:itemSelected.episodes,
			type:itemSelected.type
		});

	}
	// leo el LOCAL STORAGE
	handleAdd(mediaInfo) {
    const { mediaName, mediaRating, mediaSynopsis, mediaYear, mediaSeasons, mediaCover, thumbnail,id } = this.state;
		const oldMedia = localStorage.getItem('myMedia'); // leo el ls
		if (oldMedia) {
			const parsedOldMedia = JSON.parse(oldMedia); // agrego al ls
			parsedOldMedia.push({
			id,
      mediaName,
      mediaRating,
      mediaSynopsis,
      mediaYear,
      mediaSeasons,
      mediaCover,
			thumbnail
		
			});
			const mediaToString = JSON.stringify(parsedOldMedia); // guardo el nuevo obj en el ls
			localStorage.setItem('myMedia', mediaToString);
		} else {
			const myMedia = [];
			myMedia.push({
			id,
      mediaName,
      mediaRating,
      mediaSynopsis,
      mediaYear,
      mediaSeasons,
      mediaCover,
			thumbnail,

   
			});

      const myMediaToString = JSON.stringify(myMedia); // guardo el nuevo obj en el ls
			localStorage.setItem('myMedia', myMediaToString);
		}

		this.props.history.push(`/content/${id}`)
	}

	render() {
		const { mediaName, mediaRating, mediaSynopsis, mediaYear, mediaSeasons, mediaCover,type, episodes} = this.state;

		return (
			<div className="app-wrapper">
				<Navbar />
				<Selected
					propName={mediaName}
					propRating={mediaRating}
					propSynopsis={mediaSynopsis}
					propYear={mediaYear}
					propSeasons={mediaSeasons}
					propCover={mediaCover}
					addToMyList={() => this.handleAdd()}
				/>
				<Episodes type={type} episodes={episodes}/>	
				<Footer />
			</div>
		);
	}
}
export default MediaPage;
=======
import React from "react"
import Navbar from "../Components/Navbar"
import Selected from "../Components/Content/Hero"
import Body from "../Components/Content/Body"
import Footer from "../Components/Footer"

import "../../src/Pages/style.scss"
import courflix from "../data/courflix.json"

class MediaPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      up: "iconStyle",
      down: "iconStyle",
      name:"",
      rating:"",
      synopsis:"",
      year:"",
      seasons:"",
      cover:""
    }
  }
  
  componentDidMount() {
    const datium = courflix
     const courflixArrayTwo = Object.values(datium)

    const filtered = courflixArrayTwo.filter((flix)=> {
      return flix.id === this.props.match.params.Id;
    })

    this.setState({
      name:filtered.name,
      rating:filtered.rating,
      synopsis:filtered.synopsis,
      year:filtered.year,
      seasons:filtered.seasons,
      cover:filtered.cover
    })
    console.log(filtered)
  }
  render() {
       const {name, rating, synopsis, year, seasons,cover} = this.state;

    return (
      <div className="app-wrapper">
        <Navbar />
        <Selected
          name={name}
          rating={rating}
          synopsis={synopsis}
          year={year}
          seasons={seasons}
          cover={cover}
        />
        <Body/>
        <Footer />
      </div>
    );
  }
}
export default MediaPage
>>>>>>> 598a3e1c152185aaf3b41fa31711cb2ec3b900be
