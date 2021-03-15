<template lang="pug">
    .panel(v-if="itemsInCart_count__computed > 0 && checkRoute()")
        .container
            .col-12
                .panel__content
                    .panel__info
                        = 'Выставлено счетов на: '
                        span.panel__value на {{ preparePrice(itemsInCart_total_sum__computed) }} р

                    template(v-if="$route.name === 'admin.orders.index'")
                        router-link(class="btn btn-lg btn-accent", :to="'/admin/orders/complete'")
                            | Выставить счета
                    template(v-else)
                        button.btn.btn-lg.btn-accent(:class="{ 'disabled':(create_btn_enable === false) }", :disabled="(create_btn_enable === false)", @click="createOrder")
                            | Выставить счета
</template>

<script>

    import prepareErrorFunctions from '@/functions/auth/prepareErrorFunctions'

    export default {
        name: 'component.template.admin.orderCartPanel',
        props: {

        },

        data() {
            return {
                create_btn_enable: true,
            }
        },

        computed: {
            itemsInCart_count__computed() {
                let items_count = this.$store.getters['admin.order_cart/GET_TOTAL_COUNT'];
                return parseInt(items_count);
            },
            itemsInCart_total_sum__computed() {
                let items_count = this.$store.getters['admin.order_cart/GET_TOTAL_SUM'];
                return parseInt(items_count);
            },
        },

        methods: {

            ///
            ///
            ///
            checkRoute(){
              let result = false;

              if(this.$route.name === 'admin.orders.index' || this.$route.name === 'admin.orders.complete') {
                  result = true;
              }

              return result;
            },

            preparePrice(price_value){
                let result_price = 0;
                let parts = price_value.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                result_price = parts.join(".");
                if(typeof parts[1] != 'undefined'){
                    if(parseInt(parts[1]) === 0){
                        result_price = parts[0];
                    }
                }

                return result_price;
            },

            async createOrder() {

                if(this.create_btn_enable === false){
                    return;
                }

                this.create_btn_enable = false;
                let response_obj = await this.$store.dispatch('admin.orders/CREATE_ORDER', {items_in_cart: this.$store.getters['admin.order_cart/GET_ITEMS']});


                console.log('======response_obj===============');
                console.log(response_obj)

                if (response_obj.success === true) {
                    await this.$store.dispatch('admin.order_cart/CLEAR_CART');


                    // если нет ошибки
                    let tmp_error = {
                        'text': 'Новые счета успешно созданы',
                        'type': 'SUCCESS'
                    };

                    let context = this;
                    await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                    setTimeout(function () {
                        context.$store.dispatch('errors/HIDE_PANEL')
                    }, 5000);

                    this.create_btn_enable = true;
                    await this.$router.push({name: 'admin.orders.index'});

                }
                else{
                    this.create_btn_enable = true;

                    // возникла ошибка
                    let tmp_error = prepareErrorFunctions.prepareError(response_obj)

                    let context = this;
                    await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                    setTimeout(function () {
                        context.$store.dispatch('errors/HIDE_PANEL')
                    }, 5000);
                }
            },
        }
    }
</script>