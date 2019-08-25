import axios from 'axios';

/**
 * get请求
 * url: 请求路径
 * params 请求参数
 */
export const httpGet = (url: string = '', params: any = {}) => {
  return new Promise((resolve: any) => {
    axios.get(url, { params }).then((res) => {
      resolve(res);
    }).catch((err) => {
      console.log(err);
    });
  });
};

/**
 * post 请求
 * url: 请求路径
 * params 请求参数
 */
export const httpPost = (url: string = '', data: any = {}) => {
  return new Promise((resolve: any) => {
    axios.post(url, data).then((res) => {
      resolve(res);
    }).catch((err) => {
      console.log(err);
    });
  });
};

