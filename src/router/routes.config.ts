const routes: any = [
  {
    path: '/',
    name: 'root',
    beforeEnter: (to: any, from: any, next: any) => {
      const isLogin = window.localStorage.getItem('isLogin');
      isLogin === 'true' ? next({ path: '/dashboard' }) : next({ path: '/login' });
    }
  },
  {
    path: '/layout-base',
    name: '/layout-base',
    component: () => import('@/layout/base/index.vue'),
    redirect: { path: '/dashboard' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/dashboard/index.vue'),
        children: null
      },
      {
        path: '/web',
        name: 'web',
        meta: {
          title: '前端'
        },
        component: () => import('@/views/web/index.vue'),
        redirect: { name: 'javascript' },
        children: [
          {
            path: '/javascript',
            name: 'javascript',
            meta: {
              title: 'javascript'
            },
            component: () => import('@/views/web/javascript/index.vue'),
            redirect: { name: 'es6' },
            children: [
              {
                path: '/es6',
                name: 'es6',
                meta: {
                  title: 'Es6'
                },
                component: () => import('@/views/web/javascript/es6/index.vue'),
                children: null
              },
              {
                path: '/es5',
                name: 'es5',
                meta: {
                  title: 'Es5'
                },
                component: () => import('@/views/web/javascript/es5/index.vue'),
                children: null
              }
            ]
          },
          {
            path: '/html',
            name: 'html',
            meta: {
              title: 'Html'
            },
            component: () => import('@/views/web/html/index.vue'),
            children: null
          },
          {
            path: '/css',
            meta: {
              title: 'Css'
            },
            component: () => import('@/views/web/css/index.vue'),
            children: null
          }
        ]
      },
      {
        path: '/plugins',
        name: 'plugins',
        meta: {
          title: '插件'
        },
        component: () => import('@/views/plugins/index.vue'),
        redirect: { path: '/vue-draggable' },
        children: [
          {
            path: '/vue-draggable',
            name: 'vue-draggable',
            meta: {
              title: '拖拽组件'
            },
            component: () => import('@/views/plugins/vueDraggable/index.vue'),
            children: null
          }
        ]
      },
      {
        path: '/charts',
        name: 'charts',
        meta: {
          title: '图表'
        },
        component: () => import('@/views/charts/index.vue'),
        children: [
          {
            path: '/e-charts',
            name: 'e-charts',
            meta: {
              title: 'Echarts'
            },
            component: () => import('@/views/charts/e-charts/index.vue'),
            children: null
          }
        ]
      },
      {
        path: '/map',
        name: 'map',
        meta: {
          title: '地图'
        },
        component: () => import('@/views/map/index.vue'),
        children: [
          {
            path: '/baidu-map',
            name: 'baidu-map',
            meta: {
              title: '百度地图'
            },
            component: () => import('@/views/map/baidu-map/index.vue'),
            children: null
          }
        ]
      },
      {
        path: '/permission',
        name: 'permission',
        meta: {
          title: '权限'
        },
        component: () => import('@/views/permission/index.vue'),
        children: null
      },
      {
        path: '/memorandum',
        name: 'memorandum',
        meta: {
          title: '备忘录'
        },
        component: () => import('@/views/memorandum/index.vue'),
        children: null
      },
      {
        path: '/test',
        name: 'test',
        meta: {
          title: '方便测试'
        },
        component: () => import('@/views/test/index.vue'),
        children: [
          {
            path: '/typescript',
            name: 'typescript',
            meta: {
              title: 'typescript'
            },
            component: () => import('@/views/test/typescript/index.vue'),
            children: null
          }
        ]
      }
    ]
  },
  {
    path: '/layout-login',
    name: 'layout-login',
    component: () => import('@/layout/login/index.vue'),
    redirect: () => ({ path: '/login' }),
    children: [
      {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
      }
    ]
  }
];

export default routes;

