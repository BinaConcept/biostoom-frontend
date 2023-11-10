import React from 'react';
import bionerga_image from '../../assets/images/Bionerga_image.jpg';
import {
  BrowserRouter as 
  Link
} from "react-router-dom";
const StartPage = () => {
	return (
		<div>
			<div className="homepage">
				<img src={bionerga_image} alt=""></img>
				<div className="front_tin"></div>
			</div>
			<div className="glass_card text-center">
				<div class="card text-center">
					<div class="card-header">BIONERGA</div>
					<div class="card-body">
						<h5 class="card-title">WELKOM VERGUNNING PLATFORM</h5>
						<p class="card-text">
							Om werkvergunning aan te maken klik op start knop
						</p>
						<a href="#" class="btn btn-primary">
							START
						</a>
					</div>
					<div class="card-footer text-body-secondary">Year 2023@workpermits</div>
				</div>
			</div>
		</div>
	);
};

export default StartPage;
