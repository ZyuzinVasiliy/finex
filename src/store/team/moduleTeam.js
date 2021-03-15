/**
 * Подключаем файлы модуля
 */
import state from './moduleTeamState.js'
import mutations from './moduleTeamMutations.js'
import actions from './moduleTeamActions.js'
import getters from './moduleTeamGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
