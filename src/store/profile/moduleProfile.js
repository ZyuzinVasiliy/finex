/**
 * Подключаем файлы модуля
 */
import state from './moduleProfileState.js'
import mutations from './moduleProfileMutations.js'
import actions from './moduleProfileActions.js'
import getters from './moduleProfileGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
