import React from 'react';
import bionerga_image from '../../assets/images/Bionerga_image.jpg';
import { BrowserRouter as Link } from 'react-router-dom';
const StartPage = () => {
	return (
		<div>
			<div className="homepage">
				<img src={bionerga_image} alt=""></img>
				<div className="front_tin"></div>
			</div>
			<div className="glass_card text-center">
				<h1>BIONERGA</h1>
				<div>
					<h6>WELKOM VERGUNNING PLATFORM</h6>
					<p>Om werkvergunning aan te maken klik op start knop</p>
					<a href="#" class="btn btn-primary">
						START
					</a>
				</div>
			</div>
		</div>
	);
};

export default StartPage;
