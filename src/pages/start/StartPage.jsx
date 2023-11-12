import React from 'react';
import bionerga_image from '../../assets/images/Bionerga_image.jpg';
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
					<p>WELKOM VERGUNNING PLATFORM</p>
					<p className="mb-5">
						Om werkvergunning aan te maken <b>klik op start knop</b>
					</p>
					<button type="button" class="btn btn-primary start_button">
						START
					</button>
				</div>
			</div>
		</div>
	);
};

export default StartPage;
