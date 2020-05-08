const baseRoutes = [
  {
    key: 'index',
    path: ['/', '/home'],
    exact: true,
    component: () => import('@/pages/Home'),
  },
  {
    key: 'login',
    path: '/login',
    component: () => import('@/pages/Login'),
  },
];

export default baseRoutes;
