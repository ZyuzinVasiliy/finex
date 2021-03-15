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
    'news_id': null,
    'news_title': null,
    'news_description': null,
    'news_short_description': null,
    'news_published_at': null,
    'users_id': null,
    'users_first_name': null,
    'users_last_name': null,
    'users_second_name': null,
    'users_img': null,
    'images': [],
    'news_categories_id': null,
    'news_categories_name': null,
    'news_categories_color': null,
    'news_categories_icon': null,
    'news_qnt_views': null,
  },

  ITEMS_MODEL: {
    'news_id': 'news_id',
    'news_title': 'news_title',
    'news_description': 'news_description',
    'news_short_description': 'news_short_description',
    'news_published_at': 'news_published_at',
    'users_id': 'users_id',
    'users_first_name': 'users_first_name',
    'users_last_name': 'users_last_name',
    'users_second_name': 'users_second_name',
    'users_img': 'users_img',
    'images': 'images',
    'news_categories_id': 'news_categories_id',
    'news_categories_name': 'news_categories_name',
    'news_categories_color': 'news_categories_color',
    'news_categories_icon': 'news_categories_icon',
    'news_qnt_views': 'news_qnt_views',
  },

  ITEM_MODEL: {
    'news_id': 'news_id',
    'news_title': 'news_title',
    'news_description': 'news_description',
    'news_short_description': 'news_short_description',
    'news_published_at': 'news_published_at',
    'users_id': 'users_id',
    'users_first_name': 'users_first_name',
    'users_last_name': 'users_last_name',
    'users_second_name': 'users_second_name',
    'users_img': 'users_img',
    'images': 'images',
    'news_categories_id': 'news_categories_id',
    'news_categories_name': 'news_categories_name',
    'news_categories_color': 'news_categories_color',
    'news_categories_icon': 'news_categories_icon',
    'news_qnt_views': 'news_qnt_views',
  },

  ITEM_SERIALIZER: {
    'news_id': 'news_id',
    'title': 'title',
    'category': 'category_id',
    'published_at': 'published_at',
    'short_description': 'short_description',
    'description': 'description',
  },

}
