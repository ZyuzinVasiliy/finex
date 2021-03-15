<template lang="pug">
    .popup
        .popup__bg
        .popup__content
            svg.popup__close(@click="close()")
                use(xlink:href="@/assets/img/sprite.svg#close")
            .popup__caption По какому вопросу хотите обратиться?
            .w-450
                .radio-group.mb-4
                    .radio(:class="{active: activeSection === 'consultation'}" @click="selectRadioBtn('consultation')")
                        | Консультация и помощь
                    .radio(:class="{active: activeSection === 'payback'}" @click="selectRadioBtn('payback')")
                        | Возврат средств

                transition(name="slide-fade-new")
                    div(v-if="activeSection === 'consultation'")
                        label.form-group
                            .form-title Тема обращения
                            input.form-control(type='text', placeholder='', v-model='subject')
                        label.form-group
                            .form-title Причина обращения
                            textarea.form-control(v-model='descriptions')
                transition(name="slide-fade-new")
                    div(v-if="activeSection === 'payback'")
                        label.form-group
                            .form-title Заказ
                            //v-select(:options='profile_data.personal.place_birth')
                            v-select(:options='orders', v-model='model_order')
                        template(v-if="model_order != null")
                            .popup-flex-caption
                                span Услуги заказа:
                                template(v-if="model_order_items.length > 0")
                                    span.color-accent Выбрано {{ model_order_items.length }} на {{ calcServiceSum(model_order_items) }} руб
                                template(v-if="model_order_items.length === 0")
                                    span.color-accent Выбрано 0
                            .popup-scroll.mt-4
                                .popup-service(v-for="(order_item, vKey) in order_items[model_order['value']]['all_items']")
                                    label.custom-control.custom-checkbox.mb-4.mt-2(v-bind:key="vKey")
                                        input.custom-control-input(type='checkbox', :value="order_item['order_items_id']", v-model="model_order_items")
                                        .custom-control-label.fz-14.font-weight-light.mb-2 {{ order_item['services_name'] }}
                                        .d-flex.color-else-active
                                            .w-50p.mr-2.color-else-active {{ preparePrice(order_item['order_items_price']) }} руб
                                            .w-50p.mr-2 x{{ order_item['order_items_count'] }}
                        label.form-group
                            .form-title Причина обращения
                            textarea.form-control(v-model='descriptions')

                .btn.mt-5(:disabled="!validateForm()" :class='{"disabled":!validateForm()}', v-on:click="createRequest()") Далее
</template>

<script>
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css';

    // functions
    import redirectFunctions from '../../functions/http/redirectFunctions'
    import prepareErrorFunctions from '../../functions/auth/prepareErrorFunctions'

    //
    //import dateHelper from '@/functions/helpers/dateHelper'
    //import moneyHelper from '@/functions/helpers/moneyHelper'

    export default {
        name: 'component.popup.support',
        props: [],
        components: {
            vSelect,
        },
        data() {
            return {
                activeSection: 'consultation',
                subject: null,
                descriptions: null,
                orders: [],
                model_order: null,
                order_items: [],
                flag_order_fetch: false,
                model_order_items: [],
                flag_send_btn_disabled: false
            }
        },

        methods: {

            async close() {
                this.$emit('popupEvent', false)
            },

            async selectRadioBtn(radio_btn_type) {

                if (this.flag_order_fetch === false && radio_btn_type === 'payback') {
                    await this.$store.dispatch('order/FETCH_LIST', {});
                    this.flag_order_fetch = true;

                    this.orders = this.$store.getters['order/GET_ITEMS__FOR_OPTIONS'];
                    this.order_items = this.$store.getters['order/GET_ITEMS__GROUPED'];
                }

                this.activeSection = radio_btn_type;
            },

            preparePrice(price_value) {
                let result_price = 0;
                let parts = price_value.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                result_price = parts.join(".");
                if (typeof parts[1] != 'undefined') {
                    if (parseInt(parts[1]) === 0) {
                        result_price = parts[0];
                    }
                }

                return result_price;
            },

            calcServiceSum(model_order_items){
                let service_sum = 0;

                if(this.model_order != null){

                    let order_items = [];
                    if(this.order_items.hasOwnProperty(this.model_order['value'])){
                        let order_items = this.order_items[this.model_order['value']]['all_items'];

                        for(let key in order_items){
                            service_sum += parseInt(order_items[key]['order_items_total_sum_by_item']);
                        }
                    }

                }

                return this.preparePrice(service_sum);
            },

            validateForm(){
                let result = true;

                switch (this.activeSection) {
                    case 'consultation':
                        if(this.subject == null || this.descriptions === null){
                            result = false;
                        }
                        break;

                    case 'payback':

                        if(this.model_order == null || this.descriptions === null || this.model_order_items.length === 0){
                            result = false;
                        }
                        break;
                }

                if(this.flag_send_btn_disabled === true){
                    result = false;
                }

                return result;
            },

            async createRequest() {

                if (this.validateForm() === false) {
                    return false;
                }

                let type_code = '';
                let send_date = {};
                switch (this.activeSection) {
                    case 'consultation':
                        type_code = 'CONSULTATION';

                        send_date = {
                            type_code: type_code,
                            subject: this.subject,
                            descriptions: this.descriptions,
                        }
                        break;

                    case 'payback':
                        type_code = 'REFUND';

                        send_date = {
                            type_code: type_code,
                            descriptions: this.descriptions,
                            order_id: this.model_order['value'],
                            order_item_id: this.model_order_items,
                        }
                        break;
                }

                // отключаем кнопку
                this.flag_send_btn_disabled = true;

                // отправляем запрос
                let responseObj = await this.$store.dispatch('request/CREATE_REQUEST', send_date);

                // проверяем результат запроса
                if (responseObj.success !== true) {
                    // возникла ошибка
                    let tmp_error = prepareErrorFunctions.prepareError(responseObj)

                    let context = this;
                    await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                    setTimeout(function () {
                        context.$store.dispatch('errors/HIDE_PANEL')
                    }, 5000);


                    // включаем кнопку
                    this.flag_send_btn_disabled = false

                }
                else {
                    // успешно
                    await this.$store.dispatch('request/FETCH_LIST', {});
                    this.close();
                    //redirectFunctions.redirect(this.$router, this.$store, responseObj.callbackUrl);

                    // Нет ошибок
                    let tmp_error = {
                        'text': 'Заявка успешно создана',
                        'type': 'SUCCESS'
                    };

                    let context = this;
                    await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                    setTimeout(function () {
                        context.$store.dispatch('errors/HIDE_PANEL')
                    }, 5000);


                    // включаем кнопку
                    this.flag_send_btn_disabled = false;
                    this.activeSection = 'consultation';
                    this.subject = null;
                    this.descriptions = null;
                    this.orders = [];
                    this.model_order = null;
                    this.order_items = [];
                    this.flag_order_fetch = false;
                    this.model_order_items = [];

                    setTimeout(function () {
                        document.querySelector('.popup .popup__content').scrollTo(500, 0);
                    }, 2000);
                }
            }
        }
    }
</script>