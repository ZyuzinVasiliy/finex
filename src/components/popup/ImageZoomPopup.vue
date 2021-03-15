<template lang="pug">
    .popup(:class="{active: imgPopup}")
        .popup__bg(@click="close()")
        .popup__img(class="w-100" :class="{active: imgPopup}")
            img.popup__img__src(:src="img_url")
            div.popup__full-height
                svg.popup__close(@click="close()")
                    use(xlink:href="@/assets/img/sprite.svg#close")
                //.popup__top

</template>

<script>

    export default {
        name: 'component.popup.image_zoom',
        props: {
            img_url: {
                type: String,
                default: null
            },

        },
        components: {

        },
        data() {
            return {
                imgPopup: false,
            }
        },

        created(){
            this.imgPopup = true;
        },


        methods: {

            async close() {
                this.$emit('popupEvent', false);
                this.imgPopup = false;
            },
        }
    }
</script>

<style scoped>
    .popup__full-height {
        position: absolute;
        top: 30px;
        right: 30px;
        background-color: #fff;
    }
    .popup__top {
        top: calc(-50% - 21px);
        position: relative;
    }
    .popup__close {
        fill: #353535 !important;
    }
</style>