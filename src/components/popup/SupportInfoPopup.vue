<template lang="pug">
    .popup
        .popup__bg
        .popup__img(:class="{active: imgPopup}" @click="imgPopup=false")
            img.popup__img__src(src="~@/assets/img/bg.jpg")
        .popup__content
            .popup__top
                svg.popup__close(@click="close()")
                    use(xlink:href="@/assets/img/sprite.svg#close")
                div(v-if="type=='admin'")
                    div.popup__admin(v-if="userActive===false")
                        svg.popup__admin__icon-info
                            use(xlink:href="@/assets/img/sprite.svg#warning")
                        span.popup__admin__text Пользователь не активирован
                        .btn.btn-blue-gray(@click="userActive=true") Активировать
                    div.popup__admin(v-if="userActive===true")
                        svg.popup__admin__icon-check
                            use(xlink:href="@/assets/img/sprite.svg#check")
                        span.popup__admin__text.color-green Пользователь активирован
            .popup__caption Юрий Александрович Жуков
            .data.mb-4
                .data-title Название учебного заведения
                .data-value 01.01.2020
            .popup__subcaption.mb-3 Паспортные данные
            .data-row-4
                .data.mb-4
                    .data-title Серия
                    .data-value 3466
                .data.mb-4
                    .data-title Номер
                    .data-value 445445
                .data.mb-4
                    .data-title Дата выдачи
                    .data-value 02.02.2020
                .data.mb-4
                    .data-title Код подразделения
                    .data-value 555 - 555
            .data.mb-4
                .data-title Выдан
                .data-value Отделением УФМС Ленинского района города Великого Новгорода Новгородской области
            .data.mb-4
                .data-title Адрес регистрации
                .data-value Отделением УФМС Ленинского района города Великого Новгорода Новгородской области
            .data-row-2
                .data.mb-4
                    .data-title ИНН
                    .data-value 9999988888889999
                .data.mb-4
                    .data-title СНИЛС
                    .data-value 786 - 35 - 987
            .data
                .data-title Фото документов
                .mt-1
                    .file(@click="imgPopup=true").open
                        img.file__img(src="~@/assets/img/bg.jpg")
                    .file(@click="imgPopup=true")
                        img.file__img(src="~@/assets/img/bg.jpg")
                    .file-decor
                    .file(@click="imgPopup=true")
                        img.file__img(src="~@/assets/img/bg.jpg")
                    .file-decor
                    .file(@click="imgPopup=true")
                        img.file__img(src="~@/assets/img/bg.jpg")

</template>

<script>
    import vSelect from 'vue-select';
    import 'vue-select/dist/vue-select.css';

    export default {
        name: 'component.popup.support',
        props: {
            type: {
                type: String,
                default: 'default'
            },

            // props for admin
            userActive: {
                type: Boolean,
                default: false
            }

        },
        components: {
            vSelect,
        },
        data() {
            return {
                activeSection: 'consultation',
                orders: [
                    'Заказ №245-657 от 25.05.2020',
                    'Заказ №245-658 от 25.05.2020',
                    'Заказ №245-659 от 25.05.2020',
                    'Заказ №245-660 от 25.05.2020',
                ],
                imgPopup: false,
            }
        },


        methods: {

            async close() {
                this.$emit('popupEvent', false);
                this.imgPopup = false;
            },
        }
    }
</script>