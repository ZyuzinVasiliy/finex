export default {

  // получение имени администратора
  getSupportManagerName(message_group) {

    let result = '';
    if(message_group.hasOwnProperty(0)){
      if(message_group[0].hasOwnProperty('users_first_name')){
        result = message_group[0]['users_first_name']
      }
    }

    return result;
  },

  // получение имени автора заявки
  getAuthorName(model, fields = {'last_name': 'last_name', 'first_name': 'first_name', 'second_name': 'second_name'}) {
    let result_name = '';

    if(model == null){
      return result_name;
    }

    if(model.hasOwnProperty(fields['last_name'])){
      if(model[fields['last_name']] != null){
        result_name += model[fields['last_name']];
      }
    }
    if(model.hasOwnProperty(fields['first_name'])){
      if(model[fields['first_name']] != null){
        result_name += ' ' + model[fields['first_name']];
      }
    }
    if(model.hasOwnProperty(fields['second_name'])){
      if(model[fields['second_name']] != null){
        result_name += ' ' + model[fields['second_name']];
      }
    }
    return result_name;
  },

  // получение имени автора заявки
  getPassportInfo(model) {
    let result_val = '';

    if(model.hasOwnProperty('passport_series')){
      if(model['passport_series'] != null){
        result_val += model['passport_series'];
      }
    }
    if(model.hasOwnProperty('passport_number')){
      if(model['passport_number'] != null){
        result_val += ' ' + model['passport_number'];
      }
    }

    if(result_val === ''){
      result_val = '-';
    }

    return result_val;
  },


  getUserAge(user_birthday) {

    if(user_birthday == null || user_birthday === ''){
      return '-';
    }

    let current_date__prepare = window.moment();
    let user_birthday__prepare = window.moment(user_birthday);
    let user_age = current_date__prepare.diff(user_birthday__prepare, 'years');

    // добавляем окончание
    let cases = [2, 0, 1, 1, 1, 2];
    let titles = ['год', 'года', 'лет',]
    let age_title =  titles[ (user_age%100>4 && user_age%100<20)? 2 : cases[(user_age%10<5)?user_age%10:5] ];

    return user_age + ' ' + age_title;
  },

  getUserImg(user_model, field_name = 'img', img_placeholder_path = 'blank-profile.png') {
    let img_placeholder = require('@/assets/img/'+img_placeholder_path);
    let img = img_placeholder;

    if(user_model.hasOwnProperty(field_name)){
      if(user_model[field_name] != null && user_model[field_name] != ''){
        img = user_model[field_name];
      }
    }

    return img;
  },

}
