/*
 * @Author: haoxiaojun
 * @Date: 2019-07-16 11:11:01
 * @Details:  拦截器配置文件
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-08-01 17:15:06
 */
export default {
  token: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbl9uYW1lIjoiemhhbmdqdWFuanVhbiIsInVzZXJfaWQiOiI4NTYwRjQ3Ny1CRTNFLTQ3MzMtQkU0Ri03QjNENjlDRjlCQkEiLCJ1c2VyX25hbWUiOiJ6aGFuZ2p1YW5qdWFuIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIiwidHJ1c3QiXSwib3JnYW5pemF0aW9uIjoiM0EzMTIzOTgtQUVERS00MjNFLTk0NTgtRkIwM0ZDNjhGNUQ1IiwiaXNzIjoiYTM2YzMwNDliMzYyNDlhM2M5Zjg4OTFjYjEyNzI0M2MiLCJleHAiOjE1NjQ2Njg2OTksImRpc3BsYXlfbmFtZSI6IuW8oOWon-WonyIsInJlZ2lvbiI6IlNPIiwiaWF0IjoxNTY0NjI1NDk5ODkwLCJqdGkiOiJjN2QyMGQyYS00NDcxLTRhMDEtOTgwYy01NDE4MWU3MzM1NjkiLCJjbGllbnRfaWQiOiJDb3Vwb25TeXN0ZW0ifQ.gdHFGl9tqPtn-21jgIa5KotpX7G2SnJuDQ1loAc0DpQ2sfCnHzHeFpuG9ifR1uusQ1i9sjbrM79qC7tlqVZAwuDR2myJ--tX4VIYpPd-GEQ4LASsemAT_-44fRJZ-mqK8RWD02ed2xrtKCdIUzY3IR0IzXC4C3PN6uahB_QwN1z1Zd4Bv4xt25u3BZXeeoxcqY1ybOhIDx-YtN-FVzE8ZsICagRneNngBr61-Nv22verwPN3yHiVIRdlyX2DWC5L3Uz4AbBbocTAgS5ATMJ2HRfXM9ak_f2aQdKWOhEGad_JDlVyM4R-K0raLPy_KJIZBmd0dr33QAG6OgKuHfcfVQ',
  errMap: {
    400: '请求错误',
    401: '未授权，请登录',
    403: '拒绝访问',
    404: `请求地址出错`,
    408: '请求超时',
    500: '服务器内部错误',
    501: '服务未实现',
    502: '网关错误',
    503: '服务不可用',
    504: '网关超时',
    505: 'HTTP版本不受支持'
  },
  loginUrl: `${process.env.DOMAIN}/loginsite/login`
}
