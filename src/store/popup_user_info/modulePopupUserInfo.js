/**
 * Подключаем файлы модуля
 */
import state from './modulePopupUserInfoState.js'
import mutations from './modulePopupUserInfoMutations.js'
import actions from './modulePopupUserInfoActions.js'
import getters from './modulePopupUserInfoGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
