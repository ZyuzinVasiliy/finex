<template>
    <span>
        <div class="popup__bg"></div>
        <div class="popup__content">
            <svg class="popup__close" @click="close()">
                <use xlink:href="@/assets/img/sprite.svg#close"></use>
            </svg>
            <div class="popup__caption">{{ title }}</div>
            <div class="small mt-3 mb-5">
                <span v-html="description"></span>
            </div>

            <template v-if="preparePrice(price) != 0">
                <div class="popup__val">{{ preparePrice(price) }} р</div>
            </template>
            <template v-else>
                <div class="popup__val">{{ price_text }}</div>
            </template>
            <slot></slot>
            <!--
            <template v-if="input_item != null">
                <div class="btn btn-lg" @click="accept()">Выбрать</div>
            </template>
            -->
        </div>
    </span>
</template>

<script>
    export default {
        name: 'component.popup.info',
        props: [
            'title',
            'description',
            'price',
            'price_text',
            'input_item',
        ],
        data() {
            return {
            }
        },


        methods: {

            preparePrice(price_value){
                let result_price = 0;
                let parts = price_value.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                result_price = parts.join(".");
                if(typeof parts[1] != 'undefined'){
                    if(parseInt(parts[1]) === 0){
                        result_price = parts[0];
                    }
                }

                return result_price;
            },

            async close() {
                this.$emit('closePopup')
            },
            async accept() {
                this.$emit('acceptPopup', this.input_item)
            },
        }
    }
</script>