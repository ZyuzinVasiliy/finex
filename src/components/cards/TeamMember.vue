<template lang="pug">
    .person
        .person__head
            img.person__img(:src="data.img_avatar")
            .person__info

                .person__info__head
                    .person__rate
                        | {{data.rate !== null ? data.rate : 0}}
                        svg.person__rate__icon
                            use(xlink:href="@/assets/img/main.svg#star")
                    .person__info-wrapper
                        .person__info {{data.reviews_all !== null ? data.reviews_all : 0}}
                            svg.person__info__icon(style="fill: #3B5765;")
                                use(xlink:href="@/assets/img/main.svg#interface")
                        span.person__info__separator :
                        .person__info {{data.reviews_good !== null ? data.reviews_good : 0}}
                            svg.person__info__icon(style="fill: #0EC6A5;")
                                use(xlink:href="@/assets/img/main.svg#good")
                        span.person__info__separator /
                        .person__info {{data.reviews_bad !== null ? data.reviews_bad : 0}}
                            svg.person__info__icon(style="fill: #C92D49;")
                                use(xlink:href="@/assets/img/main.svg#bad")
                .person__description Ипотека / Семейные дела

                .person__name {{data.first_name}} {{data.second_name}} {{data.last_name}}
                .person__contact-group
                    a.person__contact(href="#")
                        svg.person__contact__icon
                            use(xlink:href="@/assets/img/main.svg#phone")
                        .person__contact__text +{{data.phone}}
                    a.person__contact(href="#")
                        svg.person__contact__icon
                            use(xlink:href="@/assets/img/main.svg#mail")
                        .person__contact__text {{data.email}}
        .person-stat-group(style="margin-top: 50px")
            .person-stat
                .person-stat__title Сделок
                .person-stat__value 0
            .person-stat
                .person-stat__title Сумма со сделок
                .person-stat__value 0.00 р
            .person-stat
                .person-stat__title Мой доход
                .person-stat__value.color-pink 0.00 р
</template>

<script>
    export default {
        name: "TeamMember",
        props: {
            data: Object,
        },
        data() {
            return {
            }
        },
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
            margin-bottom: 10px;
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
            width: 280px;
            height: 215px;
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
</style>