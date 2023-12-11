import React, { useEffect, useState } from 'react';
import ApiService from '../../service/ApiService';
import { CreateButton } from '../create/CreateButton';
import { CrudMenu } from '../crudMenu/CrudMenu';

export const Table = (props) => {
	// let control = 'location';
	const [location, setLocation] = useState(null);
	const [list, setList] = useState();
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const response = await ApiService.get(props.control);
				setLocation(response);
				setList(props.data);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchLocation();
	}, [props.control, props.data]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!location) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<div className="text-end mx-3">
				<CreateButton control={props.control} />
			</div>
			{location.map((item, i) => (
				<div key={item.id} className="tabel_box m-3">
					<div className="row text-start">
						{list.map((listItem, a) => (
							<div key={a} className={listItem.className}>
								{listItem.key === 'company'
									? item[listItem.key].name
									: item[listItem.key]}
							</div>
						))}
						<div className="col-xl-2">
							<CrudMenu pos={props.control} posId={item.id} />
						</div>
					</div>
				</div>
			))}
		</>
	);
};
