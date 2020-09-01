import React from 'react';
import Loadable from '@utils/loadable';
import { UserOutlined } from '@ant-design/icons';

const privateRoutes = [
  {
    title: '管理中心',
    key: 'admin',
    component: Loadable(() => import('@/pages/Admin')),
    icon: <UserOutlined />,
    routes: [
      {
        title: '用户信息',
        key: 'userInfo',
        authCode: 'userInfo',
        path: ['/admin', '/admin/user-info'],
        exact: true,
        component: Loadable(() => import('@/pages/UserInfo')),
      },
      {
        title: '用户信息2',
        key: 'userInfo2',
        authCode: 'userInfo2',
        path: '/admin/user-info2',
        exact: true,
        component: Loadable(() => import('@/pages/UserInfo')),
      },
    ],
  },
  {
    title: '管理中心',
    key: 'admin2',
    component: Loadable(() => import('@/pages/Admin')),
    icon: <UserOutlined />,
    routes: [
      {
        title: '用户信息',
        key: 'userInfo',
        authCode: 'userInfo',
        path: ['/admin', '/admin/user-info'],
        exact: true,
        component: Loadable(() => import('@/pages/UserInfo')),
      },
      {
        title: '用户信息2',
        key: 'userInfo2',
        authCode: 'userInfo2',
        path: '/admin/user-info2',
        exact: true,
        component: Loadable(() => import('@/pages/UserInfo')),
      },
    ],
  },
];

export default privateRoutes;
