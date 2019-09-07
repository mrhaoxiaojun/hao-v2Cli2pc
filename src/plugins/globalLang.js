/*
 * @Author: haoxiaojun
 * @Date: 2019-06-18 20:22:18
 * @Details:  国际化处理
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-06-21 10:56:26
 */

import VueI18n from 'vue-i18n'
// 按需加载的组件语言包
import { locale } from 'iview'
import en from 'iview/dist/locale/en-US'
import zh from 'iview/dist/locale/zh-CN'
import fr from 'iview/dist/locale/fr-FR'
// 本地语言包
const messages = {
  zh: require('@/lang/zh'),
  en: require('@/lang/en'),
  fr: require('@/lang/fr')
}

export default function (Vue, Options) {
  switch (Options.locale) {
    case 'fr':
      locale(fr)
      break
    case 'en':
      locale(en)
      break
    default:
      locale(zh)
  }
  Vue.use(VueI18n)
  const i18n = new VueI18n({
    locale: Options.locale || 'zh', // set locale
    messages // set locale messages
  })
  Options.i18n = i18n
}
