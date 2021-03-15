<template>
    <div class="panel panel__cart" v-if="itemsInCart_count__computed > 0">
        <div class="container">
            <div class="col-12">

                <template v-if="$route.name === 'main.index' || $route.name === 'main.service' || $route.name === 'main.service.myOrder'">
                    <div class="panel__content">
                        <div class="panel__info">Выбрано<span class="panel__count">{{ preparePrice(itemsInCart_count__computed) }}</span>услуг<span class="panel__value">на {{ preparePrice(itemsInCart_total_sum__computed) }} р</span></div>
                        <router-link :to="{ name: 'main.service.completeOrder' }" :class="'btn btn-lg btn-accent'">Заказать услуги</router-link>
                    </div>
                </template>

                <template v-else-if="$route.name === 'main.service.completeOrder'">
                    <div class="panel__content">
                        <div class="panel__info">Итого:<span class="panel__value">на {{ preparePrice(itemsInCart_total_sum__computed) }} р</span></div>
                        <label class="custom-control custom-checkbox mb-4 mt-2">
                            <input class="custom-control-input" type="checkbox" v-model="accept_user_agreement">
                            <div class="custom-control-label">Я ознакомился и согласен с договором
                                <a target="_blank" class="link" href="https://finexpert.online/src/pdf/public_offer.pdf">публичной оферты</a>
                            </div>
                        </label>
                        <div :class="{ 'disabled':(create_btn_enable === false) || $v.$invalid }" :disabled="(create_btn_enable === false) || $v.$invalid" class="btn btn-lg btn-accent" @click="createOrder()">Заказать услуги</div>
                    </div>
                </template>

            </div>
        </div>
    </div>
</template>

<script>

    import {sameAs, email, numeric, minLength, maxLength} from 'vuelidate/lib/validators';

    const mustBeTrue = (value) => value === true

    export default {
        name: 'component.template.panel',
        props: {

        },
        validations: {
            accept_user_agreement: {
                mustBeTrue,
            },
        },

        data() {
            return {
                create_btn_enable: true,
                accept_user_agreement: false,
            }
        },

        computed: {
            itemsInCart_count__computed() {
                let items_count = this.$store.getters['cart/GET_TOTAL_COUNT'];
                return parseInt(items_count);
            },
            itemsInCart_total_sum__computed() {
                let items_count = this.$store.getters['cart/GET_TOTAL_SUM'];
                return parseInt(items_count);
            },
        },

        methods: {

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
                let create_result = await this.$store.dispatch('order/CREATE_ORDER', {items_in_cart: this.$store.getters['cart/GET_ITEMS']});


                if (create_result.success === true) {
                    await this.$store.dispatch('cart/CLEAR_CART');

                    this.create_btn_enable = true;

                    let url = null;
                    let result_data = create_result.getAttr('data');
                    if(result_data != null){
                        if(result_data.hasOwnProperty('redirect_url')){
                            url = result_data['redirect_url'];
                        }
                    }

                    let flag_need_redirect = null;
                    if(result_data != null){
                        if(result_data.hasOwnProperty('flag_need_redirect')){
                            flag_need_redirect = result_data['flag_need_redirect'];
                        }
                    }

                    if(url == null){
                        console.log('===== INTERNAL ERROR NO URL =====');

                        // возникла ошибка
                        let tmp_error = {
                            'text': 'Возникла ошибка при создании заказа',
                            'type': 'ERROR'
                        };

                        let context = this;
                        await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                        setTimeout(function () {
                            context.$store.dispatch('errors/HIDE_PANEL')
                        }, 5000);
                    }
                    else if(flag_need_redirect != null && flag_need_redirect == false) {
                        // если нет ошибки
                        let tmp_error = {
                            'text': 'Заказ успешно создан',
                            'type': 'SUCCESS'
                        };

                        let context = this;
                        await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                        await this.$router.push({name: 'main.service.myOrder'});
                        setTimeout(function () {
                            context.$store.dispatch('errors/HIDE_PANEL')
                        }, 5000);
                    }
                    else {
                        // если нет ошибки
                        let tmp_error = {
                            'text': 'Заказ успешно создан, переход к оплате',
                            'type': 'SUCCESS'
                        };

                        let context = this;
                        await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                        window.location.replace(url);
                    }

                }
                else{
                    console.log('===== HAS_ERROR =====');

                    this.create_btn_enable = true;

                    // возникла ошибка
                    let tmp_error = {
                        'text': 'Возникла ошибка при создании заказа',
                        'type': 'ERROR'
                    };

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