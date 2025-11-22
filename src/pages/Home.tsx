import React, { useState ,useEffect} from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Layout, Menu, theme,message } from 'antd';
import { useNavigate } from 'react-router';
// import Createdepart from './createdepart';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('部门管理', '/depart', <PieChartOutlined />),
    getItem('新增部门', '/createdepart', <DesktopOutlined />),
    getItem('员工管理', '/employees', <TeamOutlined />,),
    getItem('退出登录', '/login', <FileOutlined />),
];

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate=useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("my_token")) {
            navigate('/login')
            alert("请先完成登录")
        }
    }, [navigate])
    const menuClick = (e: { key: string }) => {
        if (e.key === "/login") {
            localStorage.removeItem("my_role")
            localStorage.removeItem("my_token")
            message.success("退出登录成功")
            navigate("/login")
        }
        else {
            navigate(e.key)
        }
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}  onClick={menuClick}/>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;