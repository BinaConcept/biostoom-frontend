import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
	Button,
	// Cascader,
	// Checkbox,
	// DatePicker,
	// Checkbox,
	Form,
	Input,
	// InputNumber,
	// Radio,
	Select,
	// Slider,
	// Switch,
	// TreeSelect,
	// Upload,
} from 'antd';
import CompanyService from '../../service/CompanyService';
import EmployeeService from '../../service/EmployeeService';
import ApiService from '../../service/ApiService';
//   const { RangePicker } = DatePicker;
//   const { TextArea } = Input;

export const EmployeeForm = (props) => {
	let navigate = useNavigate();
	const { id } = useParams();
	const [employeeByID, setEmployeeByID] = useState(null);
	const [companyByID, setCompanyByID] = useState(null);
	const [company, setCompany] = useState();
	const [validationErrors, setValidationErrors] = useState({});
	const [error, setError] = useState(null);
	const onFinish = async (values) => {
		try {
			if (id === undefined) {
				await ApiService.create({ ...values, ...companyByID });
				navigate(-1);
			} else {
				await ApiService.updateID(id, 'employee', {
					...values,
					...companyByID,
				});
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
	const handleChange = (value) => {
		setCompanyByID({ company: value });
	};

	useEffect(() => {
		// Define the function to fetch location data
		const fetchLocation = async () => {
			try {
				const responseCompany = await ApiService.get('company');
				setCompany(responseCompany);
				if (id !== undefined) {
					const response = await ApiService.getID(id, 'employee');
					setEmployeeByID(response);
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

	if (!employeeByID && id !== undefined) {
		return <div>Loading...</div>;
	}
	return (
		<div className="menu-box ">
			<h3 className="mb-5">EMPLOYEE</h3>
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
					first_name: employeeByID !== null ? employeeByID.first_name : null,
					last_name: employeeByID !== null ? employeeByID.last_name : null,
					password: employeeByID !== null ? employeeByID.password : null,
					email: employeeByID !== null ? employeeByID.email : null,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item label="Company">
					<Select
						onChange={handleChange}
						style={{ width: '100%' }}
						defaultValue={employeeByID.company.id}
						options={company?.map((item) => ({
							label: item.name,
							value: item.id,
						}))}
					/>
				</Form.Item>
				<Form.Item
					label="Voornaam"
					name="first_name"
					validateStatus={validationErrors.first_name ? 'error' : ''}
					help={validationErrors.first_name}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Naam"
					name="last_name"
					validateStatus={validationErrors.last_name ? 'error' : ''}
					help={validationErrors.last_name}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Wachtwoord"
					name="password"
					validateStatus={validationErrors.password ? 'error' : ''}
					help={validationErrors.password}
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
					<Button type="primary" htmlType="submit" className="mt-4">
						{id === undefined ? 'opslaan' : 'update'}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
