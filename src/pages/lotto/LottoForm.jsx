import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, Select } from 'antd';
import LottoService from '../../service/LottoService';
import ApiService from '../../service/ApiService';

export const LottoForm = (props) => {
	let control = 'lotto';
	let navigate = useNavigate();

	const { id } = useParams();
	const [error, setError] = useState(null);
	const [keyLotto, setKeyLotto] = useState([]);
	const [lottoID, setLottoID] = useState(null);
	const [nameChoices, setNameChoices] = useState([]);
	const [validationErrors, setValidationErrors] = useState({});

	const onFinish = async (values) => {
		try {
			if (id === undefined) {
				await ApiService.create(control, { ...values, ...keyLotto });
				navigate(-1);
			} else {
				await ApiService.updateID(id, { ...values, ...keyLotto });
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
		setKeyLotto({ name: value });
	};

	useEffect(() => {
		// Define the function to fetch location data
		const fetchLocation = async () => {
			try {
				const lottoResponse = await ApiService.get('lotto');
				console.log(lottoResponse);
				setNameChoices(lottoResponse.name_choices);
				if (id !== undefined) {
					const response = await ApiService.getID(id, 'lotto');
					setLottoID(response);
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

	if (!lottoID && id !== undefined) {
		return <div>Loading...</div>;
	}
	console.log('rst',nameChoices)
	return (
		<div className="menu-box ">
			<h3 className="mb-5">LOTTO</h3>
			<Form
				name="basic"
				labelCol={{
					span: 6,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 500,
				}}
				initialValues={{
					remember: true,
					number: lottoID !== null ? lottoID.number : null,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Nummer"
					name="number"
					validateStatus={validationErrors.number ? 'error' : ''}
					help={validationErrors.number}
				>
					<Input />
				</Form.Item>

				<Form.Item label="Soort slot">
					<Select
						onChange={handleChange}
						style={{ width: '100%' }}
						defaultValue={id > 0 ? lottoID.name : null}
						options={nameChoices.map((item) => ({
							label: item.name,
							value: item.id,
						}))}
					/>
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
