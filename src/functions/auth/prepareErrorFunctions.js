/**
 * Created by XpoHo
 */

export default {

  // получаем токен из localStorage
  prepareError (responseObj) {
    let tmp_error = {
      'text': 'Внутренняя ошибка сервера'
    };

    //
    let response_error = responseObj.getAttr('error')

    if(response_error != null){
      if(response_error !== true){
        response_error = response_error.toLowerCase();
      }
      switch (response_error) {
        case 'token_invalid':
          tmp_error['text'] = 'Неправильная комбинация логина/пароля';
          break;

        case 'user_not_verified':
          tmp_error['text'] = 'Учетная запись не активирована';
          break;

        case 'url_not_found':
          tmp_error['text'] = 'Пользователя с таким "Email" не найдено';
          break;

        case 'user_email_exist':
          tmp_error['text'] = 'Пользователь с таким "Email" уже зарегистрирован';
          break;
      }
    }


    //
    let response_error_code = responseObj.result_code;

    if(response_error_code != null){
      response_error_code = response_error_code.toLowerCase();

      for (let errorKey in responseObj.errors) {
        switch (errorKey) {
          case 'user_email_exist':
            tmp_error['text'] = 'Пользователь с таким "Email" уже зарегистрирован';
            break;

          default:
            if(this.isArray(responseObj.errors[errorKey])){
              tmp_error['text'] = responseObj.errors[errorKey][0];
            }
            break;
        }
      }
    }


    return tmp_error
  },

  isArray(obj){
    return !!obj && obj.constructor === Array;
  }
}
