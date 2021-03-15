/**
 * Подключаем файлы модуля
 */
import state from './moduleCartState.js'
import mutations from './moduleCartMutations.js'
import actions from './moduleCartActions.js'
import getters from './moduleCartGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
