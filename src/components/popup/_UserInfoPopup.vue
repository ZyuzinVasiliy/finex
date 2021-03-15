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

            div.mt-5.mb-4
                router-link(:to="'/admin/users/edit-profile/' + getParam('id')", class="popup-edit-btn")
                    svg.icon-edit.mr-3
                        use(xlink:href="@/assets/img/sprite.svg#edit")
                    span Редактировать профиль

            .popup__caption.mt-2 {{ $helpers.USER_HELPER.getAuthorName(model_user__computed) }}



            .data.mb-4
                .data-title Дата рождения
                .data-value {{ $helpers.DATE_HELPER.formatDate(getParam('birthday', null)) }}
            .popup__subcaption.mb-3 Паспортные данные
            .data-row-4
                .data.mb-4
                    .data-title Серия
                    .data-value {{ getParam('passport_series') }}
                .data.mb-4
                    .data-title Номер
                    .data-value {{ getParam('passport_number') }}
                .data.mb-4
                    .data-title Дата выдачи
                    .data-value {{ $helpers.DATE_HELPER.formatDate(getParam('passport_issued_date', null)) }}
                .data.mb-4
                    .data-title Код подразделения
                    .data-value {{ getParam('passport_issued_dept_code') }}
            .data.mb-4
                .data-title Выдан
                .data-value {{ getParam('passport_issued_by') }}
            .data.mb-4
                .data-title Адрес регистрации
                .data-value {{ getParam('passport_registration_address') }}
            .data-row-2
                .data.mb-4
                    .data-title ИНН
                    .data-value {{ getParam('inn') }}
                .data.mb-4
                    .data-title СНИЛС
                    .data-value {{ getParam('snils') }}
            .data
                .data-title Фото документов
                .mt-1
                    .file(@click="openImgZoom(getImg('passport_img_1'))")
                        img.file__img(:src="getImg('passport_img_1')" v-if="getImg('passport_img_1') != null")
                    .file(@click="openImgZoom(getImg('passport_img_2'))")
                        img.file__img(:src="getImg('passport_img_2')" v-if="getImg('passport_img_2') != null")
                    .file-decor
                    .file(@click="openImgZoom(getImg('inn_img'))")
                        img.file__img(:src="getImg('inn_img')" v-if="getImg('inn_img') != null")
                    .file-decor
                    .file(@click="openImgZoom(getImg('snils_img'))")
                        img.file__img(:src="getImg('snils_img')" v-if="getImg('snils_img') != null")

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
                    }
                    else {
                        await this.$store.dispatch('admin.users/FETCH_ITEM', {user_id: user_id});
                        // успешно
                        // this.model_user = this.$store.getters['admin.users/GET_ITEM']
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

            getImg(img_name){
                let result = null;

                if(this.model_user__computed != null) {
                    if(this.model_user__computed.hasOwnProperty(img_name)) {
                        if(this.model_user__computed[img_name] != null){
                            result = this.model_user__computed[img_name]
                        }
                    }
                }

                return result;
            },

            openImgZoom(img){
                if(img != null){
                    this.img_zoom_url = img
                    this.flag_img_zoom_open = true;
                }
            },
            closeImgZoom(){
                this.flag_img_zoom_open = false;
            },

            async close(){
                this.$emit('popupEvent', false);
                this.imgPopup = false;
            },
        }
    }
</script>

<style scoped>
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