<template lang="pug">
    .person(@click="$emit('eventClick', data.id)" style="cursor:pointer")
        .person__preview
            img.person__img(:src="'http://api.beta.finexpert.online' + data.img")
            .person__rate
                | {{data.rate != null ? data.rate : 0}}
                svg.person__rate__icon
                    use(xlink:href="@/assets/img/main.svg#star")
            //.person__online(v-if="data.online")
                | онлайн
                .person__online__icon
            .person__info-wrapper
                .person__info {{data.reviews_all != null ? data.reviews_all : 0}}
                    svg.person__info__icon
                        use(xlink:href="@/assets/img/main.svg#interface")
                .person__info-group
                    .person__info {{data.reviews_good != null ? data.reviews_good : 0}}
                        svg.person__info__icon
                            use(xlink:href="@/assets/img/main.svg#good")
                    span.person__info__separator /
                    .person__info {{data.reviews_bad != null ? data.reviews_bad : 0}}
                        svg.person__info__icon
                            use(xlink:href="@/assets/img/main.svg#bad")

        .person__content
            .person__description Ипотека / Семейные дела
            .person__name {{data.first_name}} {{data.last_name}}

            .person__line

            .person__item-group
                .person__item
                    .person__item__title Сделок
                    .person__item__value {{data.qnt_deals != null ? data.qnt_deals : 0}}
                .person__item
                    .person__item__title Услуг
                    .person__item__value {{data.qnt_services != null ? data.qnt_services : 0}}
            .person__send Написать специалисту

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

    .person:hover {
        text-decoration: none;
    }

    .person {
        padding: 15px 15px 20px;
        display: block;
        font-size: 12px;
        font-weight: 400;
        color: #9f9f9f;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: -5px 10px 20px rgba(0, 0, 0, .05);
        margin-bottom: 20px;
        &__img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            object-fit: cover;
            object-position: center;
        }
        &__rate {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 62px;
            height: 32px;
            color: #ffffff;
            background: #0ec6a5;
            border-radius: 5px 0;
            z-index: 3;
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
            display: flex;
            align-items: center;
            &__separator {
                display: inline-block;
                margin: 0 6px;
            }
            &-wrapper {
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 3;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #ffffff;
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
        &__name {
            font-size: 18px;
            color: #353535;
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
        &__send {
            margin-top: 20px;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #787878;
            background: #e6eef5;
            border-radius: 5px;
            cursor: pointer;
            transition: .2s ease-out;
            &:hover {
                opacity: .6;
            }
        }
        &__icon {
            width: 15px;
            height: 15px;
        }
    }
</style>