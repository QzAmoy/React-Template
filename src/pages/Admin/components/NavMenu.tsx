import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import privateRoutes from '@/routes/privateRoutes';
import { Route as IRoute } from '@/routes/types';

const { SubMenu } = Menu;

interface IProps {
  collapsed: boolean;
}
interface IState {
  openKeys: Array<string>;
  selectedKeys: Array<string>;
}

class NavMenu extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      openKeys: [],
      selectedKeys: [],
    };
  }

  renderMenu = (routes: Array<IRoute>) => {
    const { selectedKeys } = this.state;
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
    this.setState({
      selectedKeys: [`${e.key}`],
    });
  };

  handleOpenChange = (openKeys: Array<string>) => {
    if (openKeys.length > 1) {
      openKeys.shift();
    }
    this.setState({
      openKeys,
    });
  };

  render() {
    const { selectedKeys, openKeys } = this.state;
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

export default NavMenu;
