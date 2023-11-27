import React, { useEffect, useState } from 'react';
import { CrudMenu } from '../../modules/crudMenu/CrudMenu';
import { Link } from 'react-router-dom';
import BadgeService from '../../service/BadgeService';

export const BadgeList = () => {
	const [badge, setBadge] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBadge = async () => {
			try {
				const response = await BadgeService.getBadgeAll();
				setBadge(response);
			} catch (error) {
				setError(error.message); // Set the error state
			}
		};

		fetchBadge();
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!badge) {
		return <div>Loading...</div>;
	}
	console.log(badge);
	return (
		<div className="container">
			<h3 className="text-center">BADGE</h3>
			<div className="text-end mx-3">
				<Link className="menu-link" to={`/badge`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						fill="green"
						className="bi bi-plus-square-fill"
						viewBox="0 0 16 16"
					>
						<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
					</svg>
				</Link>
			</div>
			{badge.map((item) => (
				<div key={item.id} className="tabel_box m-3">
					<div className="row text-start">
						<div className="col-5">{item.number}</div>
						<div className="col-5">{item.zone}</div>
						<div className="col-2">
							<CrudMenu
								eye={`/badge-detail/${item.id}`}
								pencil={`/badge/${item.id}`}
								trash={['badge', item.id]}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
