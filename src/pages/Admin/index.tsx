import React, { Component } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import AuthRouteWithSubRoutes from '@components/AuthRouteWithSubRoutes';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Routes } from '@/routes/types';
import NavMenu from './components/NavMenu';
import './index.less';

const { Sider, Header, Content, Footer } = Layout;

interface IProps {
  routes: Routes;
}
interface IState {
  collapsed: boolean;
}
class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  handleToggleCollapsed = (): void => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { routes } = this.props;
    return (
      <Layout id="admin-layout">
        <Sider width={180} trigger={null} collapsible collapsed={collapsed}>
          <NavMenu collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header>
            <span className="menu-trigger" onClick={this.handleToggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
          </Header>
          <Content>
            content
            <Switch>
              {routes.map((route) => (
                <AuthRouteWithSubRoutes {...route} />
              ))}
              <Route render={() => <div>404</div>} />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
