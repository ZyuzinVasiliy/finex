<template lang="pug">
    main.block-light
        .container
            .offer__header
                .offer__header__btn COVID-19
                .offer__header__text Мы здесь, чтобы вы оставались дома
            h2.offer__title Стань нашим партнером и получи все плюшки этого мира и еще что-нибудь на третью строку
            .offer__img-full
                img.offer__img-full__img(src="@/assets/img/partners-1.jpg")
                img.offer__img-1(src="@/assets/img/partners-2.jpg")
            .offer__text
                p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
            .offer__subtitle Как стать нашим партнером:
            .offer__item-group
                .offer__item
                    .offer__item__icon
                        svg.offer__item__icon__svg
                            use(xlink:href="@/assets/img/partners.svg#icon-1")
                    .offer__item__text
                        | Первый шаг чтобы
                        br
                        | стать экспертом
                        br
                        | три строки
                .offer__item
                    .offer__item__icon
                        svg.offer__item__icon__svg
                            use(xlink:href="@/assets/img/partners.svg#icon-2")
                    .offer__item__text
                        | Второй шаг чтобы
                        br
                        | стать экспертом
                        br
                        | три строки
                .offer__item
                    .offer__item__icon
                        svg.offer__item__icon__svg
                            use(xlink:href="@/assets/img/partners.svg#icon-3")
                    .offer__item__text
                        | Третий шаг чтобы
                        br
                        | стать экспертом
                        br
                        | три с троки
                .offer__item
                    .offer__item__icon
                        svg.offer__item__icon__svg
                            use(xlink:href="@/assets/img/partners.svg#icon-4")
                    .offer__item__text
                        | Четвертый шаг чтобы
                        br
                        | стать экспертом
                        br
                        | три строки
            .offer__img-full
                img.offer__img-full__img(src="@/assets/img/partners-3.jpg")
            .offer__subtitle Наши цифры на сегодня:
            .offer__card-group
                .offer__card(style="color: #F35389; box-shadow: -5px 10px 30px rgba(243, 83, 137, 0.15);")
                    svg.offer__card__icon
                        use(xlink:href="@/assets/img/partners.svg#icon-5")
                    .offer__card__value 91 250
                    .offer__card__title Экспертов
                .offer__card(style="color: #00A8FF; box-shadow: -5px 10px 30px rgba(0, 168, 255, 0.15);")
                    svg.offer__card__icon
                        use(xlink:href="@/assets/img/partners.svg#icon-6")
                    .offer__card__value 111 250
                    .offer__card__title Клиентов
                .offer__card(style="color: #7893F3; box-shadow: -5px 10px 30px rgba(120, 147, 243, 0.2);")
                    svg.offer__card__icon
                        use(xlink:href="@/assets/img/partners.svg#icon-7")
                    .offer__card__value 11 111 250
                    .offer__card__title Сделок
        .bg.bg--blue
            .container
                .block-form
                    .block-form__img
                        img.block-form__img__src(src="@/assets/img/bg.jpg")
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
    .offer {
        &__text {
            max-width: 435px;
        }
    }
</style>