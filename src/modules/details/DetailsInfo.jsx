import React, { useEffect, useState } from 'react';
import { Box } from '../box/Box';
import ApiService from '../../service/ApiService';

const DetailsInfo = (props) => {
	const [error, setError] = useState(null);
	const [objectID, setObjectID] = useState(null);
	
	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const response = await ApiService.getID(props.id, props.control);
				setObjectID(response);
			} catch (error) {
				console.error('Error fetching location:', error);
				setError(error.message);
			}
		};
		fetchLocation();
	}, [props.control, props.id]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!objectID) {
		return <div>Loading...</div>;
	}
	return <Box className={'text-uppercase text-start'} obj={objectID} />;
};

export default DetailsInfo;
