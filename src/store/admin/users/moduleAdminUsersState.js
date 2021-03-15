/**
 * переменные state текущего модуля
 * state должен меняться только через мутации, а мутации можно вызывать только через dispatch
 * таким образом получается схема dispatch -> mutation -> state -> getter
 */

export default {

  ITEMS: [],

  ITEM: {
    id: null,
    first_name: null,
    second_name: null,
    last_name: null,
    img_avatar: null,
    birthday: null,
    place_birth: null,
    email: null,
    password: null,
    qnt_bad_reviews: null,
    qnt_good_reviews: null,
    qnt_reviews: null,
    rate: null,
    balance: null
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

  ITEM_MODEL: {
    'users_id': 'id',
    'users_first_name': 'first_name',
    'users_second_name': 'second_name',
    'users_last_name': 'last_name',
    'users_img': 'img_avatar',
    'users_birthday': 'birthday',
    'users_phone': 'phone',
    'users_email': 'email',
    'users_flag_active': 'flag_active',
    'review_to_users_summary_summary_qnt_bad_reviews': 'qnt_bad_reviews',
    'review_to_users_summary_summary_qnt_good_reviews': 'qnt_good_reviews',
    'review_to_users_summary_summary_qnt_reviews': 'qnt_reviews',
    'review_to_users_summary_summary_rate': 'rate',
    'users_balance' : 'balance'
  },

}
