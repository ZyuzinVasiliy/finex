<template lang="pug">
    .popup
        .popup__bg
        .popup__img(:class="{active: flag_img_zoom_open}" @click="closeImgZoom()")
            img.popup__img__src(:src="img_zoom_url")
        .popup__content
            .popup__top
                svg.popup__close(@click="close()")
                    use(xlink:href="@/assets/img/sprite.svg#close")

                div.popup__admin(v-if="user_active__computed === false")
                    svg.popup__admin__icon-info
                        use(xlink:href="@/assets/img/sprite.svg#warning")
                    span.popup__admin__text Пользователь не активирован
                    .btn.btn-blue-gray(@click="setActive()") Активировать

                div.popup__admin(v-if="user_active__computed === true")
                    svg.popup__admin__icon-check
                        use(xlink:href="@/assets/img/sprite.svg#check")
                    span.popup__admin__text.color-green Пользователь активирован

            .person(style="margin-top: 60px")
                .person__head
                    img.person__img(:src="getParam('img_avatar')")
                    .person__info
                        .person__info__head
                            .person__rate
                                | {{getParam('rate') !== null ? getParam('rate') : 0}}
                                svg.person__rate__icon
                                    use(xlink:href="@/assets/img/main.svg#star")
                            .person__info-wrapper
                                .person__info {{getParam('reviews_all') !== null ? getParam('reviews_all') : 0}}
                                    svg.person__info__icon(style="fill: #3B5765;")
                                        use(xlink:href="@/assets/img/main.svg#interface")
                                span.person__info__separator :
                                .person__info {{getParam('reviews_good') !== null ? getParam('reviews_good') : 0}}
                                    svg.person__info__icon(style="fill: #0EC6A5;")
                                        use(xlink:href="@/assets/img/main.svg#good")
                                span.person__info__separator /
                                .person__info {{getParam('reviews_bad') !== null ? getParam('reviews_bad') : 0}}
                                    svg.person__info__icon(style="fill: #C92D49;")
                                        use(xlink:href="@/assets/img/main.svg#bad")
                        .person__description Ипотека / Семейные дела
                        .person__name {{ $helpers.USER_HELPER.getAuthorName(model_user__computed) }}
                        router-link(:to="{name:'admin.users.profile.form', params: {id: getParam('id')}}", class="popup-edit-btn" style="margin-top: 10px; margin-bottom: 10px")
                            svg(class="icon-edit mr-3" style="width: 15px; margin-right: 10px !important")
                                use(xlink:href="@/assets/img/sprite.svg#edit")
                            span(style="font-size: 14px") Редактировать профиль
                        .person__contact-group
                            a.person__contact(href="#")
                                svg.person__contact__icon
                                    use(xlink:href="@/assets/img/main.svg#phone")
                                .person__contact__text +{{getParam('phone')}}
                            a.person__contact(href="#")
                                svg.person__contact__icon
                                    use(xlink:href="@/assets/img/main.svg#mail")
                                .person__contact__text {{getParam('email')}}
                .person-stat-group(style="margin-top: 50px")
                    .person-stat
                        .person-stat__title Сделок
                        .person-stat__value 0
                    .person-stat
                        .person-stat__title Сумма со сделок
                        .person-stat__value 0.00 р
                    .person-stat
                        .person-stat__title Текущий баланс
                        .person-stat__value.color-pink {{getParam('balance')}}

            .section__sub-caption
                .section__sub-caption__name
                    span.nowrap Последние сделки
                .section__sub-caption__line
            .transaction-card-group
                //transaction-card
                | В данный момент сделки отсутствуют
            //a.show-all.show-all--mini(href="#") Смотреть все

</template>

<script>
    import vSelect from 'vue-select';
    import 'vue-select/dist/vue-select.css';

    import prepareErrorFunctions from '@/functions/auth/prepareErrorFunctions'

    export default {
        name: 'component.popup.user_info',
        props: {
            model_user: Object,
        },
        components: {
            vSelect,
        },

        data() {
            return {
                userActive: false,
                flag_img_zoom_open: false,
                img_zoom_url: null,
            }
        },

        computed: {
            model_user__computed() {
                return this.$store.getters['admin.users/GET_ITEM']
            },
            user_active__computed(){
                return this.getParam('flag_active', false);
            }
        },

        methods: {

            async setActive(){

                let user_id = this.getParam('id', null);

                if(user_id != null){

                    let send_date = {
                        user_id: user_id,
                        active: true
                    }

                    // отправляем запрос
                    let responseObj = await this.$store.dispatch('admin.users/SET_ACTIVE_USER', send_date);

                    // проверяем результат запроса
                    if (responseObj.success !== true) {

                        // возникла ошибка
                        let tmp_error = prepareErrorFunctions.prepareError(responseObj)
                        let context = this;

                        await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                        setTimeout(function () {
                            context.$store.dispatch('errors/HIDE_PANEL')
                        }, 5000);

                    } else {
                        await this.$store.dispatch('admin.users/FETCH_ITEM', {user_id: user_id});
                    }

                }

            },

            getParam(param_name, default_val = '-'){
                let result = default_val;
                if(this.model_user__computed != null) {
                    if(this.model_user__computed.hasOwnProperty(param_name)) {
                        if(this.model_user__computed[param_name] != null){
                            result = this.model_user__computed[param_name]
                        }
                    }
                }
                return result;
            },

            async close(){
                this.$emit('popupEvent', false);
                this.imgPopup = false;
            },

        }
    }
</script>

<style lang="scss" scoped>
    .section__sub-caption {
        margin-top: 20px;
    }
    .person-stat {
        color: #3B5765;
    @media (max-width: 991px) {
        width: 50%;
        min-width: 240px;
    &:not(:last-child) {
         margin-bottom: 10px;
     }
    }
    &-group {
         margin-top: 30px;
         display: flex;
         justify-content: space-between;
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
    }
    &__title {
         color: #9F9F9F;
         font-size: 14px;
         margin-bottom: -6px;
     }
    &__value {
         font-size: 36px;
         font-weight: bold;
    @media (max-width: 767px) {
        font-size: 24px;
    }
    }
    }
    .person__contact {
        font-size: 16px;
        font-weight: 400;
        color: #505050;
        display: flex;
        align-items: center;
        text-decoration: none !important;
        transition: .2s ease-out;
    &:hover {
         color: #00a8ff;
     }
    &:not(:last-child) {
         margin-bottom: 5px;
     }
    &-group {
         margin-top: 15px;
     }
    &__icon {
         width: 13px;
         height: 13px;
         fill: #00a8ff;
         margin-right: 16px;
     }
    }
    .person {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 45px;
    &__head {
         display: flex;
    @media (max-width: 991px) {
        display: block;
    }
    }
    &__img {
         width: 340px;
         height: 240px;
         border-radius: 5px;
         margin-right: 35px;
         object-fit: cover;
         object-position: center;
    @media (max-width: 991px) {
        margin-bottom: 20px;
    }
    }
    &__rate {
         display: flex;
         font-size: 16px;
         align-items: center;
         justify-content: center;
         min-width: 66px;
         height: 38px;
         color: #ffffff;
         background: #0ec6a5;
         border-radius: 5px 0;
         z-index: 3;
         margin-right: 10px;
    &__icon {
         margin-bottom: 3px;
         margin-left: 8px;
         width: 13px;
         height: 13px;
         fill: currentColor;
     }
    }
    &__online {
         position: absolute;
         top: 6px;
         right: 7px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         width: 84px;
         height: 24px;
         font-size: 12px;
         color: #0ec6a5;
         padding: 5px 5px 5px 15px;
         background: #ffffff;
         border-radius: 30px;
         z-index: 3;
    &__icon {
         width: 14px;
         height: 14px;
         border-radius: 50%;
         background: currentColor;
         margin-left: 10px;
     }
    }
    &__preview {
         position: relative;
         width: 100%;
         padding-bottom: 77%;
         border-radius: 5px;
         overflow: hidden;
         font-size: 14px;
    &::before {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         display: block;
         width: 100%;
         height: 100%;
         z-index: 2;
         background: linear-gradient(0.33deg, rgba(0, 0, 0, 0.27) 0.62%, rgba(0, 0, 0, 0) 54.38%);
     }
    }
    &__info {
    &__separator {
         display: inline-block;
         margin: 0 6px;
     }
    &__head {
         display: flex;
         align-items: center;
         margin-bottom: 20px;
     }
    &-wrapper {
         z-index: 3;
         width: 100%;
         display: flex;
         align-items: center;
         color: #8DA9C1;
         font-size: 14px;
         padding: 6px 12px;
     }
    &-group {
         display: flex;
         align-items: center;
     }
    &__icon {
         width: 15px;
         height: 15px;
         fill: #ffffff;
         margin-bottom: 6px;
         margin-left: 6px;
    &:not(:last-child) {

     }
    }
    }
    &__content {
         padding: 10px 0 0;
     }
    &__description {
         color: #9F9F9F;
     }
    &__name {
         font-size: 24px;
         font-weight: bold;
         line-height: 27px;
         color: #353535;
    @media (max-width: 767px) {
        margin-top: 5px;
        font-size: 18px;
        line-height: 20px;
    }
    }
    &__line {
         margin: 8px 0 14px;
         width: 100%;
         height: 2px;
         background: #e6eef5;
         border-radius: 3px;
     }
    &__item-group {
         display: flex;
     }
    &__item {
         width: 50%;
    &__value {
         font-size: 24px;
         font-weight: bold;
         color: #3b5765;
     }
    }
    &__icon {
         width: 15px;
         height: 15px;
     }
    }
    a.popup-edit-btn {
        position: relative;
        color: #505050;
        height: 30px;
        display: block;
        font-size: 18px;
        transition: .15s ease-in-out;
    }
    a.popup-edit-btn:hover {
        text-decoration: none;
        color: #00ba61;
    }
    a.popup-edit-btn:hover .icon-edit {
        fill: #00ba61;
    }
    .icon-edit {
        width: 25px;
        height: 25px;
    }
</style>