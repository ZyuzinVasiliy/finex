/**
 * переменные state текущего модуля
 * state должен меняться только через мутации, а мутации можно вызывать только через dispatch
 * таким образом получается схема dispatch -> mutation -> state -> getter
 */

export default {

    flag_open: false,
    data: {
        id: null,
        name: null,
        color: '#0ec6a5',
        icon: '#business',
    },

    ITEM_MODEL: {
        id: null,
        name: null,
        color: '#0ec6a5',
        icon: '#business',
    }

}
