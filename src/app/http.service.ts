import { Injectable } from '@angular/core';
import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

@Injectable()
export class HttpService {

  constructor() { }

  //主题首页
  getTopic(url) {
    return axios.get(url)
        .then(res => {
          return Promise.resolve(res.data);
        }).catch(err=>{
          return Promise.reject(err);
        })
  }

  //主题详情
  getTopicDetail(id) {
    return axios.get(`topic/${id}`)
      .then(res=>{
        return Promise.resolve(res.data);
      }).catch(err=>{
        return Promise.reject(err);
      })
  }

  //用户信息
  getUser(username) {
    return axios.get(`user/${username}`)
      .then(res=>{
        return Promise.resolve(res.data);
      }).catch(err=>{
        return Promise.reject(err);
      })
  }

  //用户收藏的主题
  getTopicCollect(username){
    return axios.get(`topic_collect/${username}`)
      .then(res=>{
        return Promise.resolve(res.data);
      }).catch(err=>{
        return Promise.reject(err);
      });
  }



}
