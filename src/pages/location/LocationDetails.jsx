import React, { useEffect, useState } from 'react';
import { Box } from '../../modules/box/Box';
import { useParams } from 'react-router-dom';
import LocationService from '../../service/LocationService';
import { useNavigate} from "react-router-dom";

export const LocationDetails = (props) => {
	const { id } = useParams();
	let navigate = useNavigate();
	const [locationByID, setLocationByID] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Define the function to fetch location data
		const fetchLocation = async () => {
			try {
				const response = await LocationService.getLocationByID(id);
				console.log('Location data:', response); // Log the response
				setLocationByID(response);
			} catch (error) {
				console.error('Error fetching location:', error);
				setError(error.message);
			}
		};

		// Call the fetchLocation function when the component mounts
		fetchLocation();
	}, [id]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!locationByID) {
		return <div>Loading...</div>;
	}

	return (
		<Box className={'text-uppercase text-start'} obj={locationByID}>
			<button className="btn btn-primary start_button" onClick={() => navigate(-1)}>Back</button> 
			
		</Box>
	);
};
