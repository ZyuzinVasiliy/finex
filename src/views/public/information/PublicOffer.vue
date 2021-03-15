<template lang="pug">
    main.block-light
        .container
            .faq__item( v-for='item in faq' :class='{active: item.show}' :key='item.id' )
                .faq__title(@click="item.show = !item.show") {{item.title}}
                transition(name="slide-fade")
                    .faq__text(v-if='item.show') {{item.text}}
</template>

<script>
    export default {
        name: "information",
        data() {
            return {
                faq: [
                    {
                        id: 1,
                        show: false,
                        title: 'Как мне через ваш сервис помочь своим родным решить финансовые проблемы',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    },
                    {
                        id: 2,
                        show: false,
                        title: 'Как мне через ваш сервис помочь своим родным решить финансовые проблемы',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    },
                    {
                        id: 3,
                        show: false,
                        title: 'Как мне через ваш сервис помочь своим родным решить финансовые проблемы',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    },
                    {
                        id: 4,
                        show: false,
                        title: 'Как мне через ваш сервис помочь своим родным решить финансовые проблемы',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>