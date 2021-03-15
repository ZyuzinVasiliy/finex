<template lang="pug">
    .transaction
        .transaction__numb № 55578
        .transaction__user
            img.transaction__img(src="@/assets/img/bg.jpg")
            .transaction__item
                .transaction__title Клиент
                .transaction__name Иван Авунюшкин
        .transaction__item
            .transaction__title Сумма сделки
            .transaction__value 13 000 р
        .transaction__item
            .transaction__title Мой доход
            .transaction__value.color-pink + 3 000 р
</template>

<script>
    export default {
        name: "Transaction"
    }
</script>

<style lang="scss" scoped>
    .transaction {
        border: 2px solid #E6EEF5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        padding: 10px 20px 12px;
        color: #353535;
        @media (max-width: 767px) {
            flex-wrap: wrap;
        }
        &:not(:last-child) {
            margin-bottom: 10px;
        }
        &__user {
            display: flex;
            align-items: center;
            @media (max-width: 767px) {
                width: 100%;
                margin: 5px 0 10px;
            }
        }
        &__user &__item {
            @media (max-width: 767px) {
                width: 100%;
            }
        }
        &__img {
            width: 30px;
            height: 30px;
            border-radius: 5px;
            object-fit: cover;
            object-position: center;
            margin-right: 12px;
        }
        &__title {
            font-size: 12px;
            color: #9F9F9F;
        }
        &__item {
            @media (max-width: 767px) {
                width: 50%;
            }
        }
        &__numb {
            font-size: 14px;
            color: #9f9f9f;
            font-weight: 400;
            @media (max-width: 767px) {
                width: 100%;
            }
        }
        &__value {
            font-size: 14px;
            font-weight: bold;
        }
        &__name {
            font-size: 14px;
            font-weight: 400;
        }
    }
</style>