<template lang="pug">
    main.block-light
        .container
            .caption-wrapper
                h2.caption
                    .caption__nowrap Новости
            .filter
                label.form-group(style="width:100%")
                    svg.form-search-icon
                        use(xlink:href="@/assets/img/main.svg#search")
                    input.form-control(type='search' v-model='search' placeholder='Поиск по ключевому слову')
                    svg.form-clear(@click="search = ''")
                        use(xlink:href="@/assets/img/sprite.svg#close")

            .section
                .section__caption Категории
                    .section__toggle
                        .section__toggle__text свернуть
                        svg.section__toggle__icon
                            use(xlink:href="@/assets/img/main.svg#arrow-down")
                .section__content
                    .row
                        .col-12.col-md-6(v-for="category in categories__computed")
                            .category(:style="{'color': category.color}")
                                .category__icon(@click="selectCategory(category['id'])")
                                    template(v-if="category['id'] == select_category_id")
                                        .category__check
                                            svg.category__check__icon
                                                use(xlink:href="@/assets/img/main.svg#check")
                                    svg.category__icon__svg(:width="20" :height="20")
                                        use(:xlink:href="category_svg+category.icon")
                                .category__text(@click="selectCategory(category['id'])") {{ category.name }}

            .caption-wrapper
                template(v-if="checkLoggedIn() && $appConfig.SUBDOMAIN == 'ADMIN'")
                    router-link(class="btn btn-primary float-right btn__add-classifier" :to="{name:'admin.news.add'}")
                        span.btn__add-classifier__icon +
                        | Добавить новость
                template(v-else-if="checkLoggedIn() && $appConfig.SUBDOMAIN == 'MEMBER'")
                    router-link(class="btn btn-primary float-right btn__add-classifier" :to="{name:'member.news.add'}")
                        span.btn__add-classifier__icon +
                        | Добавить новость
                h2.caption
                    .caption__nowrap
                        | Найдено
                        span {{news__pagination__computed.total_item_count}}
                        = ' новостей'

            template(v-if="news__computed.length > 0")
                .card-news-wrapper
                    template(v-for="(news, index) in news__computed")
                        template(v-if="index == 0")
                            news-card.card-news--lg(:data="{news:news, fl_edit: false}")
                        template(v-if="index == 1")
                            news-card.card-news--md(:data="{news:news, fl_edit: false}")
                        template(v-if="index > 1 && index <= 5")
                            news-card(:data="{news:news, fl_edit: false}")
                        template(v-if="index > 5")
                            news-card.card-news--sm(:data="{news:news, fl_edit: false}")

            template(v-else)
                | Список новостей в настоящий момент пуст

            template(v-if="news__computed.length > 0")
                pagination-component(:pagination="news__pagination__computed" @eventClick="paginateClick($event)")


            h2(style="padding-top: 100px") Топ экспертов уже готовых вам помочь
            .row
                .col-12.col-sm-6.col-md-4.col-xl-3(v-for="expert in experts__computed")
                    expert-card(:data="expert")

            router-link(:class="'show-all'" :to="{name:'public.experts.index'}") Показать всех

        .bg.bg--mini.bg--blue
            .container
                .block-form.block-form--mini
                    .block-form__content
                        h2.caption
                            | Подпишитесь на новости от экспертов
                        .block-form__form
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

    import vSelect from 'vue-select';
    import 'vue-select/dist/vue-select.css';
    import '@/assets/css/modern-reset.min.css'
    import '@/assets/css/bootstrap.min.css'
    import '@/assets/css/style.css'
    import '@/assets/css/custom-style.css'

    import '@/assets/scss/index.scss'

    import expertCard from '@/components/cards/Expert';
    import newsCard from '@/components/cards/News';
    import authFunctions from "@/functions/auth/authFunctions";
    import PaginationComponent from '@/components/pagination/Pagination'

    export default {
        name: "Main",
        components: {
            expertCard,
            newsCard,
            PaginationComponent,
            vSelect,
        },
        async created() {
            await this.$store.dispatch('experts/FETCH_LIST', {queryParams: null});
            let queryParams = this.$helpers.URL_HELPER.parseQueryParam(this.parsePaginationPage());

            queryParams['type'] = '';
            if(this.$route.query.hasOwnProperty('category_id')){
                if(this.$route.query['category_id'] != null && this.$route.query['category_id'] != ''){
                    this.select_category_id = this.$route.query['category_id'];
                    queryParams['category_id'] = this.select_category_id;
                }
            }

            await this.$store.dispatch('news_category/FETCH_LIST', {});
            await this.$store.dispatch('news/FETCH_LIST', {queryParams});
        },
        data() {
            return {
                search: '',
                select_category_id: null,
                category_svg: require('@/assets/img/category.svg'),
            }
        },

        computed: {
            experts__computed() {
                return this.$store.getters['experts/GET_ITEMS'];
            },
            categories__computed(){
                return this.$store.getters['news_category/GET_ITEMS'];
            },
            news__computed(){
                return this.$store.getters['news/GET_ITEMS'];
            },
            news__pagination__computed(){
                return this.$store.getters['news/GET_PAGINATION'];
            },
        },

        methods: {
            checkLoggedIn() {
                return authFunctions.loggedIn();
            },

            /// select category
            ///
            ///
            async selectCategory(category_id) {
                let queryParams = this.$helpers.URL_HELPER.parseQueryParam();
                if(this.select_category_id != null && this.select_category_id == category_id){
                    this.select_category_id = null
                    this.$helpers.URL_HELPER.removeParam('category_id', true);
                }
                else{
                    queryParams['category_id'] = category_id;
                    this.select_category_id = category_id;
                    this.$helpers.URL_HELPER.insertParam('category_id', category_id);
                }
                await this.$store.dispatch('news/FETCH_LIST', {queryParams: queryParams});
            },

            /// Pagination
            ///
            ///
            async paginateClick(page) {
                let queryParams = this.$helpers.URL_HELPER.parseQueryParam(page);
                this.$helpers.URL_HELPER.insertParam('page', page);
                await this.$store.dispatch('news/FETCH_LIST', {queryParams: queryParams});
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
    .card-news-wrapper {
        margin-bottom: 50px
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