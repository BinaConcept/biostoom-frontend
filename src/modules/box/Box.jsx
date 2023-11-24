import React, { useState } from 'react';

export const Box = (props) => {
	const [single, setSingle] = useState([props.obj]);

	return (
		<div className={`view-center menu-crud-box ${props.className}`}>
			<h1>Details</h1>
			{single.map((item) => (
				 <div key={item.id}>
				 {Object.entries(item).map(([key, value]) => (
				   <p key={key}>
					 {key}: {value}
				   </p>
				 ))}
			   </div>
			))}
			{props.children}
		</div>
	);
};
