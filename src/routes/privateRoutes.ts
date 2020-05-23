const privateRoutes = [
  {
    title: '管理中心',
    key: 'admin',
    component: () => import('@/pages/Admin'),
    routes: [
      {
        title: '用户信息',
        key: 'userInfo',
        authCode: 'userInfo',
        path: ['/admin', '/admin/user-info'],
        exact: true,
        component: () => import('@/pages/UserInfo'),
      },
    ],
  },
];

export default privateRoutes;
