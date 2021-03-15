/**
 *
 */

export default {

  UPDATE_TOKEN(state, payload) {
    // payload - объект данных
    // payload.id = 1

    state.TOKEN = payload.token;
  },

  UPDATE_INTERVAL_LIST(state, payload){
    this.INTERVAL_LIST = payload;
  }
}

