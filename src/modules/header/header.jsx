import React from 'react';
import { Link } from 'react-router-dom';
const header = () => {
	return (
		<header
			id="sticky-header"
			className="flex-shrink-0 py-4 text-white-50"
		>
			<div className="container text-center ">
				<small>Navigation</small>
			</div>
		</header>
	);
};

export default header;
