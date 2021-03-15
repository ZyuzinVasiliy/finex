<template lang="pug">
    .faq-card(:class="{'active': active}")
        .faq-card__head(@click="active = !active")
            .faq-card__caption
                | Как мне решить мои финансовые проблемы?
            .faq-card__toggle
                svg.faq-card__toggle__icon
                    use(xlink:href="@/assets/img/main.svg#plus" v-if="!active")
                    use(xlink:href="@/assets/img/main.svg#minus" v-if="active")
        transition(name="fade")
            .faq-card__body(v-if="active")
                p
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    | et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    | doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.
                p
                    | Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    | totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et



</template>

<script>
    export default {
        name: "Faq",
        data() {
            return {
                active: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .faq-card {
        &:not(:last-child) {
            margin-bottom: 20px;
            @media (max-width: 991px) {
                margin-bottom: 10px;
            }
        }
        &__head {
            padding: 15px 30px 15px 45px;
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            font-weight: 400;
            color: #353535;
            border-radius: 5px;
            transition: .2s ease-out;
            cursor: pointer;
            @media (max-width: 991px) {
                padding: 15px 10px 15px 20px;
                font-size: 16px;
                line-height: 27px;
            }
        }
        &__caption {
            margin: 12px 0 8px;
            max-width: 760px;
            @media (max-width: 991px) {
                margin: 4px 0 0;
            }
        }
        &__toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: #EEF5FD;
            margin: 2.5px 0 2.5px 30px;
            flex-shrink: 0;
            @media (max-width: 991px) {
                width: 30px;
                height: 30px;
            }
            &__icon {
                fill: #00A8FF;
                width: 20px;
                height: 20px;
                @media (max-width: 991px) {
                    width: 15px;
                    height: 15px;
                }
            }
        }
        &__body {
            font-weight: 300;
            padding: 5px 30px 30px 45px;
            p {
                font-size: 16px;
                line-height: 30px;
            }
            @media (max-width: 991px) {
                padding: 5px 10px 5px 20px;
                p {
                    font-size: 12px;
                    line-height: 2;
                }
            }
        }
        &:not(.active) {
            .faq-card {
                &__head {
                    background: #EEF5FD;
                }
            }
        }
    }
</style>