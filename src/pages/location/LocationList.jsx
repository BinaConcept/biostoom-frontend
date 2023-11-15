import React, { useEffect, useState } from 'react';

export const LocationList = () => {
	const [location, setLocation] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/location/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token 0a307401cd981f74bf5a92d9ba918a23d5a54be8',
			},
		})
			.then((resp) => {
				if (!resp.ok) {
					throw new Error(
						`Network response was not ok: ${resp.status} ${resp.statusText}`
					);
				}
				return resp.json();
			})
			.then((res) => setLocation(res))
			.catch((error) => {
				console.error('Error fetching data:', error);
				setError('Failed to fetch data. See console for details.');
			});
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	console.log('Hier de namen van locaties:', location);

	return (
		<div className="container">
			<h3 className="text-center">LOCATION</h3>
			<div className="tabel_box">
				<div className="row">
					<div className="col-lg-6">Name</div>
					<div className="col-lg-6">Action</div>
				</div>
				<div className="row">
					<div className="col-lg-6">Assebunker</div>
					<div className="col-lg-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-three-dots"
							viewBox="0 0 16 16"
						>
							<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};
