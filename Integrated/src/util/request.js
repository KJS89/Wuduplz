import axios from "axios";
import Toast from "./Toast";
import RootStore from "../mobx";
import {SERVER_ADDRESS} from '../../data/address'



const instance = axios.create({
  baseURL:SERVER_ADDRESS
})
//
instance.interceptors.request.use(function (config) {
  Toast.showLoading("requesting");
  // what to do before the request
  return config;
}, function (error) {
  // if error occurs
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  console.log('response arrived')
  // what to do when response arrives
  Toast.hideLoading();
  return response.data;
}, function (error) {
  // return errors
  return Promise.reject(error);
});
export default {
  get: instance.get,
  post: instance.post,
  privateGet: (url, data = {}, options = {}) => {
    const token = RootStore.token;
    const headers = options.headers || {};
    return instance.get(url, {
      ...options,
      params:data,
      headers: {
        "Authorization": `Bearer ${token}`,
        ...headers
      }
    })
  },
  // post with token
  privatePost: (url, data = {}, options = {}) => {
    const token = RootStore.token;
    const headers = options.headers || {};
    return instance.post(url, data, {
      ...options,
      headers: {
        "Authorization": `Bearer ${token}`,
        ...headers
      }
    })
  }
}