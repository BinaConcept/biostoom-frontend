import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import ApiService from '../../service/ApiService';

export const LocationForm = (props) => {
	let control = 'location';
	let navigate = useNavigate();

	const { id } = useParams();
	const [error, setError] = useState(null);
	const [locationID, setLocationID] = useState(null);
	const [validationErrors, setValidationErrors] = useState({});

	const onFinish = async (values) => {
		try {
			if (id === undefined) {
				await ApiService.create(control, values);
				navigate(-1);
			} else {
				await ApiService.updateID(id, control, values);
				navigate(-1);
			}
			// Handle success
		} catch (error) {
			if (error.response && error.response.status === 400) {
				setValidationErrors((prevErrors) => {
					const newErrors = { ...prevErrors };
					Object.keys(error.response.data).forEach((field) => {
						newErrors[field] = error.response.data[field][0];
					});
					return newErrors;
				});
			}
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				if (id !== undefined) {
					const response = await ApiService.getID(id, control);
					setLocationID(response);
				}
			} catch (error) {
				console.error('Error fetching location:', error);
				setError(error.message);
			}
		};
		fetchLocation();
	}, [control, id]);

	if (error && id !== undefined) {
		return <div>Error: {error}</div>;
	}

	if (!locationID && id !== undefined) {
		return <div>Loading...</div>;
	}

	const content = [{ name: 'name', label: 'Name' }];

	const formContent = () => {
		return content.map((item, i) => (
			<Form.Item
				key={i}
				label={item.label}
				name={item.name}
				validateStatus={validationErrors[item.name] ? 'error' : ''}
				help={validationErrors[item.name]}
			>
				<Input />
			</Form.Item>
		));
	};

	return (
		<div className="menu-box ">
			<h3 className="mb-5">LOCATIE</h3>
			<Form
				name="basic"
				labelCol={{
					span: 6,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 600,
				}}
				initialValues={{
					remember: true,
					name: locationID !== null ? locationID.name : null,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				{formContent()}
				<Form.Item
					wrapperCol={{
						offset: 6,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit" className="mt-4">
						{id === undefined ? 'opslaan' : 'update'}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
