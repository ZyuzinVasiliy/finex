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
    "id": null,
    "name": null,
    "show": false,
    "descriptions": null,
  },

  ITEM_MODEL: {
    "from_user_first_name": "from_user_first_name",
    "from_user_first_id": "from_user_first_id",
    "review_to_users_created_at": "review_to_users_created_at",
    "review_to_users_descriptions": "review_to_users_descriptions",
    "review_to_users_id": "review_to_users_id",
    "review_to_users_rate": "review_to_users_rate",
    "review_to_users_type_review": "review_to_users_type_review",
    "review_to_users_updated_at": "review_to_users_updated_at",
    "to_user_id": "to_user_id",
    "to_user_first_name": "to_user_first_name",
    "to_user_second_name": "to_user_second_name",
    "to_user_last_name": "to_user_last_name",
  },

  ITEM_SERIALIZER: {

  },
}
