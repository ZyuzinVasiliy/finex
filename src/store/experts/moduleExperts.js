/**
 * Подключаем файлы модуля
 */
import state from './moduleExpertsState.js'
import mutations from './moduleExpertsMutations.js'
import actions from './moduleExpertsActions.js'
import getters from './moduleExpertsGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
