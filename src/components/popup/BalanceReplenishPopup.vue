<template lang="pug">
    .popup
        .popup__bg
        .popup__content
            svg.popup__close(@click="closePopup()")
                use(xlink:href="@/assets/img/sprite.svg#close")
            .popup__caption Пополнить баланс

            .bank-card
                .bank-card__item.bank-card--violet.bank-card--front
                    .bank-card__wrapper.bank-card__wrapper--wide
                        .bank-card__label
                            svg.bank-card__label__svg.bank-card__label__svg--visa
                                use(xlink:href="@/assets/img/sprite.svg#visa")
                        .bank-card__group
                            input.bank-card__field(type="text" value="8888")
                            input.bank-card__field(type="text" value="8888")
                            input.bank-card__field(type="text" value="8888")
                            input.bank-card__field(type="text" value="8888")
                        .bank-card__group
                            input.bank-card__field.bank-card__field--long(type="text" value="IVAN IVANOV")
                            input.bank-card__field(type="text" value="04/21")
                .bank-card__item.bank-card--violet.bank-card--back
                    .bank-card__line
                    .bank-card__wrapper.bank-card__wrapper--narrow
                        .bank-card__group
                            input.bank-card__field(type="text" value="777")

            .popup-field-and-info
                label.form-group
                    .form-title Сумма (руб)
                    input.form-control.form-control-big(type='text' placeholder='0.00' v-model="model_sum")
                .popup-input-info
                    svg.popup-input-info__icon
                        use(xlink:href="@/assets/img/sprite.svg#info")
                    .popup-input-info__text Возможно взымание коммиссии Вашим банком

            .btn.btn-lg(:class="{ 'disabled':$v.$invalid }", @click="createRequest()") Оплатить
</template>

<script>
    // functions
    import prepareErrorFunctions from '../../functions/auth/prepareErrorFunctions'

    // подключаем библиотеку
    import {required} from 'vuelidate/lib/validators';
    const mustBeTrue = (value) => value === true;

    export default {
        name: "BalanceReplenishPopup",
        data() {
            return {
                model_sum: null,
                create_btn_enable: true
            }
        },

        // Модель для валидации, которую Vuelidate превратит в computed-поле $v
        validations: {
            // Название поля должно совпадать с полем в data
            model_sum: {
                required,
            },
            create_btn_enable: {
                mustBeTrue,
            },
        },

        methods: {
            async createRequest() {

                if (this.$v.$invalid) {
                    return false;
                }

                this.create_btn_enable = false;
                let response_obj = await this.$store.dispatch('client.balance/CREATE_REQUEST_REPLENISH', {sum: this.model_sum});

                // проверяем результат запроса
                if (response_obj.success !== true || response_obj.callbackUrl == null) {
                    // возникла ошибка

                    // включаем кнопку обратно
                    this.create_btn_enable = true;

                    // формируем сообщение об ошибке
                    let tmp_error = prepareErrorFunctions.prepareError(response_obj)

                    let context = this;
                    await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                    setTimeout(function () {
                        context.$store.dispatch('errors/HIDE_PANEL')
                    }, 5000);
                }
                else {
                    // успешно
                    let context = this;
                    let tmp_message = {
                        //'text': 'Переадресация для оплаты',
                        'text': 'Баланс пополнен',
                        'type': 'SUCCESS'
                    };
                    await context.$store.dispatch('errors/ADD_ITEM', tmp_message);

                    setTimeout(function () {
                        context.$store.dispatch('errors/HIDE_PANEL')
                    }, 5000);

                    let url = response_obj.callbackUrl;

                    this.model_sum = null;
                    await this.$store.dispatch('profile/FETCH_PROFILE', {queryParams: {}});
                    this.closePopup();
                    //window.location.replace(url);
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
</style>