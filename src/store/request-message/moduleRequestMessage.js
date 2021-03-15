/**
 * Подключаем файлы модуля
 */
import state from './moduleRequestMessageState.js'
import mutations from './moduleRequestMessageMutations.js'
import actions from './moduleRequestMessageActions.js'
import getters from './moduleRequestMessageGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
