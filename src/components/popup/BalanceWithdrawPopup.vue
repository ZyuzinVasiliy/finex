<template lang="pug">
    .popup
        .popup__bg
        .popup__content
            svg.popup__close(@click="closePopup()")
                use(xlink:href="@/assets/img/sprite.svg#close")

            .popup__caption Вывести средства

            .bank-card
                .bank-card__item.bank-card--green.bank-card--front
                    .bank-card__wrapper.bank-card__wrapper--wide
                        .bank-card__label
                            svg.bank-card__label__svg.bank-card__label__svg--visa
                                use(xlink:href="@/assets/img/sprite.svg#visa")
                        .bank-card__group
                            input.bank-card__field(type="text" data-idx="1" v-model="model_card_number.block_1" @input="handlerInputChange")
                            input.bank-card__field(type="text" data-idx="2" :class="{ 'disabled':model_card_number.flag_block_2_disabled }" :disabled="model_card_number.flag_block_2_disabled" v-model="model_card_number.block_2" @input="handlerInputChange")
                            input.bank-card__field(type="text" data-idx="3" :class="{ 'disabled':model_card_number.flag_block_3_disabled }" :disabled="model_card_number.flag_block_3_disabled" v-model="model_card_number.block_3" @input="handlerInputChange")
                            input.bank-card__field(type="text" data-idx="4" :class="{ 'disabled':model_card_number.flag_block_4_disabled }" :disabled="model_card_number.flag_block_4_disabled" v-model="model_card_number.block_4" @input="handlerInputChange")
                        .bank-card__group
                            .bank-card__name CARDHOLDER NAME
                .bank-card__item.bank-card--green.bank-card--back
                    .bank-card__line

            .popup-field-and-info
                label.form-group
                    .form-title Сумма (руб)
                    input.form-control.form-control-big(type='text' placeholder='0.00' v-model="model_sum")
                .popup-input-info
                    svg.popup-input-info__icon
                        use(xlink:href="@/assets/img/sprite.svg#info")
                    .popup-input-info__text Возможно взымание коммиссии Вашим банком

            .btn.btn-lg(:class="{ 'disabled':$v.$invalid }", @click="createRequest()") Перевести на карту
</template>

<script>
    // functions
    import prepareErrorFunctions from '../../functions/auth/prepareErrorFunctions'

    // подключаем библиотеку
    import {required, maxLength, minLength} from 'vuelidate/lib/validators';
    const mustBeTrue = (value) => value === true

    export default {
        name: "BalanceWithdrawPopup",
        data() {
            return {
                model_sum: null,
                model_card_number: {
                    card_number: '',
                    block_1: '',
                    block_2: '',
                    block_3: '',
                    block_4: '',
                    flag_block_1_disabled: false,
                    flag_block_2_disabled: true,
                    flag_block_3_disabled: true,
                    flag_block_4_disabled: true,
                },
                create_btn_enable: true,
            }
        },

        // Модель для валидации, которую Vuelidate превратит в computed-поле $v
        validations: {
            // Название поля должно совпадать с полем в data
            model_sum: {
                required,
            },
            model_card_number: {
                card_number: {
                    required,
                    minLength: minLength(16),
                    maxLength: maxLength(16),
                }
            },
            create_btn_enable: {
                mustBeTrue,
            },
        },

        created(){
            setTimeout(function () {
                document.querySelector("input[data-idx='1']").focus();
            }, 200);
        },

        methods: {

            async createRequest() {

                if (this.$v.$invalid) {
                    return false;
                }

                this.create_btn_enable = false;

                let data_obj = {
                    sum: this.model_sum,
                    card_number: this.model_card_number.card_number,
                }
                let response_obj = await this.$store.dispatch('client.balance/CREATE_REQUEST_WITHDRAW', data_obj);

                let timeoutI = null;
                // проверяем результат запроса
                if (response_obj.success !== true) {
                    // возникла ошибка

                    // включаем кнопку обратно
                    this.create_btn_enable = true;

                    // формируем сообщение об ошибке
                    let tmp_error = prepareErrorFunctions.prepareError(response_obj)

                    let context = this;
                    await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                    timeoutI = setTimeout(function () {
                        context.$store.dispatch('errors/HIDE_PANEL')
                    }, 5000);
                }
                else {
                    clearTimeout(timeoutI);
                    // успешно
                    let context = this;
                    let tmp_message = {
                        'text': 'Запрос на вывод средств отправлен администратору',
                        'type': 'SUCCESS'
                    };
                    await context.$store.dispatch('errors/ADD_ITEM', tmp_message);

                    setTimeout(function () {
                        context.$store.dispatch('errors/HIDE_PANEL')
                    }, 5000);

                    this.model_sum = null;
                    this.model_card_number = {
                        card_number: '',
                        block_1: '',
                        block_2: '',
                        block_3: '',
                        block_4: '',
                        flag_block_1_disabled: false,
                        flag_block_2_disabled: true,
                        flag_block_3_disabled: true,
                        flag_block_4_disabled: true,
                    };

                    await this.$store.dispatch('profile/FETCH_PROFILE', {queryParams: {}});
                    this.$emit('closePopup');
                }
            },

            // метод получает модель по idx инпута
            getModelByIdx(input_idx){
                let model = '';
                switch (input_idx) {
                    case '1':
                        model = this.model_card_number.block_1;
                        break;

                    case '2':
                        model = this.model_card_number.block_2;
                        break;

                    case '3':
                        model = this.model_card_number.block_3;
                        break;

                    case '4':
                        model = this.model_card_number.block_4;
                        break;
                }

                return model;
            },

            handlerInputChange(e){

                let input_val = e.currentTarget.value;
                let parsed_number = input_val.replace(/\D/g,'');
                if(parsed_number.length > 4){

                    let parsed_number_ar = parsed_number.split('')
                    parsed_number = [parsed_number_ar[0], parsed_number_ar[1], parsed_number_ar[2], parsed_number_ar[3]].join('');
                }

                let input_idx = e.currentTarget.dataset.idx;
                let model = null;
                switch (input_idx) {
                    case '1':
                        model = this.model_card_number.block_1 = parsed_number;
                        break;

                    case '2':
                        model = this.model_card_number.block_2 = parsed_number;
                        break;

                    case '3':
                        model = this.model_card_number.block_3 = parsed_number;
                        break;

                    case '4':
                        model = this.model_card_number.block_4 = parsed_number;
                        break;
                }

                model = parsed_number;

                if(this.model_card_number.block_1.length == 0){
                    this.model_card_number.flag_block_2_disabled = true;
                }
                if(this.model_card_number.block_2.length == 0){
                    this.model_card_number.flag_block_3_disabled = true;
                }
                if(this.model_card_number.block_3.length == 0){
                    this.model_card_number.flag_block_4_disabled = true;
                }

                this.model_card_number.card_number = [this.model_card_number.block_1, this.model_card_number.block_2, this.model_card_number.block_3, this.model_card_number.block_4].join('');

                let number_ar = this.model_card_number.card_number.split('')

                // let block_number = 1;
                // let number_count = 1;
                // let new_number_block_val = {
                //     1: '',
                //     2: '',
                //     3: '',
                //     4: '',
                // }
                // for(let number_k in number_ar){
                //     if(number_count > 4){
                //         block_number++;
                //         number_count = 1;
                //     }
                //
                //     if(block_number > 4){
                //         break;
                //     }
                //
                //     new_number_block_val[block_number] += number_ar[number_k];
                //
                //     number_count++;
                // }
                //
                //
                // this.model_card_number.block_1 = new_number_block_val[1];
                // this.model_card_number.block_2 = new_number_block_val[2];
                // this.model_card_number.block_3 = new_number_block_val[3];
                // this.model_card_number.block_4 = new_number_block_val[4];

                // отключаем input
                if(this.model_card_number.block_1.length == 0 && this.model_card_number.block_2.length == 0){
                    this.model_card_number.flag_block_2_disabled = true;
                }
                if(this.model_card_number.block_2.length == 0 && this.model_card_number.block_3.length == 0){
                    this.model_card_number.flag_block_3_disabled = true;
                }
                if(this.model_card_number.block_3.length == 0 && this.model_card_number.block_4.length == 0){
                    this.model_card_number.flag_block_4_disabled = true;
                }

                // меняем фокус в input
                if(this.model_card_number.block_1.length == 4){
                    this.model_card_number.flag_block_2_disabled = false;

                    // if(this.model_card_number.block_2.length == 0){
                    //     setTimeout(function () {
                    //         document.querySelector("input[data-idx='2']").focus();
                    //     }, 100);
                    // }
                }
                if(this.model_card_number.block_2.length == 4){
                    this.model_card_number.flag_block_3_disabled = false;

                    // if(this.model_card_number.block_3.length == 0){
                    //     setTimeout(function () {
                    //         document.querySelector("input[data-idx='3']").focus();
                    //     }, 100);
                    // }
                }
                if(this.model_card_number.block_3.length == 4){
                    this.model_card_number.flag_block_4_disabled = false;

                    // if(this.model_card_number.block_4.length == 0){
                    //     setTimeout(function () {
                    //         document.querySelector("input[data-idx='4']").focus();
                    //     }, 100);
                    // }
                }

            },

            async closePopup() {
                this.$emit('closePopup')
            },
        },
    }
</script>

<style lang="scss" scoped>
    .form-group, .btn-lg {
        width: 300px;
        @media (max-width: 575px) {
            width: 100%;
        }
    }
    .bank-card__field:not(:disabled):focus {
        border: 2px solid #ffffff;
    }
</style>