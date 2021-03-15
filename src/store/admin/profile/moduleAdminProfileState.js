/**
 * переменные state текущего модуля
 * state должен меняться только через мутации, а мутации можно вызывать только через dispatch
 * таким образом получается схема dispatch -> mutation -> state -> getter
 */

export default {

  PROFILE: {
    first_name: null,
    second_name: null,
    last_name: null,
    birthday: null,
    phone: null,
    email: null,
    alt_phone: null,
    alt_email: null,
    place_actual_residence_city: null,
    img_avatar: null,
    description: null,
    short_description: null,
    images: null,
    role_code: null,
    balance: 0,
  },

  SETTINGS: {
    'email': null,
  },

  /**
   * key => from backend
   * value => from frontend
   */
  ITEM_MODEL: {
    'users_first_name': 'first_name',
    'users_last_name': 'last_name',
    'users_second_name': 'second_name',
    'users_birthday': 'birthday',
    'users_phone': 'phone',
    'users_alt_phone': 'alt_phone',
    'users_email': 'email',
    'users_alt_email': 'alt_email',
    'users_img': 'img_avatar',
    'users_description': 'description',
    'users_short_description': 'short_description',
    'users_images': 'images',
    'users_role_code': 'role_code',
    'users_balance': 'balance',

    'users_work_activity_city' : 'activity_city',
    'users_stat_qnt_deals'     : 'qnt_deals',
    'users_stat_qnt_services'  : 'qnt_services',

    'review_to_users_summary_summary_rate'             : 'rate',
    'review_to_users_summary_summary_qnt_reviews'      : 'reviews_all',
    'review_to_users_summary_summary_qnt_bad_reviews'  : 'reviews_bad',
    'review_to_users_summary_summary_qnt_good_reviews' : 'reviews_good',
  },

  ITEM_SERIALIZER: {
    'personal_first_name': {
      'field': 'first_name',
      'type': 'string'
    },
    'personal_last_name': {
      'field': 'last_name',
      'type': 'string'
    },
    'personal_second_name': {
      'field': 'second_name',
      'type': 'string'
    },
    'personal_birthday': {
      'field': 'birthday',
      'type': 'date',
      'format': {
        'source': 'd.m.Y',
        'destination': 'Y-m-d',
      }
    },
    'personal_email': {
      'field': 'email',
      'type': 'string'
    },
    'personal_alt_email': {
      'field': 'alt_email',
      'type': 'string'
    },
    'personal_phone': {
      'field': 'phone',
      'type': 'string'
    },
    'personal_alt_phone': {
      'field': 'alt_phone',
      'type': 'string'
    },
    'place_actual_residence_city': {
      'field': 'city',
      'type': 'string'
    },
    'personal_description': {
      'field': 'description',
      'type': 'string'
    },
    'personal_short_description': {
      'field': 'short_description',
      'type': 'string'
    },
  },

}
