<template lang="pug">
    header.header
        a(:href="$appConfig.DOMAIN")
            .logo
                img.logo__img(src="@/assets/img/logo.svg")

        .header__right.header__right--mobile
            .btn-link-group
                template(v-if="checkLoggedIn()")
                    a.btn-link(:class="{ 'active':(mobile_menu == 'profile') }", @click="openMobileMenu('profile')")
                        svg.btn-link__icon(style="width: 20px;height: 20px;")
                            use(xlink:href="@/assets/img/btn-link.svg#profile")
                template(v-else)
                    a(:class="'btn-link'" :href="this.$appConfig.MEMBERDOMAIN+'/login'" @click="closeMobileMenu()")
                        svg.btn-link__icon
                            use(xlink:href="@/assets/img/sprite.svg#profile")

                a.btn-link(:class="{ 'active':(mobile_menu == 'menu') }", @click="openMobileMenu('menu')")
                    svg.btn-link__icon(style="width: 19px;height: 19px;")
                        use(xlink:href="@/assets/img/btn-link.svg#menu")


        template(v-if="checkLoggedIn()")
            .header__right.header__right--desktop

                template(v-if="$appConfig.SUBDOMAIN == 'MEMBER'")
                    .btn-link-group
                        a.btn-link(@click="openPopup('popup_replenish'); closeMobileMenu()")
                            svg.btn-link__icon(style="width: 19px;height: 19px;")
                                use(xlink:href="@/assets/img/btn-link.svg#card-up")
                        a.btn-link(@click="openPopup('popup_withdraw'); closeMobileMenu()")
                            svg.btn-link__icon(style="width: 19px;height: 19px;")
                                use(xlink:href="@/assets/img/btn-link.svg#card-right")
                        router-link(:class="'btn-link'" :to="'/member/history'" v-on:click.native="closeMobileMenu()")
                            svg.btn-link__icon
                                use(xlink:href="@/assets/img/btn-link.svg#interface")
                    .header-info
                        .header-info__caption Баланс:
                        .header-info__value {{ $helpers.MONEY_HELPER.preparePrice(profile_balance__computed) }} р

                .user
                    template(v-if="$appConfig.SUBDOMAIN == 'ADMIN'")
                        router-link(:class="'btn-link profile'" :to="'/admin/profile'" v-on:click.native="closeMobileMenu()")
                            template(v-if="profile_img__computed == null")
                                svg.user__img(style="width: 20px;height: 20px;", )
                                    use(xlink:href="@/assets/img/btn-link.svg#profile")
                            template(v-else)
                                img.user__img(:src="profile_img__computed")
                    template(v-else)
                        router-link(:class="'btn-link profile'" :to="'/member/profile'" v-on:click.native="closeMobileMenu()")
                            template(v-if="profile_img__computed == null")
                                svg.user__img(style="width: 20px;height: 20px;", )
                                    use(xlink:href="@/assets/img/btn-link.svg#profile")
                            template(v-else)
                                img.user__img(:src="profile_img__computed")

                    .user__info
                        .user_name {{ profile_name__computed }}
                        .user__status {{ profile_role__computed }}

                .btn-link-group
                    template(v-if="$appConfig.SUBDOMAIN == 'ADMIN'")
                        router-link(:class="'btn-link'" :to="'/admin/profile/edit'" v-on:click.native="closeMobileMenu()")
                            svg.btn-link__icon
                                use(xlink:href="@/assets/img/btn-link.svg#setting")
                    template(v-else)
                        router-link(:class="'btn-link'" :to="'/member/profile/edit'" v-on:click.native="closeMobileMenu()")
                            svg.btn-link__icon
                                use(xlink:href="@/assets/img/btn-link.svg#setting")

                    a(:class="'btn-link'" href="/logout" @click="closeMobileMenu()")
                        svg.btn-link__icon
                            use(xlink:href="@/assets/img/btn-link.svg#exit")

        template(v-else)
            .header__right.header__right--desktop
                .btn-link-group
                    a(:class="'navbar-exit'" :href="this.$appConfig.MEMBERDOMAIN+'/login'" @click="closeMobileMenu()")
                        svg.nav-icon
                            use(xlink:href="@/assets/img/sprite.svg#profile")
                        span.navbar-exit__text Личный кабинет

</template>

<script>
    import authFunctions from "@/functions/auth/authFunctions";

    export default {
        name: "Header",
        data() {
            return {
                mobile_menu: ''
            }
        },

        computed: {
            profile_role__computed(){

                let profile_data = this.$store.getters['profile/GET_PROFILE'];
                let role_code = '';

                if(profile_data.hasOwnProperty('role_code')){
                    if(profile_data['role_code'] != null){
                        role_code = profile_data['role_code'];
                    }
                }

                let result = '';
                switch (role_code) {
                    case 'ADMIN':
                        result = 'Администратор';
                        break;
                    case 'EXPERT':
                        result = 'Эксперт';
                        break;
                    case 'USER':
                        result = 'Клиент';
                        break;
                }

                return result;

            },
            profile_balance__computed(){
                let profile_data = this.$store.getters['profile/GET_PROFILE'];
                let result = '';

                if(profile_data.hasOwnProperty('balance')){
                    if(profile_data['balance'] != null){
                        result = profile_data['balance'];
                    }
                }
                return result;
            },
            profile_name__computed(){

                let profile_data = this.$store.getters['profile/GET_PROFILE'];

                let result_name = '';

                if(profile_data.hasOwnProperty('last_name')){
                    if(profile_data['last_name'] != null){
                        result_name += profile_data['last_name'];
                    }
                }
                if(profile_data.hasOwnProperty('first_name')){
                    if(profile_data['first_name'] != null){
                        result_name += ' ' + profile_data['first_name'];
                    }
                }

                return result_name;
            },
            profile_img__computed(){

                let profile_data = this.$store.getters['profile/GET_PROFILE'];
                let img = null;

                if(profile_data.hasOwnProperty('img_avatar')){
                    if(profile_data['img_avatar'] != null){
                        img = profile_data['img_avatar'];
                    }
                }

                return img;
            },
        },
        methods: {
            openMobileMenu(menu_name){
                this.$emit('openMobileMenu', menu_name);
                this.mobile_menu = menu_name
            },
            closeMobileMenu(){
                this.$emit('closeMobileMenu');
            },
            openPopup(popup_name){
                this.$emit('closeMenu');
                this.$emit('openPopup', popup_name);
            },
            checkLoggedIn() {
                return authFunctions.loggedIn();
            },
        }
    }
</script>

<style lang="scss">
    .logo {
        width: 154px;
        height: 40px;
        @media (max-width: 1199px) {
            width: 135px;
            height: 34px;
        }
    }
    .header {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        width: calc(100% - 65px);
        height: 80px;
        z-index: $compositionHeader;
        background: #ffffff;
        border-bottom: 2px solid #e6eef5;
        padding: 0 60px;
        @media (max-width: 1199px) {
            z-index: $compositionHeaderMobile;
            width: 100%;
            height: 74px;
            box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
            border-bottom: 0;
            padding: 0 20px 0 25px;
        }
        &-open {
            @media (min-width: 1200px) {
                display: none;
            }
            @media (max-width: 1199px) {
                padding: 30px 25px;
                position: absolute;
                top: 74px;
                left: 0;
                background: #ffffff;
                width: 100%;
                z-index: $compositionSidebarMobile;
                transition: .2s ease-out;
                &:not(.active) {
                    transform: translateX(-100%);
                }
            }
        }
        &__right {
            display: flex;
            align-items: center;
            margin-left: auto;
            &--desktop {
                @media (max-width: 1199px) {
                    display: none;
                }
            }
            &--mobile {
                @media (min-width: 1200px) {
                    display: none;
                }
            }
        }
        &-info {
            margin: 0 25px;
            font-size: 14px;
            font-weight: 300;
            color: #353535;
            @media (max-width: 1199px) {
                margin: 35px 0 0;
            }
            &__value {
                margin-top: -3px;
                font-size: 22px;
                font-weight: bold;
                color: #4f4f4f;
                @media (max-width: 1199px) {
                    font-size: 30px;
                    color: #00b594;
                }
            }
        }
    }

    .user {
        font-size: 14px;
        font-weight: 400;
        margin-right: 30px;
        display: flex;
        margin-left: 80px;
        @media (max-width: 1199px) {
            margin: 0 0 10px;
            align-items: center;
        }
        &__status {
            font-weight: bold;
            color: #00a8ff;
            margin-top: -4px;
        }
        &__img {
            width: 35px;
            height: 35px;
            object-fit: cover;
            object-position: center;


            @media (max-width: 1199px) {
                width: 45px;
                height: 45px;
            }
        }
    }
</style>