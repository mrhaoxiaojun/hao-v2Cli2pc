/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:35:15
 * @Details:  公共接口模块
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-07-22 10:31:53
 */

import url from './server/url'
import { post } from './server/http.js'
// demo
// this.$api.getInfo().then(()=>{})
export default {
  getInfo (params) {
    return post(url.getInfo, params)
  },
  getCurrentUserDataEntitys (params) {
    return post(url.getCurrentUserDataEntitys, params)
  }
}
