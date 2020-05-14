import React, { Component } from 'react';
import { Layout } from 'antd';
import Icon from '@components/Icon';
import './index.less';

const { Sider, Header, Content, Footer } = Layout;

interface IProps {}
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
    return (
      <Layout id="admin-layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          sider
        </Sider>
        <Layout>
          <Header>
            <Icon
              iconType={collapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'}
              className="menu-trigger"
              onClick={this.handleToggleCollapsed}
            />
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
