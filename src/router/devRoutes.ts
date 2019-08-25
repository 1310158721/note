const dveRoutes = [
  {
    title: '方便测试',
    path: '/test',
    disabled: false,
    component: () => import('@/layout/base/index.vue'), // 使用 layout-base 的布局
    children: [
      {
        title: 'typescript',
        path: '/typescript',
        disabled: false,
        component: () => import('@/views/test/typescript/index.vue')
      }
    ]
  }
];

export default dveRoutes;
