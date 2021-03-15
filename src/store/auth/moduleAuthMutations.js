/**
 *
 */

export default {

  UPDATE_TOKEN(state, payload) {
    // payload - объект данных
    // payload.id = 1

    state.TOKEN = payload.token;
  },
}

