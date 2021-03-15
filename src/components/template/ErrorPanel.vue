<template>
    <div class="panel" v-if="errors__computed != null" @click="hideErrorPanel()">
        <div class="container">
            <div class="col-12">
                <div class="panel__content">
                    <div class="panel__message m-auto">
                        <template v-if="errors__computed.hasOwnProperty('type')">
                            <svg class="panel__message__icon" v-if="errors__computed['type'] === 'ERROR'">
                                <use xlink:href="@/assets/img/sprite.svg#warning"></use>
                            </svg>
                            <svg class="panel__message__icon panel__message__icon__success" v-if="errors__computed['type'] === 'SUCCESS'">
                                <use xlink:href="@/assets/img/sprite.svg#check"></use>
                            </svg>
                        </template>

                        <template v-else>
                            <svg class="panel__message__icon">
                                <use xlink:href="@/assets/img/sprite.svg#warning"></use>
                            </svg>
                        </template>
                        {{ errors__computed['text'] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'component.template.errorPanel',
        props: {

        },

        computed: {
            errors__computed() {
                let error = this.$store.getters['errors/GET_ITEM'];
                return error;
            },
        },

        methods: {

            async hideErrorPanel() {
                await this.$store.dispatch('errors/HIDE_PANEL');
            },
        }
    }
</script>

<style scoped>
    .panel {
        z-index: 999;
    }
</style>