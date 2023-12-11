import React from 'react';
import { Table } from '../../modules/table/Table';

export const LocationList = () => {
	const TabelList = [{ className: 'col-xl-10 col-5', key: 'name', label: 'Name' }];
	return (
		<div className="container">
			<h3 className="text-center">LOCATION</h3>
			<Table data={TabelList} control={'location'} />;
		</div>
	);

};

