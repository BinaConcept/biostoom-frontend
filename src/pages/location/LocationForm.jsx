import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
import LocationService from '../../service/LocationService';
//   const { RangePicker } = DatePicker;
//   const { TextArea } = Input;

export const LocationForm = (props) => {
	let navigate = useNavigate();
	const { id } = useParams();
	const [locationByID, setLocationByID] = useState(null);
	const [validationErrors, setValidationErrors] = useState({});
	const [error, setError] = useState(null);
	const onFinish = async (values) => {
		try {
			if (id === undefined) {
				await LocationService.createLocation(values);
				navigate(-1);
			} else {
				await LocationService.updateLocationByID(id, values);
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
					const response = await LocationService.getLocationByID(id);
					console.log('Location data:', response); // Log the response
					setLocationByID(response);
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

	if (!locationByID && id !== undefined) {
		return <div>Loading...</div>;
	}

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
					name: locationByID !== null ? locationByID.name : null,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Name"
					name="name"
					validateStatus={validationErrors.name ? 'error' : ''}
					help={validationErrors.name}
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
