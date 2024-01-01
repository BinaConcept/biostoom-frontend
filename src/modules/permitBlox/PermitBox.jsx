import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
	// 	Button,
	// 	Cascader,
	Checkbox,
	// 	ColorPicker,
	// 	DatePicker,
	// 	Form,
	Input,
	Typography,
	// 	InputNumber,
	// 	Radio,
	// 	Select,
	// 	Slider,
	// 	Switch,
	// 	TreeSelect,
	// 	Upload,
} from 'antd';
const { TextArea } = Input;
const onChange = (e) => {
	console.log(e);
};

export const PermitBox = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const loading = () => {
			setData(props.data);
		};
		loading();
	}, [props.data]);

	const permitBlock = () => {
		return (
			<div className="box-border">
				<div
					className="box-border-title"
					style={{ fontWeight: 'bold', backgroundColor: props.color }}
				>
					{props.title}
				</div>
				<div className="row m-2 box-border mt-3">
					{Object.entries(data).map((item, i) => (
						<div className={item[1][0].className} key={i}>
							{item[1][0].name !== undefined ? (
								<div className="text-center mt-4 box-border-subtitle">
									{item[1][0].name}
								</div>
							) : null}

							<div className="row m-1">
								{item[1][0].name !== undefined
									? item[1][1].map((it, a) => (
											<Checkbox
												key={`${i}-${a}-key`}
												name={it.key}
												className={it.className}
												style={{
													color: it.color,
													fontWeight: it.color === 'red' ? 'bold' : 'normal',
												}}
												defaultChecked={it.checked}
												onClick={(e) =>
													console.log(e.target.name, ' ', e.target.checked)
												}
											>
												{it.label}
											</Checkbox>
									  ))
									: null}
							</div>

							{item[1][0].key === 'description' ? (
								<div className="text-start mt-4 mb-4" key={`${i}-label`}>
									<Typography.Text level={5}>
										{item[1][0].label}
									</Typography.Text>
									<TextArea
										placeholder={`Werk in kort beschrijven`}
										allowClear
										onChange={onChange}
									/>
								</div>
							) : null}
						</div>
					))}
				</div>
			</div>
		);
	};

	return <div>{permitBlock()}</div>;
};
