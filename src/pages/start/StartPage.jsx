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
				<h4>Welkom in Biostoom platform.</h4>
				<p>Deze website dient om vergunningen aan te vragen</p>
				{/* <button type="button" className="btn btn-primary start_button">
					START
				</button> */}
				<div></div>
			</div>
		</div>
	);
};

export default StartPage;
