<template lang="pug">
    .popup(:class="{ 'active':flag_open__computed }")
        .popup__bg
        .popup__content
            svg.popup__close(@click="close()")
                use(xlink:href="@/assets/img/sprite.svg#close")

            .popup__caption {{ getPopupTitle() }}
            label.form-group
                .form-title
                input.form-control(type='text' placeholder='Введите название категории' v-model="model.name")
            .section__sub-caption
                .section__sub-caption__name
                    span.nowrap Выберите цвет
                .section__sub-caption__line
            .color-square-wrapper
                template(v-for="color in colors")
                    .color-square(:class="{'active': color.hex === model.color}", :style="{'color': color.hex, 'boxShadow': '0px 4px 4px ' + color.hex + '4d'}", :key="'color__' + color.id", @click="selectColor(color.hex)")
            .section__sub-caption
                .section__sub-caption__name
                    span.nowrap Выберите иконку
                .section__sub-caption__line
            .color-square-wrapper
                template(v-for="icon in icons")
                    .color-square(:class="{'active': icon.svg_hash === model.icon}", :style="{'color': model.color, 'background': 'none'}", :key="'icon__' + icon.id", @click="selectIcon(icon.svg_hash)")
                        svg.color-square__icon
                            use(:xlink:href="category_svg + icon.svg_hash")

            .btn.btn-big.btn-h-60.mt-5(:class="{ 'disabled':$v.$invalid }", @click="save()") Сохранить категорию

</template>

<script>
    import prepareErrorFunctions from '../../functions/auth/prepareErrorFunctions'

    // подключаем библиотеку валидатора
    import {required} from 'vuelidate/lib/validators';

    export default {
        name: "components.popup.AddCategoryPopup",
        components: {},
        data() {
            return {
                category_svg: require('@/assets/img/category.svg'),
                colors: [
                    {id: 1, hex: '#0ec6a5'},
                    {id: 2, hex: '#ff7a00'},
                    {id: 3, hex: '#e21212'},
                    {id: 4, hex: '#7893f3'},
                    {id: 5, hex: '#f378ee'},
                ],
                icons: [
                    {id: 1, svg_hash: '#business'},
                    {id: 2, svg_hash: '#willness'},
                    {id: 3, svg_hash: '#mother'},
                    {id: 4, svg_hash: '#saved'},
                    {id: 5, svg_hash: '#home'},
                ],
                model: {
                    id: null,
                    name: null,
                    color: '#0ec6a5',
                    icon: '#business',
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
            },
        },

        computed: {
            flag_open__computed() {
                let flag_open = this.$store.getters['popup.popup_news_category_form/GET_STATUS_OPEN'];

                if(flag_open == true){
                    let popup_data = this.$store.getters['popup.popup_news_category_form/GET_DATA'];
                    this.setData(popup_data);
                }

                return flag_open;
            },
        },

        methods: {
            async save() {

                let send_date = this.model;
                // @TODO fix
                send_date.code = send_date.name;

                let response_obj = await this.$store.dispatch('popup.popup_news_category_form/SAVE', send_date);

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
                let title = 'Добавить категорию';

                if(this.model.id != null){
                    title = 'Редактировать категорию';
                }

                return title;
            },

            setData(popup_data){

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