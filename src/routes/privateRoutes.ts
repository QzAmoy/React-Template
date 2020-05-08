const privateRoutes = [
  {
    key: 'admin',
    path: '/admin',
    component: () => import('@/pages/Admin'),
    routes: [],
  },
];

export default privateRoutes;
