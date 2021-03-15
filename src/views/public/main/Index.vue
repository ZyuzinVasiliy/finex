<template lang="pug">
    main.block-light

        .container
            .offer__header.desktop
                .offer__header__btn COVID-19
                .offer__header__text Мы здесь, чтобы вы оставались дома
            .section-1
                .slider-wrapper
                    .slider-content
                        .slider-item
                            .slider-img
                                img.slider-img__src(src="@/assets/img/main-1.jpg")
                                .slider-quote
                                    svg.slider-quote__icon
                                        use(xlink:href="@/assets/img/main.svg#quotes")
                                    .slider-quote__text Чтобы хорошо разбираться в данном вопросе, надо хорошо разбираться в данном вопросе
                                    .slider-quote__title Эксперт
                                    .slider-quote__name Валерий Топовый
                            .slider-title Хотите легальные ипотечные каникулы?
                            .slider-header
                                .slider-header__user
                                    img.slider-header__user__img(src="@/assets/img/experts-2.jpg")
                                    .slider-header__user__content
                                        .slider-header__user__title Эксперт
                                        .slider-header__user__name Валерий Топовый
                                .slider-header__btn
                                    svg.slider-header__btn__icon
                                        use(xlink:href="@/assets/img/main.svg#message")
                                    span.slider-header__btn__text Написать
                            .slider-body
                                .slider-body__info-group
                                    .slider-body__info
                                        .slider-body__info__title Обычная цена
                                        .slider-body__info__value 17 000р
                                    .slider-body__info
                                        .slider-body__info__title Со скидкой от эксперта
                                        .slider-body__info__value.color-pink 13 500р
                                .slider-body__btn-group
                                    .slider-body__btn.slider-body__btn--pink Заказать услугу
                                    .slider-body__btn.slider-body__btn--blue Расчитать рассрочку
                    .slider-dot-group
                        .slider-dot
                            .slider-dot__progress(style="transform: translateX(-50%);")
                        .slider-dot
                            .slider-dot__progress
                        .slider-dot
                            .slider-dot__progress
                        .slider-dot
                            .slider-dot__progress
                        .slider-dot
                            .slider-dot__progress

            .section-2
                .offer__subtitle
                    | Топ экспертов уже готовых
                    br
                    | вам помочь
                .row
                    .col-12.col-sm-6.col-md-4.col-xl-3(v-for="expert in experts__computed")
                        expert-card(:data="expert")
                router-link(:class="'show-all'" :to="{name:'public.experts.index'}") Смотреть все

            .section-3
                .main__block-1
                    .offer__img-group
                        img.offer__img-10(src="@/assets/img/main-2.jpg")
                        img.offer__img-11(src="@/assets/img/main-3.jpg")
                        img.offer__img-12(src="@/assets/img/main-4.jpg")
                    .offer__subtitle Как-же выбрать нужного эксперта?
                    .offer__text
                        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                        ul.offer__list-mark
                            li.offer__list-mark__item
                                svg.offer__list-mark__icon
                                    use(xlink:href="@/assets/img/main.svg#check")
                                | Возможно понадобятся маркеры
                            li.offer__list-mark__item
                                svg.offer__list-mark__icon
                                    use(xlink:href="@/assets/img/main.svg#check")
                                | Возможно понадобятся маркеры
                            li.offer__list-mark__item
                                svg.offer__list-mark__icon
                                    use(xlink:href="@/assets/img/main.svg#check")
                                | Возможно понадобятся маркеры
                            li.offer__list-mark__item
                                svg.offer__list-mark__icon
                                    use(xlink:href="@/assets/img/main.svg#check")
                                | Возможно понадобятся маркеры
                        .offer__btn.offer__btn--blue Помочь с выбором

            .section-4
                .row.mt-5
                    .col-12.col-md-6
                        .offer__subtitle
                            | Последние отзывы наших клиентов
                        .review.review--red.ml-auto
                            svg.review__quotes
                                use(xlink:href="@/assets/img/main.svg#quotes")
                            .review__my
                                img.review__my__ava(src="@/assets/img/bg.jpg")
                                .review__my__info
                                    .review__my__description Отзыв об эксперте
                                    .review__my__name Алексей Новиков
                            .review__text
                                p
                                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore magna aliqua. Sed do eiusmod tempor incididunt ut
                            .review__footer
                                .review__user
                                    img.review__user__ava(src="@/assets/img/bg.jpg")
                                    .review__user__name Алексей Новиков
                        a.review-more.review-decor-left.desktop(href="#")
                            | Все отзывы
                            svg.review-more__icon
                                use(xlink:href="@/assets/img/main.svg#dots")
                    .col-12.col-md-6.review-right-block
                        .review.review--green.review-decor-right
                            svg.review__quotes
                                use(xlink:href="@/assets/img/main.svg#quotes")
                            .review__my
                                img.review__my__ava(src="@/assets/img/bg.jpg")
                                .review__my__info
                                    .review__my__description Отзыв об эксперте
                                    .review__my__name Алексей Новиков
                            .review__text
                                p
                                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore magna aliqua. Sed do eiusmod tempor incididunt ut
                            .review__footer
                                .review__user
                                    img.review__user__ava(src="@/assets/img/bg.jpg")
                                    .review__user__name Алексей Новиков

                        .review.review--big
                            svg.review__quotes
                                use(xlink:href="@/assets/img/main.svg#quotes")
                            .review__my
                                img.review__my__ava(src="@/assets/img/bg.jpg")
                                .review__my__info
                                    .review__my__description Отзыв об эксперте
                                    .review__my__name Алексей Новиков
                            .review__text
                                p
                                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore magna aliqua. Sed do eiusmod tempor incididunt ut
                            .review__footer
                                .review__user
                                    img.review__user__ava(src="@/assets/img/bg.jpg")
                                    .review__user__name Алексей Новиков
                        a.review-more.mobile(href="#")
                            | Все отзывы
                            svg.review-more__icon
                                use(xlink:href="@/assets/img/main.svg#dots")

            .section-5
                .row.mt-5

                    .col-12.col-md-6(v-for="service in services__computed")
                        router-link(:class="['card-service', getColorClass(service.service_categories_color)]" :to="{name:'public.services.detail', params:{id:service.services_id}}")
                                .card-service__header
                                    .card-service__category
                                        svg.card-service__category__icon
                                            use(:xlink:href='category_svg+service.service_categories_icon')
                                        | {{service.service_categories_name}}
                                .card-service__name
                                    | {{service.services_name}}
                                .card-service__main
                                    .card-service__left
                                        .card-service__expert__info
                                            img.card-service__expert__img(:src="service.users_img")
                                            .card-service__expert__text
                                                .card-service__expert__description Предоставляет эксперт
                                                .card-service__expert__name {{service.users_first_name}} {{service.users_last_name}}
                                    .card-service__right
                                        .card-service__value
                                            | {{ $helpers.MONEY_HELPER.preparePrice(service.services_price) }} р


            router-link(:class="'show-all'" :to="{name:'public.services.index'}") Смотреть все

            .section-6
                .offer__subtitle Эксперты отвечают
                faqCard
                faqCard
                faqCard

        .section-7
            .bg.bg--blue
                .container
                    .block-form.block-form--reverse
                        .block-form__img
                            img.block-form__img__src(src="@/assets/img/main-5.jpg")
                        .block-form__content
                            .offer__subtitle
                                | Подберите мне финансового эксперта
                            .block-form__form
                                .block-form__group
                                    label.form-group
                                        .form-title Имя
                                        input.form-control(type='text')
                                    label.form-group
                                        .form-title Фамилия
                                        input.form-control(type='text')
                                label.form-group
                                    .form-title Телефон
                                    input.form-control(type='text')
                                label.form-group
                                    .form-title Суть обращения
                                    textarea.form-control
                                label.custom-control.custom-checkbox.mb-4.mt-2
                                    input.custom-control-input(type='checkbox')
                                    .custom-control-label
                                        = 'Я ознакомился и согласен с '
                                        a.link(target='_blank', href='https://finexpert.online/src/pdf/user_agreement.pdf') условиями
                                        = ' обработки'
                                        br
                                        | персональных данных
                                button.block-form__btn Подобрать эксперта
        .section-8
            .container
                .offer__block-2
                    .offer__img-9-wrapper
                        img.offer__img-9(src="@/assets/img/main-6.jpg")
                    .logo
                        img.logo__img(src="@/assets/img/logo.svg")
                    .offer__subtitle Что нужно чтобы стать экспертом?
                    .offer__text
                        p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                        ul.offer__list-mark
                            li.offer__list-mark__item
                                svg.offer__list-mark__icon
                                    use(xlink:href="@/assets/img/main.svg#check")
                                | Возможно понадобятся маркеры
                            li.offer__list-mark__item
                                svg.offer__list-mark__icon
                                    use(xlink:href="@/assets/img/main.svg#check")
                                | Возможно понадобятся маркеры
                            li.offer__list-mark__item
                                svg.offer__list-mark__icon
                                    use(xlink:href="@/assets/img/main.svg#check")
                                | Возможно понадобятся маркеры
                            li.offer__list-mark__item
                                svg.offer__list-mark__icon
                                    use(xlink:href="@/assets/img/main.svg#check")
                                | Возможно понадобятся маркеры
                        .offer__btn.offer__btn--blue Получить обучение

</template>

<script>
    import '@/assets/css/modern-reset.min.css'
    import '@/assets/css/bootstrap.min.css'
    import '@/assets/css/style.css'
    import '@/assets/css/custom-style.css'

    import '@/assets/scss/index.scss'

    import expertCard from '@/components/cards/Expert';
    import faqCard from '@/components/cards/Faq';
    import authFunctions from "@/functions/auth/authFunctions";

    export default {
        name: "Main",
        components: {
            expertCard,
            faqCard,
        },
        async created() {
            await this.$store.dispatch('experts/FETCH_LIST', {queryParams: null});
            await this.$store.dispatch('service/FETCH_LIST', {queryParams: null});
            console.log(this.services__computed);
        },
        data() {
            return {
                category_svg: require('@/assets/img/category.svg'),
            }
        },

        computed: {
            experts__computed() {
                return this.$store.getters['experts/GET_ITEMS'];
            },
            services__computed() {
                return this.$store.getters['service/GET_ITEMS'];
            },
        },

        methods: {
            checkLoggedIn() {
                return authFunctions.loggedIn();
            },
            getColorClass(color){
                let color_2_class = {
                    '#0ec6a5': 'card-service--green',
                    '#ff7a00': 'card-service--orange',
                    '#e21212': 'card-service--red',
                    '#7893f3': 'card-service--blue',
                    '#f378ee': 'card-service--violet',
                }
                let result = '';
                if(color_2_class.hasOwnProperty(color)){
                    result = color_2_class[color];
                }
                return result;
            },
        },

    }
</script>

<style lang="scss" scoped>
    .card-service {
        display: block;
        text-decoration: none;
        transition: all .3s;
    }
    .card-service:hover{
        color: #000;
        -webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    }
    .block-form {
        padding-bottom: 50px;
    }
    .section-6 {
        padding-top: 85px;
    }
    .section-3 {
        margin-top: 200px;
        margin-bottom: 215px;
    }
    .main__block-1 {
        position: relative;
    }
    .offer__block-2 {
        padding: 0;
        margin-bottom: 80px;
    }
    .logo {
        margin-bottom: 20px;
    }
    .review {
        max-width: 445px;
        height: 330px;
        @media (max-width: 991px) {
            margin-bottom: 12px;
        }
    }
    .review--big {
        max-width: none;
    }
    .review-more {
        margin-left: auto;
        width: 210px;
        height: 202px;
        background: #EEF5FD;
        color: #353535;
        font-size: 16px;
        color: #353535;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: .2s ease-out;
        @media (max-width: 991px) {
            width: 100%;
            height: 77px;
            flex-direction: row;
            margin: 0;
        }
        &__icon {
            margin: 20px 0 0;
            width: 52px;
            height: 10px;
            fill: #3cbbfe;
            @media (max-width: 991px) {
                width: 44px;
                height: 8px;
                flex-direction: row;
                margin: 0 0 0 30px;
            }
        }
        &:hover {
            background: rgba(238, 245, 253, .4);
            text-decoration: none;
        }
    }
    .review-right-block {
    }
    .card-service {
        margin-bottom: 25px;
    }
    .offer__block-2 {
        margin-top: 125px;
    }

    .review-decor-left {
        position: relative;
        &::before {
            content: '';
            display: block;
            width: 872px;
            height: 201px;
            position: absolute;
            top: 0;
            left: -15px;
            transform: translateX(-100%);
            background: right 100%/auto url('~@/assets/img/dots.svg');

        }
    }

    .review-decor-right {
        position: relative;
        &::before {
            content: '';
            display: block;
            width: 872px;
            height: 201px;
            position: absolute;
            top: 0;
            right: -15px;
            transform: translateX(100%);
            background: right 100%/auto url('~@/assets/img/dots.svg');

        }
    }
</style>