import React, { Component } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import AuthRouteWithSubRoutes from '@components/AuthRouteWithSubRoutes';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Routes } from '@/routes/types';
import { RootState } from '@/store';
import { setCollapsed, setOpenKeys } from '@/store/sysConfigs/actions';
import NavMenu from './components/NavMenu';
import './index.less';

const { Sider, Header, Content, Footer } = Layout;

interface IProps {
  routes: Routes;
  collapsed: boolean;
  currentOpenKeys: Array<string>;
  dispatch: Dispatch;
}
interface IState {}
class Index extends Component<IProps, IState> {
  handleToggleCollapsed = (): void => {
    const { collapsed, currentOpenKeys, dispatch } = this.props;
    if (collapsed) {
      dispatch(setOpenKeys(currentOpenKeys));
    }
    dispatch(setCollapsed(!collapsed));
  };

  render() {
    const { collapsed } = this.props;
    const { routes } = this.props;
    return (
      <Layout id="admin-layout">
        <Sider width={180} trigger={null} collapsible collapsed={collapsed}>
          <NavMenu />
        </Sider>
        <Layout>
          <Header>
            <span className="menu-trigger" onClick={this.handleToggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
          </Header>
          <Content>
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
const mapStateTopProps = (state: RootState) => {
  const { collapsed, currentOpenKeys } = state.sysConfigs;
  return { collapsed, currentOpenKeys };
};
export default connect(mapStateTopProps)(Index);
