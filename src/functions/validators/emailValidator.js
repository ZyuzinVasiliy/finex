/**
 * Created by XpoHo
 */

export default {

  /**
   * Метод принимает строку и проверяем соответствует ли она email
   * @param email
   * @returns {boolean}
   */
  validEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
}
