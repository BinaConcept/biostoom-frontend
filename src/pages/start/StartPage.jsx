import React from 'react';
import bionerga_image from '../../assets/images/Bionerga_image.jpg';
import { Link } from 'react-router-dom';
const StartPage = () => {
	return (
		<div>
			<div className="homepage">
				<img src={bionerga_image} alt=""></img>
				<div className="front_tin"></div>
			</div>
			<div className="glass_card text-center view-center">
				<h1>BIONERGA</h1>
				<div>
					<p>WELKOM VERGUNNING PLATFORM</p>
					<p className="mb-5">
						Om werkvergunning aan te maken <b>klik op start knop</b>
					</p>
					<Link className="menu-link" to={`/selectpage`}>
						<button type="button" className="btn btn-primary start_button">
							START
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default StartPage;
