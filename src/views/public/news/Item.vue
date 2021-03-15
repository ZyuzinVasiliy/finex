<template lang="pug">
    main.block-light
        .container
            router-link(:class="'btn-prev'" :to="{name:'public.news.index'}")
                svg.btn-prev__svg
                    use(xlink:href='@/assets/img/sprite.svg#prev')
                | назад
            .caption-wrapper
                h2.caption {{news_title}}

            .news
                .news__slider
                    .news__slider__content
                        template(v-if="news_images !== null")
                            img.news__slider__item(:src="news_images[0].url+news_images[0].news_images_url")
                    .news__slider__ctrl
                .news__content
                    .news__text
                        p
                            | {{news_info}}

                    .news__info
                        .news__info__group
                            .news__like
                                .news__like__icon
                                    svg.news__like__icon__svg
                                        use(xlink:href="@/assets/img/main.svg#like")
                                .news__like__group
                                .news__like__ava-group
                                    img.news__like__ava(src="@/assets/img/bg.jpg")
                                    img.news__like__ava(src="@/assets/img/bg.jpg")
                                    img.news__like__ava(src="@/assets/img/bg.jpg")
                                | +56
                            .news__view
                                .news__view__icon
                                    svg.news__view__icon__svg
                                        use(xlink:href="@/assets/img/main.svg#eye")
                                | {{news_qnt_views}}

                        .news__info__line
                        .news__info__date {{news_date}}
                        .category(:style="{color: news_category_color}")
                            .category__icon
                                //.category__check
                                    svg.category__check__icon
                                        use(xlink:href="@/assets/img/main.svg#check")
                                svg.category__icon__svg
                                    use(:xlink:href="category_svg+news_category_img")
                            router-link(:class="'category__text'" :to="{name:'public.news.index'}") {{news_category_name}}

                        .news__info__line
                        .news__author
                            img.news__author__img(:src="news_author_img")
                            .news__author__content
                                .news__author__description Новость от эксперта
                                .news__author__title {{news_author_name}}
                        .news__btn-group
                            .news__btn
                                | Вопрос эксперту
                            router-link(class="news__btn news__btn--blue" :to="{name:'public.experts.item', params:{id:news_author_id}}")
                                | Перейти к эксперту

            template(v-if="news__computed.length > 0")
                .caption-wrapper
                    h2 Другие новости
                .card-news-wrapper
                    template(v-for="news in news__computed")
                        news-card(:data="{news: news}")
                a(v-if="news_page < news__pagination__computed.last_page" class="show-all" @click="showNewsMore()") Показать еще


        .bg.bg--mini.bg--blue
            .container
                .block-form.block-form--mini
                    .block-form__content
                        h2.caption
                            | Подпишитесь на новости от экспертов
                        .block-form__form
                            label.custom-control.custom-checkbox.mb-5.mt-2
                                input.custom-control-input(type='checkbox' checked)
                                .custom-control-label.d-flex.align-items-center
                                    img.form-ava-mini(:src="news_author_img")
                                    span.fz-16 Подписаться только на новости эксперта: {{this.news_author_name}}
                            label.form-group
                                .form-title E-mail
                                input.form-control(type='text')
                            label.custom-control.custom-checkbox.mb-4.mt-2
                                input.custom-control-input(type='checkbox')
                                .custom-control-label
                                    = 'Я ознакомился и согласен с '
                                    a.link(target='_blank', href='https://finexpert.online/src/pdf/user_agreement.pdf') условиями
                                    = ' обработки'
                                    br
                                    | персональных данных
                            button.block-form__btn Подписаться
                    .block-form__img
                        img.block-form__img__src(src="@/assets/img/form.jpg")

</template>

<script>
import '@/assets/css/modern-reset.min.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/custom-style.css'

import '@/assets/scss/index.scss'

import expertCard from '@/components/cards/Expert';
import newsCard from '@/components/cards/News';
import authFunctions from "@/functions/auth/authFunctions";

export default {

    name: "Main",

    components: {
        newsCard,
    },

    watch: {
        async '$route.params.id'() {

            this.news_id = this.$route.params.id ? this.$route.params.id : null;

            await this.$store.dispatch('news/FETCH_ITEM', {queryParams:{id:this.news_id, type:''}});

            let news = this.news__item__computed;

            this.news_title          = news.news_title;
            this.news_info           = news.news_description;
            this.news_date           = window.moment(news.news_published_at).format('DD.MM.YYYY');
            this.news_author_id      = news.users_id;
            this.news_author_img     = 'http://api.beta.finexpert.online' + news.users_img;
            this.news_author_name    = news.users_first_name+' '+news.users_last_name;
            this.news_images         = news.images;
            this.news_qnt_views      = news.news_qnt_views;
            this.news_category_img   = news.news_categories_icon;
            this.news_category_color = news.news_categories_color;
            this.news_category_name  = news.news_categories_name;
            this.news_page           = 1;

            let queryParams = this.$helpers.URL_HELPER.parseQueryParam(this.parsePaginationPage());

            queryParams['type']  = '';
            queryParams['limit'] = 8;
            if(this.$route.query.hasOwnProperty('category_id')){
                if(this.$route.query['category_id'] != null && this.$route.query['category_id'] != ''){
                    this.select_category_id = this.$route.query['category_id'];
                    queryParams['category_id'] = this.select_category_id;
                }
            }

            await this.$store.dispatch('news/FETCH_LIST', {queryParams});

        },
    },

    data() {
        return {
            news_id             : '',
            news_title          : '',
            news_info           : '',
            news_date           : '',
            news_author_id      : '',
            news_author_img     : '',
            news_author_name    : '',
            news_images         : null,
            news_qnt_views      : '',
            news_category_img   : '',
            news_category_color : '',
            news_category_name  : '',
            category_svg:       require('@/assets/img/category.svg'),
            news_page           : 1
        }
    },

    computed: {
        news__item__computed(){
            return this.$store.getters['news/GET_ITEM'];
        },
        news__computed(){
            return this.$store.getters['news/GET_ITEMS'];
        },
        news__pagination__computed(){
            return this.$store.getters['news/GET_PAGINATION'];
        },
    },

    async created(){

        this.news_id = this.$route.params.id ? this.$route.params.id : null;

        await this.$store.dispatch('news/FETCH_ITEM', {queryParams:{id:this.news_id, type:''}});

        let news = this.news__item__computed;

        this.news_title          = news.news_title;
        this.news_info           = news.news_description;
        this.news_date           = window.moment(news.news_published_at).format('DD.MM.YYYY');
        this.news_author_id      = news.users_id;
        this.news_author_img     = 'http://api.beta.finexpert.online' + news.users_img;
        this.news_author_name    = news.users_first_name+' '+news.users_last_name;
        this.news_images         = news.images;
        this.news_qnt_views      = news.news_qnt_views;
        this.news_category_img   = news.news_categories_icon;
        this.news_category_color = news.news_categories_color;
        this.news_category_name  = news.news_categories_name;

        let queryParams = this.$helpers.URL_HELPER.parseQueryParam(this.parsePaginationPage());

        queryParams['type'] = '';
        if(this.$route.query.hasOwnProperty('category_id')){
            if(this.$route.query['category_id'] != null && this.$route.query['category_id'] != ''){
                this.select_category_id = this.$route.query['category_id'];
                queryParams['category_id'] = this.select_category_id;
            }
        }

        queryParams['limit'] = 8;
        await this.$store.dispatch('news/FETCH_LIST', {queryParams});

    },

    methods: {
        checkLoggedIn() {
            return authFunctions.loggedIn();
        },

        async showNewsMore(){
            this.news_page++;
            let queryParams = {
                type    : '',
                limit   :  8,
                page    : this.news_page,
                fl_add  : true
            }
            await this.$store.dispatch('news/FETCH_LIST', {queryParams});
        },

        // вспомогательные методы
        // разбираем адресную строку
        parsePaginationPage(){
            return this.$route.query.page;
        },
        parseQueryParam(page) {
            let queryParams = {};
            if (page !== undefined) {
                queryParams = {
                    page: page
                }
            }
            return queryParams;
        },
    },

}
</script>

<style lang="scss" scoped>
    .news__text {
        width: 100%
    }
    .news__author__img, .form-ava-mini {
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
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
</style>