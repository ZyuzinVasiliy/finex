<template lang="pug">
    .popup
        .popup__bg
        .popup__content
            svg.popup__close(@click="close()")
                use(xlink:href="@/assets/img/sprite.svg#close")
            .popup-h-center
                .popup__caption
                    slot
                    br
                    | {{ $helpers.USER_HELPER.getAuthorName(model_user__computed) }}
                .popup-btn-group
                    .btn.btn-light.btn-lg(@click="close(false)") {{btn1}}
                    .btn.btn-lg(@click="close(true)") {{btn2}}
</template>

<script>

    export default {
        name: 'component.popup.support',
        components: {

        },
        props: {
            btn1: String,
            btn2: String,
            model_user: Object,
        },
        data() {
            return {
            }
        },

        computed: {
            model_user__computed() {
                return this.model_user;
            }
        },

        methods: {
            async close(flag_need_delete) {
                this.$emit('popupEvent', flag_need_delete)
            },
        }
    }
</script>