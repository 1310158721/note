/**
 * 异步路由，不能给这些路由同时赋予name和path的属性
 * 不然与addRoutes方法的结合会出现 [vue-router] Duplicate named routes definition 的报错
 */
const asyncRoutes = [
  {
    path: '/layout-base',
    title: 'layoutBase',
    component: () => import('@/layout/base/index.vue'),
    redirect: { name: 'dashboard' },
    children: []
  },
  {
    path: '/dashboard',
    title: '首页',
    component: () => import('@/views/dashboard/index.vue')
  },
  {
    path: '/es5',
    title: 'es5',
    component: () => import('@/views/es5/index.vue')
  },
  {
    path: '/es6',
    title: 'es6',
    component: () => import('@/views/es6/index.vue')
  },
  {
    path: '/html',
    title: 'html',
    component: () => import('@/views/html/index.vue')
  },
  {
    path: '/css',
    title: 'css',
    component: () => import('@/views/css/index.vue')
  },
  {
    path: '/permission',
    title: '权限管理',
    component: () => import('@/views/permission/index.vue')
  }
];

export default asyncRoutes;
