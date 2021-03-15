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

  CATEGORIES: [],

  DEFAULT_FIELDS: [
    "Имя",
    "Фамилия",
    "Отчество",
    "Дата рождения",
    "Город"
  ],

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

  ITEM: {
    'id': null,
    'name': null,
    'description': null,
    'short_description': null,
    'price': null,
    'prepayment_sum': null,
    'price_text': '',
    'full_price': null,
    'additional_fields': [],
    'default_fields': [],
    'services_payment_method': null,
    'services_categories_id': null,
    'service_categories_name': null,
    'service_categories_icon': null,
    'service_categories_color': null,

    'services_classes_id': null,
    'services_classes_name': null,

    'users_first_name': null,
    'users_last_name': null,
    'users_img': null,
    'review_to_users_summary_summary_rate': 0,
  },
  ITEMS_MODEL: {
    'services_id': 'services_id',
    'services_name': 'services_name',
    'services_description': 'services_description',
    'services_short_description': 'services_short_description',
    'services_price': 'services_price',
    'services_prepayment_sum': 'services_prepayment_sum',
    'services_price_text': 'services_price_text',
    'services_full_price': 'services_full_price',
    'services_payment_method': 'services_payment_method',
    'services_categories_id': 'services_categories_id',
    'service_categories_name': 'service_categories_name',
    'service_categories_icon': 'service_categories_icon',
    'service_categories_color': 'service_categories_color',

    'services_classes_id': 'services_classes_id',
    'services_classes_name': 'services_classes_name',

    'users_first_name': 'users_first_name',
    'users_last_name': 'users_last_name',
    'users_img': 'users_img',
    'review_to_users_summary_summary_rate': 'review_to_users_summary_summary_rate',
  },
  CATEGORIES_MODEL: {
    'id': 'id',
    'code': 'code',
    'name': 'label',
  },
  ITEM_MODEL: {
    'services_id': 'service_id',
    'services_name': 'service_name',
    'services_description': 'service_description',
    'services_short_description': 'service_short_description',
    'services_price': 'service_price',
    'services_prepayment_sum': 'service_prepayment_sum',
    'services_price_text': 'service_price_text',
    'services_full_price': 'service_full_price',
    'services_additional_fields': 'additional_fields',
    'services_default_fields': 'default_fields',
    'services_payment_method': 'service_payment_method',
    'services_categories_id': 'service_categories_id',
    'service_categories_name': 'service_categories_name',
    'service_categories_icon': 'service_categories_icon',
    'service_categories_color': 'service_categories_color',

    'services_classes_id': 'service_classes_id',
    'services_classes_name': 'service_classes_name',

    'users_first_name': 'users_first_name',
    'users_last_name': 'users_last_name',
    'users_img': 'users_img',
    'review_to_users_summary_summary_rate': 'review_to_users_summary_summary_rate',
  },

  ITEM_SERIALIZER: {
    'name': 'name',
    'description': 'service_description',
    'short_description': 'service_short_description',
    'price': 'price',
    'prepayment_sum': 'prepayment_sum',
    'full_price': 'full_price',
    'price_text': 'price_text',
    'service_classes_id': 'service_classes_id',
    'additional_fields': 'additional_fields',
    'default_fields': 'default_fields',
    'payment_method': 'payment_method',
    'category_id': 'category_id',
  },
}
