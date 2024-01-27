import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
	AppstoreOutlined,
	CalendarOutlined,
	MailOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, } from 'antd';


function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	
	};
}

const items = [
	getItem('Dashboard', '15', <SettingOutlined />),
	getItem('Bedrijf', 'sub1-2', <SettingOutlined />, [
		getItem('Nieuw aanmaken', '2'),
		getItem('Lijst', '3'),
	]),

	getItem('Personeel', 'sub3-4', <SettingOutlined />, [
		getItem('Nieuw aanmaken', '10'),
		getItem('Lijst', '11'),
	]),

	getItem('Locatie', 'sub5-6', <SettingOutlined />, [
		getItem('Nieuw aanmaken', '20'),
		getItem('Lijst', '21'),
	]),

	getItem('Badge', 'sub7-8', <SettingOutlined />, [
		getItem('Nieuw aanmaken', '30'),
		getItem('Lijst', '31'),
	]),

	getItem('Lotto', 'sub9-10', <SettingOutlined />, [
		getItem('LOCK-Out', '40'),
		getItem('TAG-Out', '41'),
	]),
	getItem('Vergunning', '5', <AppstoreOutlined />, [
		getItem('Werkvergunning', 'sub11-12', null, [
			getItem('Nieuw aanmaken', '50'),
			getItem('Lijst', '51'),
		]),
		getItem('Vuurvergunning', 'sub13-14', null, [
			getItem('Nieuw aanmaken', '60'),
			getItem('Lijst', '61'),
		]),
	]),
];
console.log('items:',items)
export const LeftSidebar = () => {
	const [mode, setMode] = useState('inline');

	return (
		<div>
			<Divider type="vertical" />
			<Menu
				className="test"
				style={{
					width: 256,
				}}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode={mode}
				theme={'dark'}
				items={items}
				href="https://github.com/ant-design/ant-design/issues/1862"
			>
				
			</Menu>
			{/* <Tag>
      
    </Tag> */}
			  {/* <Link to="www.google.com"></Link> */}
		</div>
	);
};
