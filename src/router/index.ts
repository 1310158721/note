import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import asyncRoutes from './asyncRoutes';
import dveRoutes from './devRoutes';
import store from '@/store';

// 基础路由
const router: any =  new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      beforeEnter: (to, from, next) => {
        const isLogin = window.localStorage.getItem('isLogin');
        isLogin === 'true' ? next({ path: '/dashboard' }) : next({ path: '/login' });
      }
    },
    {
      path: '/layout-login',
      name: 'layout-login',
      component: () => import('@/layout/login/index.vue'),
      redirect: () => ({ path: '/login' }),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/login/index.vue'),
        }
      ]
    }
  ],
});

// 用于保存最终遍历生成的路由
const routesFromApi: any = [];

// 递归遍历children为数组的对象
const recursion = (children: any[]) => {
  children.map((item) => {
    if (item.children && item.children.length) {
      recursion(item.children);
    } else {
      routesFromApi.push(item);
    }
  });
};

// 获取匹配成功的路由
const getMatchedRoutes = (list: any) => {
  return new Promise((resolve) => {
    list.map((item: any) => {
      if (item.children && item.children.length) {
        recursion(item.children);
      } else {
        routesFromApi.push(item);
      }
    });
    resolve(routesFromApi);
  });
};

router.beforeEach((to: any, from: any, next: any) => {
  const isLogin = window.localStorage.getItem('isLogin') === 'true' ? true : false;
  if (!isLogin && to.path !== '/login' && to.path !== '/layout-base') {
    next({ path: '/login', replace: true });
  } else {
    if (!store.state.menuList) {
      store.dispatch('getTheMenuList', {id: 123}).then((list: any) => {
        list.push(...dveRoutes);
        store.commit('setMenuList', list);
        getMatchedRoutes(list).then((routes: any) => {
          // 异步路由
          const layoutBase: any = asyncRoutes[0];
          routes.map((routesItem: any) => {
            asyncRoutes.map((asyncRoutesItem: any) => {
              if (routesItem.title === asyncRoutesItem.title) {
                layoutBase.children.push(asyncRoutesItem);
              }
            });
          });
          router.addRoutes([layoutBase, ...dveRoutes]); // 添加动态路由
          router.push({ path: to.fullPath }); // 跳转到原先指定的路由
        });
      });
    } else {
      next();
    }
  }
});

export default router;
