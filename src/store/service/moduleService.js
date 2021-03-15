/**
 * Подключаем файлы модуля
 */
import state from './moduleServiceState.js'
import mutations from './moduleServiceMutations.js'
import actions from './moduleServiceActions.js'
import getters from './moduleServiceGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
