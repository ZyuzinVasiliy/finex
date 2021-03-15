/**
 * Подключаем файлы модуля
 */
import state from './_state.js'
import mutations from './_mutations.js'
import actions from './_actions.js'
import getters from './_getters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
