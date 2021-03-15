<template lang="pug">
    div
        support-popup(:class="{active: supportPopup}" @popupEvent="supportPopup = $event")
        support-info-popup(:class="{active: supportInfoPopup__computed}" @popupEvent="closePopup('popup_user_info')")

        sidebar-left-component(:active_ext="menu_active", v-on:closeMenu="closeMenu()", v-on:openMenu="toggleMenu('menu')", v-on:openSupportPopup="supportPopup = true")

        header-new-component(v-on:openMobileMenu="toggleMenu($event)", v-on:closeMobileMenu="closeMenu()", v-on:openPopup="openPopup($event)")

        .header-open(:class="{ 'active':profile_active }")
            .user
                template(v-if="$appConfig.SUBDOMAIN == 'ADMIN'")
                    router-link(:class="'btn-link'" :to="'/admin/profile/edit'" v-on:click.native="closeMenu()")
                        template(v-if="profile_img__computed == null")
                            img.user__img(src="@/assets/img/blank-profile.png")
                        template(v-else)
                            img.user__img(:src="profile_img__computed")
                template(v-else)
                    router-link(:class="'btn-link'" :to="'/member/profile/edit'" v-on:click.native="closeMenu()")
                        template(v-if="profile_img__computed == null")
                            img.user__img(src="@/assets/img/blank-profile.png")
                        template(v-else)
                            img.user__img(:src="profile_img__computed")

                .user__info
                    .user_name {{ profile_name__computed }}
                    .user__status {{ profile_role__computed }}
            .btn-link-group
                template(v-if="$appConfig.SUBDOMAIN == 'ADMIN'")
                    router-link(:class="'btn-link'" :to="'/admin/profile/edit'" v-on:click.native="closeMenu()")
                            svg.btn-link__icon
                                use(xlink:href="@/assets/img/btn-link.svg#setting")
                template(v-else)
                    router-link(:class="'btn-link'" :to="'/member/profile/edit'" v-on:click.native="closeMenu()")
                        svg.btn-link__icon
                            use(xlink:href="@/assets/img/btn-link.svg#setting")
                a(:class="'btn-link'" href="/logout" click="closeMenu()")
                    svg.btn-link__icon
                        use(xlink:href="@/assets/img/btn-link.svg#exit")

            template(v-if="$appConfig.SUBDOMAIN !== 'ADMIN' && checkLoggedIn()")
                .header-info
                    .header-info__caption Баланс:
                    .header-info__value {{ $helpers.MONEY_HELPER.preparePrice(profile_balance__computed) }} р
                .btn-link-group
                    a.btn-link(@click="openPopup('popup_replenish')")
                        svg.btn-link__icon(style="width: 19px;height: 19px;")
                            use(xlink:href="@/assets/img/btn-link.svg#card-up")
                    a.btn-link(@click="openPopup('popup_withdraw')")
                        svg.btn-link__icon(style="width: 19px;height: 19px;")
                            use(xlink:href="@/assets/img/btn-link.svg#card-right")
                    router-link(:class="'btn-link'" :to="'/member/history'" v-on:click.native="closeMenu()")
                        svg.btn-link__icon
                            use(xlink:href="@/assets/img/btn-link.svg#interface")


        panel-component
        error-panel-component

        //popupsupportPopup
        balance-replenish-popup(:class="{active: replenishPopup}" @closePopup="closePopup('popup_replenish')")
        balance-withdraw-popup(:class="{active: withdrawPopup}" @closePopup="closePopup('popup_withdraw')")

        router-view

</template>

<script>

    import '@/assets/css/modern-reset.min.css'
    import '@/assets/css/bootstrap.min.css'
    import '@/assets/css/style.css'
    import '@/assets/css/custom-style.css'

    import '@/assets/scss/index.scss'
    import '@/assets/scss/custom-index.scss'

    import PanelComponent from "@/components/template/Panel";
    import ErrorPanelComponent from "@/components/template/ErrorPanel";

    import SidebarLeftComponent from "@/components/template/SidebarLeft";
    import HeaderNewComponent from "@/components/template/Header";

    import SupportPopup from "@/components/popup/SupportPopup";
    import SupportInfoPopup from "@/components/popup/SupportInfoPopup";

    import authFunctions from '@/functions/auth/authFunctions'

    import BalanceReplenishPopup from "@/components/popup/BalanceReplenishPopup";
    import BalanceWithdrawPopup from "@/components/popup/BalanceWithdrawPopup";

    export default {
        components: {
            SidebarLeftComponent,
            HeaderNewComponent,
            PanelComponent,
            ErrorPanelComponent,
            SupportPopup,
            SupportInfoPopup,
            BalanceReplenishPopup,
            BalanceWithdrawPopup,
        },

        data() {
            return {
                menu_active: false,
                profile_active: false,
                supportPopup: false,
                replenishPopup: false,
                withdrawPopup: false
            }
        },

        async mounted() {
            // await this.$store.dispatch('auth/CHECK_SCOPE')
        },

        async created() {
            if(this.checkLoggedIn() !== false){
                await this.$store.dispatch('profile/FETCH_PROFILE', null);
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

            supportInfoPopup__computed(){
                return this.$store.getters['popup_user_info/GET_STATUS_OPEN']
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

            checkLoggedIn() {
                return authFunctions.loggedIn();
            },

            toggleMenu(menu_name){
                if(menu_name == 'menu'){

                    if(this.menu_active == true){
                        this.menu_active = false;
                    }
                    else{
                        this.menu_active = true;
                    }
                    this.profile_active = false;
                }
                else{
                    if(this.profile_active == true){
                        this.profile_active = false;
                    }
                    else{
                        this.profile_active = true;
                    }

                    this.menu_active = false;
                }
            },

            closeMenu(){
                this.menu_active = false;
                this.profile_active = false;
            },

            closePopup(popup_name){
                console.log(popup_name);
                switch (popup_name) {
                    case 'popup_user_info':
                        this.$store.dispatch('popup_user_info/SET_CLOSE');
                        break;

                    case 'popup_replenish':
                        this.replenishPopup = false;
                        break;

                    case 'popup_withdraw':
                        this.withdrawPopup = false;
                        break;

                }
            },

            openPopup(popup_name){
                this.closeMenu();
                switch (popup_name) {
                    case 'popup_replenish':
                        this.withdrawPopup = false;
                        this.replenishPopup = true;
                        break;

                    case 'popup_withdraw':
                        this.replenishPopup = false;
                        this.withdrawPopup = true;
                        break;
                }
            }
        }
    }
</script>

<style>
    .section {
        margin-bottom: 80px !important;
    }
    .show-all {
        cursor: pointer;
    }
    .header-open {
        height: calc(100% - 74px);
    }
</style>