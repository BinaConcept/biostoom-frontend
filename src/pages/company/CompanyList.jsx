import React from 'react';
import { Table } from '../../modules/table/Table';

export const CompanyList = () => {
	const TabelList = [
		{ className: 'col-xl-1', key: 'name', label: 'Name' },
		{ className: 'col-xl-1', key: 'address', label: 'Address' },
		{ className: 'col-xl-1', key: 'number', label: 'Number' },
		{ className: 'col-xl-1', key: 'bus', label: 'Bus' },
		{ className: 'col-xl-1', key: 'postal_code', label: 'Postal code' },
		{ className: 'col-xl-1', key: 'city', label: 'City' },
		{ className: 'col-xl-1', key: 'country', label: 'Country' },
		{ className: 'col-xl-1', key: 'phone', label: 'Phone' },
		{ className: 'col-xl-1', key: 'fax', label: 'Fax' },
		{ className: 'col-xl-1', key: 'email', label: 'Email' },
		{ className: 'col-xl-1', key: 'active', label: 'Active' },
	];
	return (
		<div className="container-fluid">
			<h3 className="text-center">COMPANY</h3>
			<Table data={TabelList} control={'company'} />;
		</div>
	);
};
