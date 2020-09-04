import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import privateRoutes from '@/routes/privateRoutes';
import { Route as IRoute } from '@/routes/types';
import { connect } from 'react-redux';
import { RootState } from '@/store';
import { Dispatch } from 'redux';
import {
  setSelectedKeys,
  setOpenKeys,
  setCurrentOpenKeys,
} from '@/store/sysConfigs/actions';

const { SubMenu } = Menu;

interface IProps {
  collapsed: boolean;
  openKeys: Array<string>;
  selectedKeys: Array<string>;
  dispatch: Dispatch;
}
interface IState {}

class NavMenu extends Component<IProps, IState> {
  renderMenu = (routes: Array<IRoute>) => {
    const { selectedKeys } = this.props;
    return routes.map((route: IRoute) => {
      if (route.routes && route.routes.length !== 0) {
        return (
          <SubMenu key={route.key} title={route.title} icon={route.icon}>
            {this.renderMenu(route.routes)}
          </SubMenu>
        );
      }
      return selectedKeys.includes(route.key) ? (
        <Menu.Item key={route.key}>{route.title}</Menu.Item>
      ) : (
        <Menu.Item key={route.key}>
          <Link to={Array.isArray(route.path) ? route.path[0] : route.path}>
            {route.title}
          </Link>
        </Menu.Item>
      );
    });
  };

  handleItemClick = (e: import('rc-menu/lib/interface').MenuInfo) => {
    const { dispatch, collapsed, openKeys } = this.props;
    if (collapsed) {
      dispatch(setCurrentOpenKeys(openKeys));
    }
    dispatch(setSelectedKeys([`${e.key}`]));
  };

  handleOpenChange = (openKeys: Array<string>) => {
    const { dispatch } = this.props;
    if (openKeys.length > 1) {
      openKeys.shift();
    }
    dispatch(setOpenKeys(openKeys));
  };

  render() {
    const { selectedKeys, openKeys } = this.props;
    return (
      <Menu
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={this.handleItemClick}
        onOpenChange={this.handleOpenChange}
      >
        {this.renderMenu(privateRoutes)}
      </Menu>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  const { openKeys, selectedKeys, collapsed } = state.sysConfigs;
  return { openKeys, selectedKeys, collapsed };
};
export default connect(mapStateToProps)(NavMenu);
