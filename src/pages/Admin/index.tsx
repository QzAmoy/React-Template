import React, { Component } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Routes } from '@/routes/types';
import PageContent from './components/PageContent';
import './index.less';

const { Sider, Header, Footer } = Layout;

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
          sider
        </Sider>
        <Layout>
          <Header>
            <span className="menu-trigger" onClick={this.handleToggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
          </Header>
          <PageContent routes={routes} />
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
