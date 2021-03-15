<template lang="pug">
    .person
        .person__head
            img.person__img(:src="data.img_avatar")
            .person__info
                .person__info__head
                    .person__rate
                        | {{data.rate != null ? data.rate : 0}}
                        svg.person__rate__icon
                            use(xlink:href="@/assets/img/main.svg#star")
                    .person__info-wrapper
                        .person__info {{data.reviews_all != null ? data.reviews_all : 0}}
                            svg.person__info__icon(style="fill: #3B5765;")
                                use(xlink:href="@/assets/img/main.svg#interface")
                        span.person__info__separator :
                        .person__info {{data.reviews_good != null ? data.reviews_good : 0}}
                            svg.person__info__icon(style="fill: #0EC6A5;")
                                use(xlink:href="@/assets/img/main.svg#star")
                        span.person__info__separator /
                        .person__info {{data.reviews_bad != null ? data.reviews_bad : 0}}
                            svg.person__info__icon(style="fill: #C92D49;")
                                use(xlink:href="@/assets/img/main.svg#star")
                .person__description г. {{data.activity_city}}
                .person__name {{data.first_name}} {{data.last_name}}
                .person__text
                    p
                        | {{data.description}}

        template(v-if="data.role_code == 'EXPERT'")
            .section__sub-caption(style="margin-top: 60px")
                .section__sub-caption__name
                    span.nowrap Основные компетенции
                .section__sub-caption__line

            .row
                .col-12.col-md-4(v-for="category in categories")
                    .category(:style="{'color': category.color}")
                        .category__icon
                            svg.category__icon__svg(:width="category.size" :height="category.size")
                                use(:xlink:href="require('@/assets/img/category.svg')+category.icon")
                        .category__text {{category.label}}


            .section__sub-caption(style="margin-top: 60px")
                .section__sub-caption__name
                    span.nowrap Остальные компетенции
                .section__sub-caption__line
            .row
                .col-12.col-md-3(v-for="category in categories")
                    .category.category--mini(:style="{'color': category.color}")
                        .category__icon
                            svg.category__icon__svg(:width="category.size" :height="category.size")
                                use(:xlink:href="require('@/assets/img/category.svg')+category.icon")
                        .category__text {{category.label}}

            template(v-if="typeof data.images.isArray && data.images.length > 0")
                .section__sub-caption(style="margin-top: 60px")
                    .section__sub-caption__name
                        span.nowrap Заслуги
                    .section__sub-caption__line
                .person__picture-group
                    template(v-for="image in data.images")
                        img.person__picture(:src="image.path")

</template>

<script>
    export default {
        name: "Expert",
        props: {
            data: Object,
        },
        data() {
            return {
                categories: [
                    {
                        label: 'Займ под бизнес',
                        color: '#0ec6a5',
                        icon: '#business',
                        size: '20',
                    },
                    {
                        label: 'Услуги для пенсионеров',
                        color: '#7893f3',
                        icon: '#willness',
                        size: '23',
                    },
                    {
                        label: 'Материнский капитал',
                        color: '#ff7a00',
                        icon: '#mother',
                        size: '23',
                    },
                    {
                        label: 'Семейные дела',
                        color: '#f378ee',
                        icon: '#saved',
                        size: '20',
                    },
                    {
                        label: 'Займ под бизнес',
                        color: '#e21212',
                        icon: '#home',
                        size: '20',
                    },
                ],
            }
        },
        computed:{
            profile_role__computed(){
                let profile_data = this.$store.getters['profile/GET_PROFILE'];
                let role_code = '';
                if(profile_data.hasOwnProperty('role_code')){
                    if(profile_data['role_code'] != null){
                        role_code = profile_data['role_code'];
                    }
                }
                return role_code;
            },
        },
        created(){
        }
    }
</script>

<style lang="scss" scoped>
    .section__sub-caption {
        margin-top: 20px;
    }
    .person {
        padding: 20px;
        font-size: 14px;
        font-weight: 400;
        background: #FFFFFF;
        box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        margin-bottom: 45px;
        &__head {
            display: flex;
            @media (max-width: 991px) {
                display: block;
            }
        }
        &__picture {
            width: 110px;
            height: 155px;
            border-radius: 5px;
            flex-shrink: 0;
            @media (max-width: 991px) {
                width: 70px;
                height: 100px;
            }
            &:not(:last-child) {
                margin-right: 20px;
                margin-bottom: 20px;
            }
            &-group {
                display: flex;
                flex-wrap: wrap;
            }
        }
        &__img {
            width: 370px;
            height: 300px;
            border-radius: 5px;
            margin-right: 25px;
            object-fit: cover;
            object-position: center;
            @media (max-width: 991px) {
                margin-bottom: 15px;
                width: 100%;
                height: calc(88px + 27.5vw);
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
            font-size: 30px;
            color: #353535;
        }
        &__text {
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