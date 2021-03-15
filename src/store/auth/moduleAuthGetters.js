/**
 *
 */

export default {

  /**
   * Метод везвращает значение state
   *
   * пример вызова this.$store.getters['MODULE_NAMESPACE/getStateVariableName']
   * @param state
   * @returns {null}
   */
  getStateVariableName: (state) => {
    return state.STATE_VARIABLE_NAME;
  },

  /**
   * Метод везвращает значение state, при этом принимает payload
   *
   * пример вызова this.$store.getters['MODULE_NAMESPACE/getStateVariableName__withPayload']( {id: 1} )
   * @param state
   * @returns
   */
  getStateVariableName__withPayload: (state) => payload => {
    // payload - объект данных
    // payload.id = 1

    return state.STATE_VARIABLE_NAME;
  },
}
