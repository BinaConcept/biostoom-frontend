import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, Select} from 'antd';
import LottoService from '../../service/LottoService';

export const LottoForm = (props) => {
	let navigate = useNavigate();
	const { id } = useParams();
	const [lottoList, setLottoList] = useState([]);
	const [nameChoices, setNameChoices] = useState([]);
	const [keyLotto, setKeyLotto] = useState([]);
	const [lottoByID, setLottoByID] = useState(null);
	const [validationErrors, setValidationErrors] = useState({});
	const [error, setError] = useState(null);

	const onFinish = async (values) => {
		console.log({ ...values, ...keyLotto });
		try {
			if (id === undefined) {
				console.log('send');
				await LottoService.createLotto({ ...values, ...keyLotto });
				navigate(-1);
			} else {
				await LottoService.updateLottoByID(id, { ...values, ...keyLotto });
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
				const lottoResponse = await LottoService.getLottoAll();

				setLottoList(lottoResponse.lotto_entries);
				setNameChoices(lottoResponse.name_choices);
				if (id !== undefined) {
					const response = await LottoService.getLottoByID(id);
					setLottoByID(response);
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

	if (!lottoByID && id !== undefined) {
		return <div>Loading...</div>;
	}
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
					number: lottoByID !== null ? lottoByID.number : null,
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
						onChange={handleChange} // value={nameChoices.length > 0 ? nameChoices[0].label : null}
						style={{ width: '100%' }}
						defaultValue={id > 0 ? lottoByID.name : null}
						options={nameChoices.map((item) => ({
							label: item.name,
							value: item.label,
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
