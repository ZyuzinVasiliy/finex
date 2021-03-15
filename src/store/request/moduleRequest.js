/**
 * Подключаем файлы модуля
 */
import state from './moduleRequestState.js'
import mutations from './moduleRequestMutations.js'
import actions from './moduleRequestActions.js'
import getters from './moduleRequestGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
