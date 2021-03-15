<template lang="pug">
    aside.sidebar(:class="{'active': active__computed}")
        a.menu(@click="openMenu()")
            svg.menu__icon
                use(xlink:href="@/assets/img/sidebar.svg#menu")
        nav.sidebar__list

            template(v-if="menuType === 'ROUTE'")
                template(v-for="(vMenu, kMenu) in menu[menuShow]")
                    router-link.sidebar__item(v-bind:key="kMenu" :class="{ 'active': checkMenuActive(vMenu['url']) }" :to="vMenu['url']" v-on:click.native="closeMenu()")
                        svg.sidebar__icon
                            use(:xlink:href="vMenu['icon_link']+vMenu['icon_hash']")
                        span.sidebar__text {{ vMenu['name'] }}
            template(v-else)
                template(v-for="(vMenu, kMenu) in menu[menuShow]")
                    a.sidebar__item(v-bind:key="kMenu" :class="{ 'active': checkMenuActive(vMenu['url']) }" :href="$appConfig.DOMAIN + vMenu['url']" @click="closeMenu()")
                        svg.sidebar__icon
                            use(:xlink:href="vMenu['icon_link']+vMenu['icon_hash']")
                        span.sidebar__text {{ vMenu['name'] }}

</template>

<script>

    import authFunctions from '@/functions/auth/authFunctions'

    export default {
        name: "SidebarLeft",
        props:{
            active_ext: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                active: false,
                menuType: 'ROUTE',
                menuShow: 'PUBLIC',
                menu: {

                    PUBLIC: {
                        'main': {
                            name: 'Главная',
                            url: '/',
                            icon_link: require('@/assets/img/sidebar.svg'),
                            icon_hash: '#main',
                        },
                        'about': {
                            name: 'О сервисе',
                            url: '/about',
                            icon_link: require('@/assets/img/sidebar.svg'),
                            icon_hash: '#about',
                        },
                        'news': {
                            name: 'Новости',
                            url: '/news',
                            icon_link: require('@/assets/img/sidebar.svg'),
                            icon_hash: '#news',
                        },
                        'for_experts': {
                            name: 'Экспертам',
                            url: '/information/for-experts',
                            icon_link: require('@/assets/img/sidebar.svg'),
                            icon_hash: '#forexperts',
                        },
                        'for_partners': {
                            name: 'Партнерам',
                            url: '/information/for-partners',
                            icon_link: require('@/assets/img/sidebar.svg'),
                            icon_hash: '#forpartners',
                        },
                        'contacts': {
                            name: 'Контакты',
                            url: '/contacts',
                            icon_link: require('@/assets/img/sidebar.svg'),
                            icon_hash: '#contacts',
                        },
                    },

                    MEMBER: {

                    },

                    ADMIN: {

                    }
                },
            }
        },

        computed: {
            active__computed(){
                return this.active_ext;
            }
        },

        methods: {
            openMenu(){
                this.$emit('openMenu', !this.active_ext);
            },
            closeMenu(){
                this.$emit('closeMenu');
            },
            openSupportPopup(){
                this.$emit('openSupportPopup');
            },
            checkMenuActive(menu_path){
                let result = false;
                let current_route_path = this.$route.path;
                if(current_route_path == menu_path){result = true;}
                return result;
            },
            checkloggedIn(){
                return authFunctions.loggedIn();
            }
        },

        async mounted() {
            if(this.checkloggedIn() && this.$appConfig.SUBDOMAIN !== 'PUBLIC'){
                this.menuType = 'ROUTE';
                this.menuShow = this.$appConfig.SUBDOMAIN;
            } else {
                if(this.$appConfig.SUBDOMAIN === 'PUBLIC'){
                    this.menuType = 'ROUTE';
                } else {
                    this.menuType = 'HREF';
                }
            }
        },


    }
</script>

<style lang="scss" scoped>
    .btn-link-group {
        @media (max-width: 1199px) {
            display: none;
        }

    }
    .btn-link-group {
        position: relative;
        margin: auto auto 0;
        @media (min-width: 1200px) {
            margin-bottom: 120px;
            margin-left: 15px;
        }
    }
    .btn-link {
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
    .menu {
        cursor: pointer;
        @media (max-width: 1199px) {
            display: none;
        }
        &__icon {
            width: 65px;
            height: 78px;
            padding: 27px 22px;
            fill: #00a8ff;
        }
    }
    .sidebar .sidebar__list {
        height: calc(100vh - 74px);
        overflow: auto;
    }
    .sidebar {
        display: flex;
        flex-direction: column;
        z-index: $compositionSidebar;
        position: fixed;
        top: 0;
        left: 0;
        width: 300px;
        height: 100vh;
        background: #ffffff;
        transition: .2s ease-out;
        box-shadow: 10px 0 20px rgba(0, 0, 0, 0.05);

        @media (min-width: 1200px) {
            //z-index: $compositionSidebarMobile;
            &:not(.active) {
                width: 65px;
                .sidebar__text {
                    opacity: 0;
                    transform: translate(0, -50%);
                }
            }
        }

        @media (max-width: 1199px) {
            top: 74px;
            height: auto;
            width: 100%;

            padding: 15px 0;
            &:not(.active) {
                transform: translateX(-100%);
            }
        }

        &__item {
            height: 65px;
            position: relative;
            display: block;
            cursor: pointer;
            @media (max-width: 1199px) {
                font-size: 16px;
            }
            &::before {
                content:'';
                position: absolute;
                top: 50%;
                left: 62px;
                transform: translateY(-50%);
                display: block;
                width: 4px;
                height: 35px;
                background: #f23b78;
                border-radius: 3px 0 0 3px;
                opacity: 0;
                transition: opacity .2s ease-out;
                @media (max-width: 1199px) {
                    display: none;
                }
            }
            &:not(:last-child) {
                margin-bottom: 5px;
            }
            &:hover {
                .sidebar__icon {
                    fill: #00a8ff;
                }
            }
            &.active {
                color: inherit;
                @media (max-width: 1199px) {
                    fill: #00a8ff;
                }
                &::before {
                    opacity: 1;
                }
                .sidebar__icon {
                    fill: #f23b78;
                    @media (max-width: 1199px) {
                        fill: #00a8ff;
                    }
                }
            }
        }

        &__text {
            position: absolute;
            top: 50%;
            left: 65px;
            transform: translate(25px, -50%);
            transition: .2s ease-out;
            @media (max-width: 1199px) {
                left: 50px;
            }
        }

        &__icon {
            position: relative;
            width: 23px;
            height: 23px;
            top: 20px;
            left: 20px;
            fill: #a1bcdc;
            transition: fill .2s ease-out;
            @media (max-width: 1199px) {
                top: 17px;
                left: 25px;
                width: 27px;
                height: 27px;
            }
        }

    }

    @media (max-width: 1199px) {
        aside.sidebar {
            height: 100vh;
        }
    }
    .sidebar__item {
        color: inherit;
    }
    .sidebar__item:hover {
        color: #00a8ff;
    }
</style>