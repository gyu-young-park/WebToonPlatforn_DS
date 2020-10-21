import React, {useState, useEffect} from 'react'
import './index.css'
import { Layout, Menu, Breadcrumb} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {withRouter} from 'react-router-dom'
import { CollapseType } from 'antd/lib/layout/Sider';
import { useDispatch } from 'react-redux'
import {adminPageOn, adminPageOff} from '../../_actions/user_action'
import AuthorProfile from '../../components/AuthorProfile'
import {IWebtoonAuthorAdminPageProps} from '../../data/interface/IWebtoonAuthorAdminPageProps'
import AuthorAdminDounet from '../../components/AuthorAdminDounet'
import AuthorAdminBarChart from '../../components/AuthorAdminBarChart'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const AuthorAdminPage : React.FC<IWebtoonAuthorAdminPageProps> = (props : IWebtoonAuthorAdminPageProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const dispatch = useDispatch()
    dispatch(adminPageOn())
    const onCollapseHandler = (collapsed: boolean, type: CollapseType) => {
        setCollapsed(collapsed)
    }
    const email = props.match.params.email
    const name = props.match.params.name

    const onExitHandler = (event : any) => {
        props.history.push('/')
        const res = dispatch(adminPageOff())
    }
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapseHandler}>
                <div className="logo-admin" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">작가</Menu.Item>
                    <Menu.Item key="4">정산</Menu.Item>
                    <Menu.Item key="5">공지사항</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                    Files
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="admin-site-header" style={{ padding: 0 }}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1" onClick={onExitHandler}>EXIT</Menu.Item>
                        </Menu>
                    </Header>
                    
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="admin-page-content-container" style={{ padding: 24, minHeight: 360 }}>
                            <div className="author-information-container">
                                <AuthorProfile name={name} email={email} />
                            </div>
                            <div className="author-purchase-chart-container">
                                <AuthorAdminBarChart/>
                                <AuthorAdminDounet/>
                                <AuthorAdminDounet/>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}></Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default withRouter(AuthorAdminPage);

