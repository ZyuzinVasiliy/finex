<template lang="pug">
    .block-light
        .container
            ul.ul-pages
                li
                    router-link(to="/template/Messenger") /template/Messenger
                li
                    router-link(to="/template/Empty_screen1") /template/Empty_screen1
                li
                    router-link(to="/template/Empty_screen2") /template/Empty_screen2
</template>

<script>
    export default {
        name: "main.template.Pages"
    }
</script>

<style lang="scss" scoped>
    .ul-pages li {
        margin: 15px 0;
        list-style: none;
    }
    .ul-pages li a {
        color: #353535;
        text-decoration: none;
        transition: .2s ease-out;
        &:hover {
            color: #00A8FF;
        }
    }
    .li-title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        margin: 45px 0 10px !important;
    }
</style>