<template lang="pug">
    main.block-light
        .container
            .page-map
                .page-map__text
                    .caption-wrapper
                        h2.caption
                            .caption__nowrap Контакты
                    .subcaption Название отдела / подразделения
                    label.form-group
                        b.form-title Адрес:
                        .fz-18.mt-2
                            | г. Москва, ул. Ленина, 51 (вход с торца здания без вывески)
                    label.form-group
                        b.form-title Телефон:
                        .fz-18.mt-2
                            a.form-phone(href="tel:+79999999999") +7 (999) 999 - 99 - 99
                    label.form-group
                        b.form-title E-mail:
                        .fz-18.mt-2
                            a.form-phone(href="mailto:pochta1111111@gmail.com") pochta1111111@gmail.com
                    .btn.btn-lg(@click="action()") Заказать звонок

                    .line-separator

                    .subcaption Название отдела / подразделения
                    label.form-group
                        b.form-title Адрес:
                        .fz-18.mt-2
                            | г. Москва, ул. Ленина, 51 (вход с торца здания без вывески)
                    label.form-group
                        b.form-title Телефон:
                        .fz-18.mt-2
                            a.form-phone(href="tel:+79999999999") +7 (999) 999 - 99 - 99
                    label.form-group
                        b.form-title E-mail:
                        .fz-18.mt-2
                            a.form-phone(href="mailto:pochta1111111@gmail.com") pochta1111111@gmail.com
                    .btn.btn-lg(@click="action()") Заказать звонок
                .map
                    .map__img
                    #map
                        yandex-map(:settings="settings" :coords="coords" zoom=12)
</template>

<script>

    import { yandexMap, ymapMarker } from 'vue-yandex-maps'


    export default {
        name: "Contacts",
        components: { yandexMap, ymapMarker },
        data() {
            return {
                settings: {
                    apiKey: '8313f05c-9303-478c-bbdf-fd648f2e72c4',
                    lang: 'ru_RU',
                    coordorder: 'latlong',
                    version: '2.1'
                },
                coords: [54.82896654088406, 39.831893822753904],
                placemarks: [
                    {
                        coords: [54.82896654088406, 39.831893822753904],
                        properties: {
                            balloonContentBody: 'asdfd',
                            balloonContentFooter: '1',
                            balloonContentHeader: '1'
                        },
                        clusterName: '1',
                        markerId: '1'
                    },
                    {
                        coords: [54.82796654088306, 39.831893822753904],
                        properties: {
                            balloonContentBody: 'asdfasdf',
                            balloonContentFooter: '1',
                            balloonContentHeader: '1'
                        },
                        clusterName: '1',
                        markerId: '2'
                    },
                    {
                        coords: [54.82996654088506, 39.831893822753904],
                        properties: {
                            balloonContentBody: 'asdfasdf',
                            balloonContentFooter: '1',
                            balloonContentHeader: '1'
                        },
                        clusterName: '1',
                        markerId: '3'
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        font-size: 18px;
    }
    .block-light {
        padding-bottom: 0;
    }
    .page-map {
        display: flex;
        @media (max-width: 991px)  {
            display: block;
        }
    }
    .page-map__text {
        width: 500px;
        margin-right: 30px;
        flex-shrink: 0;
    }
    #map {
        margin-top: 100px;
        width: calc((100vw - 1140px) / 2 + (1140px - 530px - 25px));
        height: calc(100vh - 120px);
        @media (max-width: 1299px) and (min-width: 1200px) {
            width: calc((100vw - 1075px) / 2 + (1075px - 530px - 25px));
        }
        @media (max-width: 1199px) and (min-width: 992px) {
            width: calc((100vw - 830px) / 2 + (830px - 530px - 25px));
        }
        @media (max-width: 991px)  {
            width: calc(100% + 30px);
            margin-left: -15px;
            height: 315px;
        }
    }

    .ymap-container {
        height: 100%;
    }
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


    .line-separator {
        width: 100%;
        height: 1px;
        background: #E6EEF5;
        margin: 55px 0 50px;
    }
    .form-phone {
        color: #353535;
        text-decoration: none !important;
    }
    .form-title {
        color: #A1A4A7;
    }
</style>