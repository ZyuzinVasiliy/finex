/**
 * Подключаем файлы модуля
 */
import state from './moduleFinOperationState.js'
import mutations from './moduleFinOperationMutations.js'
import actions from './moduleFinOperationActions.js'
import getters from './moduleFinOperationGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
