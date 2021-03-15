/**
 * переменные state текущего модуля
 * state должен меняться только через мутации, а мутации можно вызывать только через dispatch
 * таким образом получается схема dispatch -> mutation -> state -> getter
 */

export default {

  /**
   * переменная state с указанием значения по-умолчанию
   */
  ITEMS: [],

  ITEM: {
    first_name  : null,
    second_name : null,
    last_name   : null,
    birthday    : null,
    phone       : null,
    email       : null,
    alt_phone   : null,
    alt_email   : null,
    place_actual_residence_city: null,
    img_avatar  : null,
    description : null,
    short_description: null,
    images      : null,
    role_code   : null,
    balance     : 0,
  },

  PAGINATION: {
    current_page: 1,
    total_item_count: 1,
    last_page: 1,
    per_page: 30,
    from: 1,
    to: 1,
    prev_page: 1,
    next_page: 1,
  },

  ITEMS_MODEL: {

    'users_id'          : 'id',
    'users_first_name'  : 'first_name',
    'users_last_name'   : 'last_name',
    'users_second_name' : 'second_name',
    'users_img'         : 'img',
    'users_description' : 'description',
    'users_short_description' : 'short_description',

    'users_work_activity_city' : 'activity_city',
    'users_stat_qnt_deals'     : 'qnt_deals',
    'users_stat_qnt_services'  : 'qnt_services',

    'review_to_users_summary_summary_rate'             : 'rate',
    'review_to_users_summary_summary_qnt_reviews'      : 'reviews_all',
    'review_to_users_summary_summary_qnt_bad_reviews'  : 'reviews_bad',
    'review_to_users_summary_summary_qnt_good_reviews' : 'reviews_good',

  },

  ITEM_MODEL: {

    'users_id'          : 'id',
    'users_first_name'  : 'first_name',
    'users_last_name'   : 'last_name',
    'users_second_name' : 'second_name',
    'users_birthday'    : 'birthday',
    'users_img'         : 'img_avatar',
    'users_description' : 'description',
    'users_images'      : 'images',
    'users_role_code'   : 'role_code',

    'users_work_activity_city' : 'activity_city',
    'users_stat_qnt_deals'     : 'qnt_deals',
    'users_stat_qnt_services'  : 'qnt_services',

    'review_to_users_summary_summary_rate'             : 'rate',
    'review_to_users_summary_summary_qnt_reviews'      : 'reviews_all',
    'review_to_users_summary_summary_qnt_bad_reviews'  : 'reviews_bad',
    'review_to_users_summary_summary_qnt_good_reviews' : 'reviews_good',

  },


}
