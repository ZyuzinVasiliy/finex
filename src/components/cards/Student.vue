<template lang="pug">
    .student
        .student__body
            .student__user
                img.student__user__img(src="@/assets//img/bg.jpg")
                .student__user__text
                    .student__user__description Студент
                    .student__user__name Василькова Анастасия Ивановна
            .student__contact-group
                a.student__contact(href="#") +7 (999) 999 - 99 - 99
                a.student__contact(href="#") +7 (999) 999 - 99 - 99
            .student__contact-group
                a.student__contact(href="#") pochta@gmail.com
                a.student__contact(href="#") pochta@gmail.com
        .student__footer
            .student__course Курс по программированию в две строки
            .student__item
                .student__title Дата начала:
                .student__value 20.05.2020
            .student__item
                .student__title Последняя активность
                .student__value 20.05.2020 в 11:53
            .student__item
                .student__title Пройдено тестов
                .student__value
                    span.color-accent 26
                    = ' / 44'
            .student__item
                .student__title Общий прогресс
                .student__value.student__value--big.color-accent 26%



</template>

<script>
    export default {
        name: "Student",
    }
</script>

<style lang="scss" scoped>
    .student {
        background: #ffffff;
        border-radius: 10px;
        box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        position: relative;
        &:not(:last-child) {
            margin-bottom: 15px;
        }
        &__body {
            display: flex;
            align-items: center;
            padding: 20px 50px;
            @media (max-width: 991px) {
                flex-wrap: wrap;
                padding: 20px 30px;
            }
            @media (max-width: 575px) {
                padding: 20px;
            }
        }
        &__user {
            display: flex;
            align-items: center;
            width: 40%;
            @media (max-width: 991px) {
                width: 100%;
                margin-bottom: 20px;
            }
            &__img {
                width: 50px;
                height: 50px;
                border-radius: 5px;
                margin-right: 20px;
                object-fit: cover;
                object-position: center;
            }
            &__description {
                width: 12px;
                font-weight: 400;
                color: #9f9f9f;
                margin-bottom: -4px;
            }
            &__name {
                font-size: 16px;
                font-weight: 400;
                color: #353535;
            }
        }
        &__contact {
            font-size: 14px;
            font-weight: 400;
            color: #3d3d3d;
            display: block;
            &-group {
                width: 30%;
                margin: 0 0 0 30px;
                @media (max-width: 991px) {
                    width: 50%;
                    margin: 0;
                }
                @media (max-width: 575px) {
                    width: 100%;
                    &:not(:last-child) {
                        margin-bottom: 15px;
                    }
                }
            }
        }
        &__footer {
            display: flex;
            justify-content: space-between;
            padding: 20px 50px;
            background: #F7FAFD;
            color: #3d3d3d;
            @media (max-width: 991px) {
                flex-wrap: wrap;
                padding: 20px 30px;
            }
        }
        &__course {
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            max-width: 240px;
            @media (max-width: 991px) {
                width: 100%;
                max-width: 100%;
                margin-bottom: 15px;
            }
        }
        &__item {
            @media (max-width: 991px) {
                width: 50%;
                &:not(:last-child) {
                    margin-bottom: 15px;
                }
            }
            @media (max-width: 575px) {
                width: 100%;
            }
        }
        &__title {
            font-size: 12px;
            font-weight: 300;
            color: #9f9f9f;
        }
        &__value {
            font-size: 16px;
            font-weight: 400;
            &--big {
                font-size: 20px;
            }
        }
    }
</style>