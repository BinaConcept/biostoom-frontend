import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
	Button,
	// Cascader,
	// Checkbox,
	// DatePicker,
	Checkbox,
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
import CompanyService from '../../service/CompanyService';
//   const { RangePicker } = DatePicker;
//   const { TextArea } = Input;

export const CompanyForm = (props) => {
	let navigate = useNavigate();
	const { id } = useParams();
	const [companyByID, setCompanyByByID] = useState(null);
	const [active, setActive] = useState(false);
	const [validationErrors, setValidationErrors] = useState({});
	const [error, setError] = useState(null);
	const onFinish = async (values) => {
		try {
			if (id === undefined) {
				await CompanyService.createCompany({ ...values, ...active });
				navigate(-1);
			} else {
				await CompanyService.updateCompanyByID(id, { ...values, ...active });
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
					const response = await CompanyService.getCompanyByID(id);
					console.log('Location data:', response); // Log the response
					setCompanyByByID(response);
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

	if (!companyByID && id !== undefined) {
		return <div>Loading...</div>;
	}

	return (
		<div className="menu-box ">
			<h3 className="mb-5">COMPANY</h3>
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
					name: companyByID !== null ? companyByID.name : null,
					address: companyByID !== null ? companyByID.address : null,
					number: companyByID !== null ? companyByID.number : null,
					bus: companyByID !== null ? companyByID.bus : null,
					postal_code: companyByID !== null ? companyByID.postal_code : null,
					city: companyByID !== null ? companyByID.city : null,
					country: companyByID !== null ? companyByID.country : null,
					fax: companyByID !== null ? companyByID.fax : null,
					email: companyByID !== null ? companyByID.email : null,
					// checked:companyByID !== null ? companyByID.active : null,
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
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Address"
					name="address"
					validateStatus={validationErrors.address ? 'error' : ''}
					help={validationErrors.address}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Number"
					name="number"
					validateStatus={validationErrors.number ? 'error' : ''}
					help={validationErrors.number}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Bus"
					name="bus"
					validateStatus={validationErrors.bus ? 'error' : ''}
					help={validationErrors.bus}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Postcode"
					name="postal_code"
					validateStatus={validationErrors.postal_code ? 'error' : ''}
					help={validationErrors.postal_code}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="City"
					name="city"
					validateStatus={validationErrors.city ? 'error' : ''}
					help={validationErrors.city}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Country"
					name="country"
					validateStatus={validationErrors.country ? 'error' : ''}
					help={validationErrors.country}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Phone"
					name="phone"
					validateStatus={validationErrors.phone ? 'error' : ''}
					help={validationErrors.phone}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Fax"
					name="fax"
					validateStatus={validationErrors.fax ? 'error' : ''}
					help={validationErrors.fax}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Email"
					name="email"
					validateStatus={validationErrors.email ? 'error' : ''}
					help={validationErrors.email}
				>
					<Input />
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 6,
						span: 16,
					}}
				>
					<Checkbox
						defaultChecked={companyByID !== null ? companyByID.active : false}
						onChange={(e) => setActive({active:e.target.checked})}
					>
						Active
					</Checkbox>
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
