import React from 'react';
import './style.scss';

class EpiThumb extends React.Component {
	render() {
		const { epititle, epimg, episynop } = this.props;
		return (
			<div className="episodes-wrapper">
				<div className="img-wrapper">
					<img src={epimg} />
				</div>
				<div className="epi-inf">
					<p className="epi-title">{epititle}</p>
					<p>{episynop}</p>
				</div>
			</div>
		);
	}
}

export default EpiThumb;
