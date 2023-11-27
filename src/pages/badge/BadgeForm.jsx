import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
	Button,
	// Cascader,
	// Checkbox,
	// DatePicker,
	Form,
	Input,
	// InputNumber,
	// Radio,
	// Select,
	// Slider,
	// Switch,
	// TreeSelect,
	// Upload,
} from 'antd';
import BadgeService from '../../service/BadgeService';
//   const { RangePicker } = DatePicker;
//   const { TextArea } = Input;

export const BadgeForm = (props) => {
	let navigate = useNavigate();
	const { id } = useParams();
	const [badgeByID, setBadgeByID] = useState(null);
	const [validationErrors, setValidationErrors] = useState({});
	const [error, setError] = useState(null);
	const onFinish = async (values) => {
		try {
			if (id === undefined) {
				await BadgeService.createBadge(values);
				navigate(-1);
			} else {
				await BadgeService.updateBadgeByID(id, values);
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
		// Define the function to fetch location data
		const fetchLocation = async () => {
			try {
				if (id !== undefined) {
					const response = await BadgeService.getBadgeByID(id);
					console.log('Location data:', response); // Log the response
					setBadgeByID(response);
				}
			} catch (error) {
				console.error('Error fetching location:', error);
				setError(error.message);
			}
		};

		// Call the fetchLocation function when the component mounts
		fetchLocation();
	}, [id]);

	if (error && id !== undefined) {
		return <div>Error: {error}</div>;
	}

	if (!badgeByID && id !== undefined) {
		return <div>Loading...</div>;
	}

	return (
		<div className="menu-box ">
			<h3 className="mb-5">BADGE</h3>
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
					number:badgeByID !== null ? badgeByID.number : null,
					zone: badgeByID !== null ? badgeByID.zone : null,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Number"
					name="number"
					validateStatus={validationErrors.number ? 'error' : ''}
					help={validationErrors.number}
					rules={[
						{
							// required: true,
							// message: validationErrors.name,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Zone"
					name="zone"
					validateStatus={validationErrors.zone ? 'error' : ''}
					help={validationErrors.zone}
					rules={[
						{
							// required: true,
							// message: validationErrors.name,
						},
					]}
				>
					<Input />
				</Form.Item>

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
