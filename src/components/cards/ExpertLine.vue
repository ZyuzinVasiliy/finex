<template lang="pug">
    .person
        .person__head
            .person__head__item
                .person__img-wrapper
                    img.person__img(:src="'https://backend.finexpert.online'+data.img")(v-if="data.img != null")
                    //.person__online(v-if="data.online")
                .person__info
                    //.person__description {{data.description}}
                    .person__name {{data.first_name}} {{data.last_name}}
                    .person__category.desktop Займ под бизнес / Кредитные вопросы
                    .person__description.desktop Ипотека / Семейные дела / Страховка имущества
                        span.color-accent.ml-2 +5
            .person__info.mt-4.mb-4.mobile
                .person__category Займ под бизнес / Кредитные вопросы
                .person__description Ипотека / Семейные дела / Страховка имущества
            .person__separator
            .person__statistics
                .person__rate
                    | {{data.rate != null ? data.rate : 0}}
                    svg.person__rate__icon(style="fill:#0EC6A5;")
                        use(xlink:href="@/assets/img/main.svg#star")

                .person__info-wrapper
                    .person__info {{data.reviews_all != null ? data.reviews_all : 0}}
                        svg.person__info__icon(style="fill:#3B5765;")
                            use(xlink:href="@/assets/img/main.svg#interface")
                    span.person__info__separator :
                    .person__info {{data.reviews_good != null ? data.reviews_good : 0}}
                        svg.person__info__icon(style="fill:#0EC6A5;")
                            use(xlink:href="@/assets/img/main.svg#star")
                    span.person__info__separator /
                    .person__info {{data.reviews_bad != null ? data.reviews_bad : 0}}
                        svg.person__info__icon(style="fill:#C92D49;")
                            use(xlink:href="@/assets/img/main.svg#star")

            .person__separator
            .person__btn-group.desktop
                .person__btn-wrapper
                    router-link(:class="'person__btn person__btn--blue'" :to="{name:'public.experts.item', params:{id:data.id}}" ) Подробнее
                    .person__btn__placeholder
                        = 'от '
                        span.color-red 2 500 р
                .person__btn-wrapper
                    .person__btn.person__btn--gray Задать вопрос
                    .person__btn__placeholder
                        = 'Среднее время ответа - '
                        span.color-accent 5ч
        .person__body
            svg.person__quotes
                use(xlink:href="@/assets/img/main.svg#quotes")

            p
                | {{data.short_description}}

        .person__btn-group.mobile
            .person__btn__placeholder
                = 'Среднее время ообратной связи - '
                span.color-accent 5ч
            .person__btn-wrapper
                router-link(:class="'person__btn person__btn--blue'" :to="{name:'public.experts.item', params:{id:data.id}}") Подробнее
            .person__btn-wrapper
                .person__btn.person__btn--gray Задать вопрос

</template>

<script>
    export default {
        name: "Expert",
        props: {
            data: Object,
        }
    }
</script>

<style lang="scss" scoped>
    .person {
        padding: 15px 15px 20px;
        font-size: 12px;
        font-weight: 400;
        color: #9f9f9f;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: -5px 10px 20px rgba(0, 0, 0, .05);
        margin-bottom: 20px;
        &__img {
            width: 100%;
            height: 100%;
            border-radius: inherit;
            z-index: 1;
            object-fit: cover;
            object-position: center;
            border: 1px solid #fff;
            border-radius: 5px;
            &-wrapper {
                position: relative;
                width: 100px;
                height: 100px;
                margin-right: 20px;
                flex-shrink: 0;
                @media (max-width: 991px) {
                    width: 50px;
                    height: 50px;
                }
            }
        }
        &__head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (min-width: 992px) and (max-width: 1199px) {
                flex-wrap: wrap;
            }
            @media (max-width: 991px) {
                display: block;
            }
            &__item {
                display: flex;
                @media (min-width: 992px) and (max-width: 1199px) {
                    width: 100%;
                }
            }
        }
        &__body {
            position: relative;
            z-index: 1;
            margin-top: 40px;
            p {
                font-size: 16px;
                color: #747474;
                font-weight: 300;
                line-height: 36px;
                @media (max-width: 991px) {
                    font-size: 12px;
                    line-height: 2;
                }
            }
            p:last-child {
                margin-bottom: 0;
            }
        }
        &__quotes {
            width: 60px;
            height: 60px;
            opacity: .6;
            fill:#D8E7F3;
            position: absolute;
            top: -23px;
            left: 10px;
            z-index: -1;
        }
        &__online {
            position: absolute;
            bottom: -1px;
            right: -1px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid #ffffff;
            background: #0EC6A5;
            @media (max-width: 991px) {
                width: 16px;
                height: 16px;
            }
        }
        &__separator {
            width: 1px;
            height: 92px;
            background: #D5E1EC;
            margin: 0 15px;
            @media (min-width: 992px) and (max-width: 1199px) {
                display: none;
            }
            @media (max-width: 991px) {
                display: none;
            }
        }
        &__btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 53px;
            border-radius: 5px;
            cursor: pointer;
            transition: .2s ease-out;
            font-size: 14px;
            @media (max-width: 991px) {
                width: 100%;
                height: 45px;
            }
            &__placeholder {
                margin-top: 12px;
                text-align: center;
                font-size: 12px;
                font-weight: 300;
                span {
                    font-weight: bold;
                }
                @media (max-width: 991px) {
                    margin-bottom: 10px;
                }
            }
            &-wrapper:not(:last-child) {
                margin: 0 10px 0 0;
                @media (max-width: 991px) {
                    margin: 0 0 10px 0;
                }
            }
            &:hover {
                opacity: .6;
            }
            &--blue {
                color: #ffffff;
                background: #00a8ff;
            }
            &--gray {
                color: #787878;
                background: #E6EEF5;
            }
            &-group {
                display: flex;
                @media (max-width: 991px) {
                    display: block;
                    margin-top: 30px;
                }
            }
        }
        &__rate {
            display: flex;
            align-items: center;
            color: #0EC6A5;
            z-index: 3;
            font-size: 18px;
            @media (max-width: 991px) {
                margin-right: 25px;
                font-size: 14px;
            }
            &__icon {
                margin-bottom: 6px;
                margin-left: 8px;
                width: 15px;
                height: 15px;
                fill: currentColor;
                @media (max-width: 991px) {
                    width: 13px;
                    height: 13px;
                    margin-bottom: 4px;
                }
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
        &__statistics {
            @media (max-width: 991px) {
                display: flex;
            }
        }
        &__info {
            &__separator {
                display: inline-block;
                margin: 0 6px;
            }
            &-wrapper {
                z-index: 3;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #8DA9C1;
                font-size: 14px;
                padding: 6px 0;
                @media (max-width: 991px) {
                    justify-content: flex-start;
                }
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
        &__name {
            font-size: 18px;
            color: #353535;
        }
        &__category {
            font-size: 14px;
            color: #00a8ff;
            font-weight: bold;
            margin-top: 5px;
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
</style>