import React from 'react';
import Selected from '../Components/Content/Selected';
import Episodes from "../Components/Content/Body/Episodes";
import Footer from '../Components/Footer';

import courflix from '../data/courflix.json';
import Logo from "../assets/logo.png";
import {Link} from "react-router-dom"


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
//   margin-left: 5.5rem;
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
				<div className="navbar">
				<Link to="/">
				<img src={Logo} className="nav-logo" style={{ marginLeft: 80.5, marginTop:7.3 }} alt="logo de courflix"/>
				</Link>
				</div>
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
