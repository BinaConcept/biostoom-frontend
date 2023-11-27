import React, { useEffect, useState } from 'react';
import { Box } from '../../modules/box/Box';
import { useParams } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import BadgeService from '../../service/BadgeService';

export const BadgeDetails = (props) => {
	const { id } = useParams();
	let navigate = useNavigate();
	const [badgeByID, setBadgeByID] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Define the function to fetch location data
		const fetchLocation = async () => {
			try {
				const response = await BadgeService.getBadgeByID(id);
				console.log('Badga data:', response); // Log the response
				setBadgeByID(response);
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

	if (!badgeByID) {
		return <div>Loading...</div>;
	}

	return (
		<Box className={'text-uppercase text-start'} obj={badgeByID}>
			<button className="btn btn-primary start_button" onClick={() => navigate(-1)}>Back</button> 
			
		</Box>
	);
};
