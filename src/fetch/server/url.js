/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:33:03
 * @Details:  站点内所有接口请求均在此统一维护，防止覆盖、冗余
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-07-22 10:33:15
 */

let domain = process.env.NODE_ENV !== 'production' ? '/mockapi' : ''
let domain3001 = process.env.NODE_ENV !== 'production' ? '/sysApi3001' : process.env.DOMAIN

let testApi = '/apiTest' // login登录接口
// 网关
let sys = '/sysmgtserver'

export default {
  getInfo: domain + testApi + '/userInfo/getUserInfo',
  getCurrentUserDataEntitys: `${domain3001}${sys}/sysDataEntity/getCurrentUserDataEntitys`
}
