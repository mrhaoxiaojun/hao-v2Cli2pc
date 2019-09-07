// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import filters from '@/filters'
import directives from '@/directives'
import plugins from '@/plugins'
import pluginsOptions from '@/plugins/config'
import interceptors from './fetch/server/interceptors'
import 'babel-polyfill'

// 注册过滤器
Vue.use(filters)
// 加载指令
Vue.use(directives)
// 加载插件（包含全局组件，API，Vue全局方法等）
Vue.use(plugins, pluginsOptions)
// 拦截器
interceptors()

Vue.config.productionTip = false
// Vue.config.devtools = Vue.config.productionTip = process.env.NODE_ENV !== 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n: pluginsOptions.i18n,
  components: { App },
  template: '<App/>'
})
