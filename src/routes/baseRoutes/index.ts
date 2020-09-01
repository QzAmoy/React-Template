import Loadable from '@utils/loadable';

const baseRoutes = [
  {
    title: '主页',
    key: 'index',
    path: ['/', '/home'],
    exact: true,
    component: Loadable(() => import('@/pages/Home')),
  },
  {
    title: '登录',
    key: 'login',
    path: '/login',
    component: Loadable(() => import('@/pages/Login')),
  },
];

export default baseRoutes;
