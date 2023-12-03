import React, { useEffect, useState } from 'react';
import { CrudMenu } from '../../modules/crudMenu/CrudMenu';
import ApiService from '../../service/ApiService';
import { CreateButton } from '../../modules/create/CreateButton';

export const LocationList = () => {
	let control = 'location';
	const [location, setLocation] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const response = await ApiService.get(control);
				setLocation(response);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchLocation();
	}, [control]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!location) {
		return <div>Loading...</div>;
	}
	return (
		<div className="container">
			<h3 className="text-center">LOCATION</h3>
			<div className="text-end mx-3">
				<CreateButton control={control} />
			</div>
			{location.map((item) => (
				<div key={item.id} className="tabel_box m-3">
					<div className="row">
						<div className="col-xl-10 col-5">{item.name}</div>
						<div className="col-xl-2">
							<CrudMenu pos={control} posId={item.id} />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
