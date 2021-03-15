<template lang="pug">
    main.block-light
        .container
            .offer
                .offer__header
                    .offer__header__btn COVID-19
                    .offer__header__text Мы здесь, чтобы вы оставались дома
                h2.offer__title Финансовая помощь не должна быть труднодоступной, на то она и помощь или что-то в этом духе, с нами все очень легко и просто
                .offer__text-group
                    .offer__text
                        p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                        p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                    .offer__text
                        p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            .offer__img-full
                img.offer__img-4(src="@/assets/img/about-1.jpg")
                img.offer__img-5(src="@/assets/img/about-2.jpg")
            .offer__text
                img.offer__img-6(src="@/assets/img/about-3.jpg")
                .offer__subtitle Решить финансовые вопросы где бы вы не находились
                ol.offer__list-number.offer__list-number--blue
                    li.offer__list-number__item Первый серьезный пункт в несколько строк, возможно даже в три, чтобы влезло информации по-больше об этом финансовом сервисе
                    li.offer__list-number__item Первый серьезный пункт в несколько строк, возможно даже в три, чтобы влезло информации по-больше об этом финансовом сервисе
                    li.offer__list-number__item Первый серьезный пункт в несколько строк, возможно даже в три, чтобы влезло информации по-больше об этом финансовом сервисе
                    li.offer__list-number__item Первый серьезный пункт в несколько строк, возможно даже в три, чтобы влезло информации по-больше об этом финансовом сервисе
                .offer__btn.offer__btn--blue Получить обучение
            .offer__block-2

                img.offer__img-7(src="@/assets/img/about-4.jpg")
                img.offer__img-8(src="@/assets/img/about-5.jpg")
                .offer__subtitle Обучение на высочайшем уровне
                ol.offer__list-number.offer__list-number--pink
                    li.offer__list-number__item Первый серьезный пункт в несколько строк, возможно даже в три, чтобы влезло информации по-больше об этом финансовом сервисе
                    li.offer__list-number__item Первый серьезный пункт в несколько строк, возможно даже в три, чтобы влезло информации по-больше об этом финансовом сервисе
                    li.offer__list-number__item Первый серьезный пункт в несколько строк, возможно даже в три, чтобы влезло информации по-больше об этом финансовом сервисе
                    li.offer__list-number__item Первый серьезный пункт в несколько строк, возможно даже в три, чтобы влезло информации по-больше об этом финансовом сервисе
                .offer__btn.offer__btn--pink Получить обучение
            .offer__subtitle
                | Заголовок для инфографики
                br
                | со статистикой
            .offer__stat-group
                .offer__stat(style="color: #00A8FF; box-shadow: -5px 10px 30px rgba(0, 168, 255, 0.15);")

                    .offer__stat__value 100%
                    .offer__stat__title
                        | Параметр 1
                        br
                        | две строки
                .offer__stat(style="color: #F35389; box-shadow: -5px 10px 30px rgba(243, 83, 137, 0.15);")
                    .offer__stat__value 12к
                    .offer__stat__title
                        | Параметр 1
                        br
                        | две строки
                .offer__stat(style="color: #00A8FF; box-shadow: -5px 10px 30px rgba(0, 168, 255, 0.15);")

                    .offer__stat__value 100%
                    .offer__stat__title
                        | Параметр 1
                        br
                        | две строки
                .offer__stat(style="color: #7893F3; box-shadow: -5px 10px 30px rgba(120, 147, 243, 0.2);")

                    .offer__stat__value 15 / 30
                    .offer__stat__title
                        | Параметр 1
                        br
                        | две строки
        .bg.bg--blue
            .container
                .block-form
                    .block-form__img
                        img.block-form__img__src(src="@/assets/img/about-6.jpg")
                    .block-form__content
                        h2.caption
                            = 'Закажите консультацию абсолютно '
                            span.color-red бесплатно
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
                                .form-title Чем можем помочь?
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
</template>

<script>
    import '@/assets/css/modern-reset.min.css'
    import '@/assets/css/bootstrap.min.css'
    import '@/assets/css/style.css'
    import '@/assets/css/custom-style.css'

    import '@/assets/scss/index.scss'

    import expertCard from '@/components/cards/Expert';
    import newsCard from '@/components/cards/News';
    import faqCard from '@/components/cards/Faq';

    export default {
        name: "About",
        components: {
            expertCard,
            newsCard,
            faqCard,
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    .offer__block-2 {
        margin-top: 150px;
        padding: 135px 0 160px;
        @media (max-width: 991px) {
            margin-top: calc(6vw + 40px);
            padding: 0;
            margin-left: 0;
        }
    }
</style>