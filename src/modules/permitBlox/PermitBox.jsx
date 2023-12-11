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
		return Object.entries(data).map((item, i) => {
			const elements = [];

			if (item[1][0].name !== undefined) {
                elements.push(<div key={`${i}-name`} className='text-center m-2'>{item[1][0].name}</div>);
            }
            
            if (item[1][0].name !== undefined) {
                elements.push(
                    item[1][1].map((it, a) => (
                        <Checkbox key={`${i}-${a}-key`} className="col-xl-3">{it.label}</Checkbox>
                    ))
                );
            }

			if (item[1][0].key === 'description') {
				elements.push(
					<div key={`${i}-label`} >
						<Typography.Text level={5}>{item[1][0].label}</Typography.Text>
						<TextArea
							placeholder={`Werk in kort beschrijven`}
							allowClear
							onChange={onChange}
						/>
					</div>
				);
			}

			return elements;
		});
	};

	return <div>{permitBlock()}</div>;
};
