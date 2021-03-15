/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */
import store from '@/store/index'

export default {

  // OPEN/CLOSE
  async SET_OPEN({commit}) {
    document.querySelector("body").classList.add('no-scroll');
    document.querySelector("html").classList.add('no-scroll');
    commit('SET_OPEN')
  },
  async SET_CLOSE({commit}) {
    document.querySelector("body").classList.remove('no-scroll');
    document.querySelector("html").classList.remove('no-scroll');
    commit('SET_CLOSE')
  },

}
