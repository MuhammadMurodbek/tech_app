import React, { useState } from 'react'
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	SearchOutlined
} from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'
import { Outlet, To, useNavigate } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const Dashboard: React.FC<any> = () => {
	const navigate = useNavigate()
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer }
	} = theme.useToken()
	const handleSwitchMenu = (e: { key: To }) => {
		if (e.key == '/login') localStorage.clear()
		navigate(e.key)
	}
	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				theme="light"
			>
				<Header style={{ backgroundColor: 'white' }}>
					{!collapsed && <div>Dashboard</div>}
				</Header>

				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={['1']}
					onClick={handleSwitchMenu}
					items={[
						{
							key: '/products',
							icon: <UserOutlined />,
							label: 'Products'
						},
						{
							key: '/search',
							icon: <SearchOutlined />,
							label: 'Search'
						},
						{
							key: '/login',
							icon: <UploadOutlined />,
							label: 'Log out'
						}
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						height: 'auto',
						background: colorBgContainer
					}}
				>
					<Button
						type="text"
						icon={
							collapsed ? (
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
							)
						}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '16px',
							width: 42,
							height: 42,
							marginLeft: 14
						}}
					/>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: '10px 0',
						minHeight: 280,
						background: colorBgContainer
					}}
				>
					<div id="detail">
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}

export default Dashboard
