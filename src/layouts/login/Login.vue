<template lang="pug">
    div
        sidebar-left-component(:active_ext="menu_active", v-on:closeMenu="closeMenu()", v-on:openMenu="toggleMenu('menu')", v-on:openSupportPopup="supportPopup = true")
        header-component(v-on:openMobileMenu="toggleMenu($event)", v-on:closeMobileMenu="closeMenu()", v-on:openPopup="openPopup($event)")
        error-panel-component
        router-view
</template>

<script>
  // Styles
  import '@/assets/css/modern-reset.min.css'
  import '@/assets/css/bootstrap.min.css'
  import '@/assets/css/style.css'
  import '@/assets/css/custom-style.css'

  import '@/assets/scss/index.scss'

  import HeaderComponent      from "@/components/template/Header";
  import ErrorPanelComponent  from "@/components/template/ErrorPanel";
  import SidebarLeftComponent from "@/components/template/SidebarLeft";

  export default {
    components: {
      HeaderComponent,
      ErrorPanelComponent,
      SidebarLeftComponent,
    },
    data() {
      return {
          menu_active: false,
      }
    },

    methods: {
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
    }

  }
</script>
