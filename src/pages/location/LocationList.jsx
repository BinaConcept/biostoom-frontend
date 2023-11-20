import React, { useEffect, useState } from 'react';
import { Pencil } from '../../atoms/Pencil';
import { Eye } from '../../atoms/Eye';
import { CrudMenu } from '../../modules/crudMenu/CrudMenu';
import { Link } from 'react-router-dom';
import LocationService from '../../service/LocationService';
import axios from 'axios';

export const LocationList = () => {
	const [location, setLocation] = useState(null);
	const [error, setError] = useState(null);
  
	useEffect(() => {
	  // Define the function to fetch location data
	  const fetchLocation = async () => {
		try {
		  const response = await LocationService.getLocation();
		  // Assuming the location data is in response.data
		  setLocation(response);
		} catch (error) {
		  console.error('Error fetching location:', error);
		  setError(error.message); // Set the error state
		}
	  };
  
	  // Call the fetchLocation function when the component mounts
	  fetchLocation();
	}, []);
  
	if (error) {
	  return <div>Error: {error}</div>;
	}
  
	if (!location) {
	  return <div>Loading...</div>;
	}
  console.log('loading:',location)
	return (
	  <div className="container">
		<h3 className="text-center">LOCATION</h3>
		{location.map((item) => (
		  <div key={item.id} className="tabel_box m-3">
			<div className="row">
			  <div className="col-10">{item.name}</div>
			  <div className="col-2">
				<CrudMenu eye={`/location-detail/${item.id}`} pencil={`/location/${item.id}`} trash={`/location/${item.id}`} />
			  </div>
			</div>
		  </div>
		))}
	  </div>
	);
  };
