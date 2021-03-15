/**
 * Подключаем файлы модуля
 */
import state from './moduleServiceClassesState.js'
import mutations from './moduleServiceClassesMutations.js'
import actions from './moduleServiceClassesActions.js'
import getters from './moduleServiceClassesGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
