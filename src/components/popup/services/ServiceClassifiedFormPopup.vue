<template lang="pug">
    .popup(:class="{ 'active':flag_open__computed }")
        .popup__bg
        .popup__content
            svg.popup__close(@click="close()")
                use(xlink:href="@/assets/img/sprite.svg#close")

            .popup__caption.mb-3(style="margin-bottom: 60px") {{ getPopupTitle() }}
            label.form-group
                .form-title Название класса
                    span.required-text *
                input.form-control(type='text' placeholder='Введите название класса улсуг' v-model="model.name")

            label.form-group
                .form-title Категория услуг
                    span.required-text *
                v-select(:options='categories__computed' v-model='model.category' v-on:input="handleSelect($event)" placeholder="Выберите из списка категорию")

            label.form-group
                .form-title Краткое описание класса услуг
                    span.required-text *
                textarea.form-control(placeholder='Введите краткое описание класса услуг' v-model='model.short_description')

            label.form-group
                .form-title Полное описание класса услуг
                    span.required-text *
                textarea.form-control(placeholder='Опишите данный класс услуг' v-model='model.description')

            //.section__sub-caption
                .section__sub-caption__name
                    span.nowrap Доступны после прохождения курсов
                .section__sub-caption__line
            //.popup-flex.mt-4
                v-select()
                .btn.btn-light-gray
                    .btn__icon-plus
                    | Добавить курс

            .btn.btn-big.btn-h-60.mt-3(:class="{ 'disabled':$v.$invalid }", @click="save()") Сохранить

</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import prepareErrorFunctions from '@/functions/auth/prepareErrorFunctions'

// подключаем библиотеку валидатора
import {required} from 'vuelidate/lib/validators';

export default {
    name: "components.popup.services.ServiceClassifiedFormPopup",
    components: {
        vSelect
    },
    data() {
        return {
            model: {
                id: null,
                name: null,
                category_id: null,
                category: {
                    label:null,
                    value:null
                },
                description: null,
                short_description: null,
            }
        }
    },
    // Модель для валидации, которую Vuelidate превратит в computed-поле $v
    validations: {
        // Название поля должно совпадать с полем в data
        model: {
            name: {
                required,
            },
            category_id: {
                required,
            },
            description: {
                required,
            },
            short_description: {
                required,
            },
        },
    },

    computed: {
        flag_open__computed() {
            let flag_open = this.$store.getters['popup.popup_service_classifier_form/GET_STATUS_OPEN'];

            if(flag_open == true){
                let service_classes_item = this.$store.getters['popup.popup_service_classifier_form/GET_DATA'];
                let popup_data = {
                    id: service_classes_item['service_classes_id'],
                    name: service_classes_item['service_classes_name'],
                    category_id: service_classes_item['service_categories_id'],
                    category: {label:null, value:null},
                    description: service_classes_item['service_classes_description'],
                    short_description: service_classes_item['service_classes_short_description'],
                }
                console.log(service_classes_item);
                this.setData(popup_data);
            }

            return flag_open;
        },
        categories__computed(){
            return this.$store.getters['service_category/GET_ITEMS__FOR_OPTIONS'];
        },
    },

    methods: {
        handleSelect(event){
            if(event !== null) {
                this.model.category_id = event.value;
            }
        },
        async save() {

            let send_date = this.model;
            send_date.category_id = this.model.category.value;

            let response_obj = await this.$store.dispatch('popup.popup_service_classifier_form/SAVE', send_date);

            // проверяем результат запроса
            if (response_obj.success !== true) {
                // возникла ошибка
                let tmp_error = prepareErrorFunctions.prepareError(response_obj)

                let context = this;
                await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                setTimeout(function () {
                    context.$store.dispatch('errors/HIDE_PANEL')
                }, 5000);

            }
            else {
                // если нет ошибки
                let tmp_error = {
                    'text': 'Успешно сохранено',
                    'type': 'SUCCESS'
                };

                let context = this;
                await context.$store.dispatch('errors/ADD_ITEM', tmp_error);

                setTimeout(function () {
                    context.$store.dispatch('errors/HIDE_PANEL')
                }, 5000);

                this.close(true);
            }
        },
        async close(flag_is_true = false) {
            this.$emit('popupClose', flag_is_true)
        },

        getPopupTitle(){
            let title = 'Добавить услугу в классификатор';

            if(this.model.id != null){
                title = 'Редактировать услуг классификатора';
            }

            return title;
        },
        getCategoryById(id){
            let result = {label:null, value:null};
            let categories = this.categories__computed;
            for(let k in categories){
                if(id == categories[k]['value']){
                    result['label'] = categories[k]['label'];
                    result['value'] = categories[k]['value'];
                }
            }

            return result;
        },

        setData(popup_data){

            popup_data.category = this.getCategoryById(popup_data['category_id']);
            this.model = popup_data;
        },

        selectColor(color){
            this.model.color = color;
        },
        selectIcon(icon){
            this.model.icon = icon;
        },
    },
}
</script>

<style lang="scss">
.popup__caption {
    margin-top: 2rem !important;
    margin-bottom: 0 !important;
}

.form-group {
    width: 100%;
}

.color-square {
    color: transparent;
    display: inline-block;
    width: 40px;
    height: 40px;
    position: relative;
    border-radius: 10px;
    background: currentColor;
    margin: 15px;
    z-index: 1;
    transition: .3s ease-out;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:last-child {
        margin: 15px 0 15px 15px;
    }

    &-wrapper {
        margin: 0 -10px -10px;
    }

    &:not(.active):hover {
        transform: translateY(4px);
        box-shadow: none !important;
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background: currentColor;
        opacity: 0;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        z-index: -1;
        position: absolute;
        border-radius: inherit;
        cursor: pointer;
        transition: .2s ease-out;
    }

    &__icon {
        fill: #3b5765;
        transition: .2s ease-out;
    }

    &.active::before {
        opacity: .3;
    }

    &.active &__icon {
        fill: currentColor;
    }
}

.section__sub-caption {
    margin-top: 80px;
}
</style>