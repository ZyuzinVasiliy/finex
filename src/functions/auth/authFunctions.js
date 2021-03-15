/**
 * Created by XpoHo
 */

export default {

  // настройки REST API Laravel Passport
  grant_type: 'password',
  client_id: '',
  client_secret: '',

  // сохраняем токен в localStorage
  addToken (token) {
    localStorage.fin_expert__token = token
  },

  // получаем токен из localStorage
  getToken () {
    let returnValue = ''

    if (typeof localStorage.fin_expert__token !== 'undefined') {
      returnValue = localStorage.fin_expert__token
    }
    return returnValue
  },

  // удаляем token - выход
  resetToken () {
    delete localStorage.fin_expert__token
  },
  // выход
  logout() {
    this.resetToken();
  },

  // проверка что в localStorage есть token
  loggedIn() {
    return !!localStorage.fin_expert__token
  }
}
