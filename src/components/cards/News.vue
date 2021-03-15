<template lang="pug">
    .card-news
        template(v-if="data.fl_edit === true")
            .card-service__ctrl-group
                router-link(:style="{'color': data.news.news_categories_color}" class="card-service__ctrl" :to="{name:'admin.news.edit', params:{id:data.news.news_id}}")
                    svg.card-service__ctrl__edit
                        use(xlink:href="@/assets/img/main.svg#edit")
                .card-service__ctrl(@click="delNews(data.news.news_id)")
                    svg.card-service__ctrl__del
                        use(xlink:href="@/assets/img/main.svg#close")

        template(v-if="data.news.images.length")
        img.card-news__img(:src="data.news.images[0].url+data.news.images[0].news_images_url")
        .card-news__content
            .card-news__body
                .card-news__category {{data.news.news_categories_name}}

                template(v-if="$appConfig.SUBDOMAIN == 'ADMIN' && data.fl_edit === true")
                    router-link(:to="{name:'admin.news.item', params:{id:data.news.news_id}}")
                        .card-news__title {{data.news.news_title}}
                template(v-else-if="$appConfig.SUBDOMAIN == 'MEMBER' && data.fl_edit === true")
                    router-link(:to="{name:'member.news.item', params:{id:data.news.news_id}}")
                        .card-news__title {{data.news.news_title}}
                template(v-else)
                    router-link(:to="{name:'public.news.item', params:{id:data.news.news_id}}")
                        .card-news__title {{data.news.news_title}}

                .card-news__description
                    p {{data.news.news_short_description}}
            .card-news__footer
                .card-news__author
                    img.card-news__author__img(:src="'https://backend.finexpert.online'+data.news.users_img")
                    .card-news__author__content
                        .card-news__author__name {{data.news.users_first_name}} {{data.news.users_last_name}}
                        .card-news__author__date {{news_date}}
</template>

<script>
    export default {
        name: "News",
        props: {
            data: Object,
        },
        data() {
            return {
                news_date: '',
            }
        },
        methods: {
            async delNews(id){
                this.$parent.delNewsItem(id);
            }
        },
        async created() {
            this.news_date = window.moment(this.data.news.news_published_at).format('DD.MM.YYYY');
        }
    }
</script>

<style lang="scss" scoped>

    .card-service__ctrl-group {
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 5;
    }

    .card-news {
        background: #ffffff;
        box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        position: relative;
        padding: 18px;
        height: 490px;
        grid-row-end: span 3;
        z-index: 3;
        &__img {
            width: 100%;
            height: 195px;
            object-fit: cover;
            object-position: center;
            border-radius: 10px;
        }
        &__content {
            padding: 15px 0 0;
            display: flex;
            flex-direction: column;
            height: calc(100% - 195px);
        }
        &__category {
            font-size: 12px;
            color: #9f9f9f;
            font-weight: 400;
        }
        &__title {
            font-size: 18px;
            line-height: 22px;
            color: #353535;
            margin-bottom: 15px;
        }
        &__description {
            font-size: 12px;
            color: #676767;
            font-weight: 300;
            line-height: 22px;
            p {
                font-size: inherit;
                font-weight: inherit;
                line-height: inherit;
                color: inherit;
            }
        }
        &__body {
            max-height: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &__footer {
            flex-shrink: 0;
        }
        &__footer {
            border-top: 1px solid #E6EEF5;
            padding: 20px 0 0;
        }
        &__author {
            display: flex;
            align-items: center;
            &__img {
                width: 35px;
                height: 35px;
                border-radius: 5px;
                margin-right: 12px;
                -o-object-fit: cover;
                object-fit: cover;
                -o-object-position: center;
                object-position: center;
            }
            &__name {
                font-size: 14px;
                color: #353535;
            }
            &__date {
                font-size: 12px;
                color: #9f9f9f;
            }
        }

        @media (min-width: 576px) {
            &--sm {
                display: flex;
                padding: 12px;
                height: 150px;
                grid-column-end: span 2;
                grid-row-end: span 1;
                .card-news {
                    &__img {
                        flex-shrink: 0;
                        width: 138px;
                        height: 126px;
                        padding-bottom: 0;
                        margin-right: 20px;
                    }
                    &__content {
                        padding: 0;
                        display: block;
                        height: auto;
                    }
                    &__description {
                        display: none;
                    }
                    &__footer {
                        border-top: none;
                        padding: 0;
                    }
                }
            }
            &--md, &--lg {
                grid-column-end: span 2;
                .card-news {
                    &__title {
                        font-size: 24px;
                        line-height: 30px;
                        margin-top: 4px;
                        margin-bottom: 8px;
                    }
                    &__description {
                        font-size: 14px;
                        line-height: 27px;
                    }
                }
            }
        }

        @media (min-width: 1200px) {
            &--lg {
                grid-column: 1 / -1;
                display: flex;
                padding: 18px;
                height: 354px;
                .card-news {
                    &__img {
                        flex-shrink: 0;
                        width: 392px;
                        height: 318px;
                        padding-bottom: 0;
                        margin-right: 30px;
                    }
                    &__content {
                        padding: 15px 0 0;
                        height: 100%;
                    }
                    &__title {
                        font-size: 30px;
                        line-height: 36px;
                        margin-top: 4px;
                        margin-bottom: 12px;
                    }
                    &__description {
                        font-size: 14px;
                        line-height: 27px;
                    }
                }
            }
        }

    }

</style>