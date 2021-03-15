<template lang="pug">
    .block-light
        .container
            ul.ul-pages

                li.li-title ----- Публичный раздел -----
                li
                    router-link(to="/demo/main") Главная страница
                li
                    router-link(to="/demo/for-partners") Партнерам
                li
                    router-link(to="/demo/for-experts") Экспертам
                li
                    router-link(to="/demo/about") О сервисе
                li
                    router-link(to="/demo/experts") Эксперты / Список экспертов
                li
                    router-link(to="/demo/experts/item") Эксперты / Посадочная страница эксперта
                li
                    router-link(to="/demo/services") Услуги / Список услуг
                li
                    router-link(to="/demo/services/item") Услуги / Посадочная страница услуги
                li
                    router-link(to="/demo/news") Новости
                li
                    router-link(to="/demo/news/item") Новости / Посадочная новости
                li
                    router-link(to="/demo/contacts") Контакты


                li.li-title ----- Личный кабинет -----
                    li
                        router-link(to="/demo/lk/classifier") Классификатор услуг
                    li
                        router-link(to="/demo/lk/services") Услуги экспертов
                    li
                        router-link(to="/demo/lk/orders") Заказы
                    li
                        router-link(to="/demo/lk/bills") Счета
                    li
                        router-link(to="/demo/lk/history") Операции
                    li
                        router-link(to="/demo/lk/reviews") Отзывы
                    li
                        router-link(to="/demo/lk/courses") Обучение
                    li
                        router-link(to="/demo/lk/users") Пользователи
                    li
                        router-link(to="/demo/lk/news") Новости
                    li
                        router-link(to="/demo/lk/supports") Поддержка


</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style lang="scss">
    .caption-wrapper {
        padding: 0 !important;
    }

    .caption {
        &::after {
            display: none !important;
        }
    }

    .section {
        padding: 0 !important;
    }
</style>