import React, { useEffect, useState } from 'react';
import { Box } from '../../modules/box/Box';
import { useParams } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import LottoService from '../../service/LottoService';

export const LottoDetails = (props) => {
	const { id } = useParams();
	let navigate = useNavigate();
	const [lottoByID, setLottoByID] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Define the function to fetch location data
		const fetchLocation = async () => {
			try {
				const response = await LottoService.getLottoByID(id);
				console.log('Location data:', response); // Log the response
				setLottoByID(response);
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

	if (!lottoByID) {
		return <div>Loading...</div>;
	}

	return (
		<Box className={'text-uppercase text-start'} obj={lottoByID}>
			<button className="btn btn-primary start_button" onClick={() => navigate(-1)}>Back</button> 
			
		</Box>
	);
};

