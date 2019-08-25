import { httpGet } from './request';

/**
 * 用于存放公用的请求接口
 */

export async function getMenuList(params: any = {}) {
  const url = './static/mock/menu.json';
  return await httpGet(url, params);
}

