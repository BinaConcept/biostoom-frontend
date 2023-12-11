import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Box = (props) => {
	let navigate = useNavigate();
	const [single, setSingle] = useState([props.obj]);

	return (
		<div className={`view-center box box-details ${props.className}`}>
			<h1>Details</h1>
			{single.map((item) => (
				<div key={item.id}>
					{Object.entries(item).map(([key, value]) =>
						key === 'company' ? (
							<p key={key}>item[key].name</p>
						) : (
							<p key={key}>
								{key}: {value}
							</p>
						)
					)}
				</div>
			))}
			<button
				className="btn btn-primary start_button"
				onClick={() => navigate(-1)}
			>
				Back
			</button>
		</div>
	);
};
