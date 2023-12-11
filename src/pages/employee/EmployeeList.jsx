import React from 'react';
import { Table } from '../../modules/table/Table';

export const EmployeeList = () => {
	const TableList = [
		{ className: 'col-xl-2', key: 'first_name', label: 'First Name' },
		{ className: 'col-xl-2', key: 'last_name', label: 'Last Name' },
		{ className: 'col-xl-2', key: 'password', label: 'Password' },
		{ className: 'col-xl-1', key: 'company', label: 'Company Name' },
		{ className: 'col-xl-2', key: 'email', label: 'Email' },
	  ];
	
	return (
		<div className="container">
			<h3 className="text-center">EMPLOYEE</h3>
			<Table data={TableList} control={'employee'} />
		</div>
	);
};
