/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:45:30
 * @Details: common 模块
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-06-27 15:27:13
 */

import * as types from './../types'

const state = {
  title: 'front end',
  subTitle: 'this is a test',
  isShowMenu: false
}

const actions = {
  titleState ({ commit }, str) {
    commit(types.COM_SHOW_TITLE, str)
  },
  ShowMenuState ({ commit }, str) {
    commit(types.COM_SHOW_MENU, str)
  }
}

const mutations = {

  [types.COM_SHOW_TITLE] (state, str) {
    state.title = str
  },
  [types.COM_SHOW_MENU] (state, str) {
    state.isShowMenu = str
  }
}

export default {
  state,
  actions,
  mutations
}
