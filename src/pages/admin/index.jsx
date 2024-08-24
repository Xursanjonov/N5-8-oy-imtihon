import React, { useState, memo, useEffect } from 'react';
import { AppstoreOutlined, EditOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const { Header, Sider, Content } = Layout;

const Admin = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(localStorage.getItem('collepsed') || false);
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    useEffect(() => { localStorage.setItem('collepsed', collapsed) }, [collapsed])
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
    const classToProfileName = `w-full cursor-pointer h-[64px] flex items-center justify-center gap-4 text-lg font-bold text-white bg-transparent border-b-[.1px border-gray-400`
    const classSpiltName = `w-[40px] h-[40px] font-bold flex items-center justify-center rounded-full bg-blue-500`
    const siderItemActive = `max-w-[${collapsed ? '35px' : '340px'}] w-full hover:text-black p-3 flex items-center justify-center text-lg gap-4 mx-auto bg-blue-500 font-semibold rounded-md text-[#000]`
    const siderItem = `max-w-[${collapsed ? '35px' : '340px'}] w-full p-3 flex items-center justify- text-lg gap-4 mx-auto bg-transparent font-semibold rounded-md text-white`

    return (
        <section className='w-full mx-auto'>
            <Layout className='w-full min-h-[955px]'>
                <Sider trigger={null} className='' collapsible width={collapsed ? 30 : 300} collapsed={collapsed}>
                    <div className={`h-full translate-x-[12.5px] fixed flex flex-col items-start justify-start gap-2 `} >
                        <h1 className={`${classToProfileName}`}>
                            <span onClick={() => navigate('/')} className={classSpiltName}>
                                {user?.fname.split('')[0]}
                            </span>
                            <span onClick={() => navigate('/admin/profile')} className={collapsed ? 'hidden' : 'block'}>{user?.fname} {user?.lname}</span>
                        </h1>
                        <div className="max-w-[300px] w-full mt-2 flex flex-col items-start justify-center gap-2">
                            <NavLink to={'/admin/dashboard'} className={pathname === '/admin/dashboard' ? siderItemActive : siderItem}>
                                <AppstoreOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Dashboard</span>
                            </NavLink>
                            <NavLink to={'/admin/create-product'} className={pathname === '/admin/create-product' ? siderItemActive : siderItem}>
                                <EditOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Create Product</span>
                            </NavLink>
                            <NavLink to={'/admin/manage-product'} className={pathname === '/admin/manage-product' ? siderItemActive : siderItem}>
                                <QrcodeOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Manage Product</span>
                            </NavLink>
                            <NavLink to={'/admin/create-category'} className={pathname === '/admin/create-category' ? siderItemActive : siderItem}>
                                <EditOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Create Category</span>
                            </NavLink>
                            <NavLink to={'/admin/manage-category'} className={pathname === '/admin/manage-category' ? siderItemActive : siderItem}>
                                <QrcodeOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Manage Category</span>
                            </NavLink>
                        </div>
                        {collapsed ? <button className='w-full text-white absolute bottom-4'>
                            <LogoutOutlined className='text-[20px]' />
                        </button> :
                            <Button className={`w-full font-bold text-white flex items-center justify-center absolute bottom-4`} type="link"
                                onClick={() => dispatch(logout())} size="large">
                                <span> <LogoutOutlined style={{ fontSize: '20px' }} /> </span>
                                <span className={`text-lg ${collapsed ? 'hidden' : 'block'}`}>Logout</span>
                            </Button>}
                    </div>
                </Sider>
                <Layout>
                    <Header className='border-b-[1px] border-gray-300' style={{ padding: 0, background: colorBgContainer, }} >
                        <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)} style={{ fontSize: '16px', width: 64, height: 64, }}
                        />
                    </Header>
                    <Content className='bg-[#f1f1f1]' style={{ margin: '24px 16px', padding: 24, minHeight: 280, borderRadius: borderRadiusLG, }} >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </section >
    )
}

export default memo(Admin)