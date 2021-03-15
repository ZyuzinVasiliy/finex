<template lang="pug">
    .course
        img.course__img(src="@/assets//img/bg.jpg")
        .course__content
            .course__title Курс по програмированию в две строки
            .course__body
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore . ..
            .course__footer(v-if="type !== 'my'")
                .course__info
                    .course__info__title Прошли курс:
                    .course__user-list
                        .course__user-count +5
                        a.course__user(href="#")
                            img.course__user__img(src="@/assets//img/bg.jpg")
                        a.course__user(href="#")
                            img.course__user__img(src="@/assets//img/bg.jpg")
                .course__admin-group
                    a.course__admin(href="#")
                        svg.course__admin__icon
                            use(xlink:href="@/assets/img/sprite.svg#edit")
                    a.course__admin(href="#")
                        svg.course__admin__icon
                            use(xlink:href="@/assets/img/sprite.svg#close")
        .course__stat(v-if="type === 'my'")
            .course__stat__item
                .course__stat__title Пройдено тестов:
                    .course__stat__value
                        span.course__stat__value__count 11
                        | /44
            .course__stat__item
                .course__stat__title Общий прогресс:
                    .course__stat__progress
                        .course__stat__progress__procent 75%

</template>

<script>
    export default {
        name: "Course",
        props: {
            type: String,
        }
    }
</script>

<style lang="scss" scoped>
    .course {
        background: #ffffff;
        border-radius: 10px;
        box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        position: relative;
        margin-bottom: 25px;
        &::before {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            width: calc(100% - 130px);
            height: 6px;
            border-radius: 20px 20px 0 0;
            transform: translateX(-50%);
            background: #A1C1FF;
            z-index: 2;
            @media (max-width: 991px) {
                width: calc(100% - 60px);
            }
        }
        &__stat {
            display: flex;
            position: relative;
            &::before {
                content:'';
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
                height: 2px;
                border-radius: 2px;
                background: #E6EEF5;
                z-index: 1;
            }
            &__item {
                width: 50%;
                display: flex;
                justify-content: center;
                text-align: center;
                padding: 15px 5px 20px;
                &:not(:last-child) {
                    border-right: 2px solid #E6EEF5;
                }
            }
            &__title {
                font-size: 14px;
                font-weight: 300;
            }
            &__value {
                margin-top: 12px;
                font-size: 14px;
                color: #3d3d3d;
                font-weight: 400;
                &__count {
                    font-size: 45px;
                    color: #00a8ff;
                }
            }
            &__progress {
                font-size: 18px;
                color: #00a8ff;
                font-weight: 400;

                width: 53px;
                height: 53px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 10px auto 0;
                border-radius: 50%;
                border: 3px solid #06DA8E;
                &__procent {
                }
            }
        }
        &__content {
            padding: 15px 30px 30px;
        }
        &__footer {
            margin-top: 20px;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
        }
        &__info {
            &__title {
                font-size: 12px;
                color: #9f9f9f;
                margin-bottom: 5px;
            }
        }
        &__admin {
            color: #909090;
            transition: .2s ease-out;
            padding: 7px;
            display: inline-block;
            &:not(:last-child) {
                margin-right: 20px;
            }
            &:hover {
                color: #00a8ff;
            }
            &__icon {
                width: 15px;
                height: 15px;
                fill: currentColor;
            }
        }
        &__img {
            width: 100%;
            height: 165px;
            object-fit: cover;
            object-position: center;
        }
        &__title {
            font-size: 20px;
            line-height: 27px;
            color: #3d3d3d;
            margin-bottom: 5px;
        }
        &__body {
            font-size: 14px;
            line-height: 24px;
            color: #676767;
            font-weight: 300;
        }
        &__user {
            &-count {
                font-size: 14px;
                color: #9f9f9f;
                margin-left: 10px;
            }
            &-list {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-direction: row-reverse;
            }
            &:not(:last-child) {
                margin-left: -10px;
            }
            &__img {
                width: 30px;
                height: 30px;
                border-radius: 5px;
                border: 2px solid #ffffff;
            }
        }
    }
</style>