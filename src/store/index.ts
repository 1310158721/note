import Vuex from 'vuex';
import Vue from 'vue';
import { getMenuList } from '@/http/common';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menuList: null
  },
  getters: {},
  mutations: {
    setMenuList(state, data: any) {
      state.menuList = data;
    }
  },
  actions: {
    getTheMenuList({ commit }, params: any = {}) {
      return new Promise((resolve) => {
        getMenuList(params).then((res: any) => {
          resolve(res.data.list);
        });
      });
    }
  }
});

export default store;
