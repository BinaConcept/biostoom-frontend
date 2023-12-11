import React from 'react';
import { Table } from '../../modules/table/Table';

export const BadgeList = () => {
	const TabelList = [
		{ className: 'col-xl-5', key: 'number', label: 'Number' },
		{ className: 'col-xl-5', key: 'zone', label: 'Zone' },
	];
	return (
		<div className="container">
			<h3 className="text-center">BADGE</h3>
			<Table data={TabelList} control={'badge'} />;
		</div>
	);
};
