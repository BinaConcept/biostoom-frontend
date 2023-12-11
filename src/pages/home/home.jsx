import React from 'react';
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from React Router
const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
	const menuItems = [
		{ icon: UserOutlined, label: 'nav 1', path: '/page1' },
		{ icon: VideoCameraOutlined, label: 'nav 2', path: '/page2' },
		{ icon: UploadOutlined, label: 'nav 3', path: '/page3' },
		{ icon: UserOutlined, label: 'nav 4', path: '/page4' },
	];
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
				style={{
					// overflow: 'auto',
					height: '100vh',
					left: 0,
					top: 0,
					bottom: 0,
				}}
			>
				<div className="demo-logo-vertical" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
					{menuItems.map((item, index) => (
						<Menu.Item
							key={String(index + 1)}
							icon={React.createElement(item.icon)}
						>
							<Link to={item.path}>{item.label}</Link>
						</Menu.Item>
					))}
				</Menu>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				/>
				<Content
					style={{
						margin: '24px 16px 0',
					}}
				>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
						}}
					>
						content
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}
				>
					Biostoom ©2023 Created by Arsoft
				</Footer>
			</Layout>
		</Layout>
	);
};
export default Home;
