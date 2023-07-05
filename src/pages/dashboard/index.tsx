import React, { useState } from 'react'
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	SearchOutlined
} from '@ant-design/icons'
import { Layout, Menu, Button, Space, Avatar } from 'antd'
import { Outlet, To, useNavigate } from 'react-router-dom'
import './style.css'

const { Header, Sider, Content } = Layout

const Dashboard: React.FC<any> = () => {
	const navigate = useNavigate()
	const [collapsed, setCollapsed] = useState(false)
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
				<Header className="bg-white p-0">
					{!collapsed && (
						<div className="label">Dashboard</div>
					)}
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
				<Header className="header-collapse bg-white">
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
						className="button-toggle"
					/>
					<Space align="center" size={'middle'}>
						<div>Murodbek Raximjonov</div>
						<Avatar size={36} icon={<UserOutlined />} />
					</Space>
				</Header>
				<Content className="bg-white content">
					<div id="detail">
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}

export default Dashboard
