const baseRoutes = [
  {
    title: '主页',
    key: 'index',
    path: ['/', '/home'],
    exact: true,
    component: () => import('@/pages/Home'),
  },
  {
    title: '登录',
    key: 'login',
    path: '/login',
    component: () => import('@/pages/Login'),
  },
];

export default baseRoutes;
