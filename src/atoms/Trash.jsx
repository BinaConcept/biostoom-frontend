import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { Button, message, Popconfirm } from 'antd';

import axios from 'axios';

export const Trash = ({ linkID }) => {
	const confirm = async (e) => {
		try {
			const response = await axios.delete(
				`http://127.0.0.1:8000/api/${linkID[0]}/${linkID[1]}`,
		
			);
			console.log(response);
			if (response.status) {
				NotificationManager.success(
					'Success aangepast.',
					`${response.data.name}`
				);
				window.location.reload(false);
			}
			return response.data;
		} catch (error) {
			console.error('Error update loaction:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	};
	const cancel = (e) => {
		console.log(e);
		
	};

	return (
		<Link className="menu-link">
			<Popconfirm
				title={`Delete the location ${linkID[0]}`}
				description={`Are you sure to delete this ${linkID[0]}?`}
				onConfirm={confirm}
				onCancel={cancel}
				okText="Yes"
				cancelText="No"
			>
				<div className="box menu-crud-box  menu-crud-delete">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-trash"
						viewBox="0 0 16 16"
					>
						<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
						<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
					</svg>
				</div>
			</Popconfirm>
		</Link>
	);
};
