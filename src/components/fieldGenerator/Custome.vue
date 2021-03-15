<template lang="pug">
    label.form-group
        .form-type(v-if='state === 1')
            .form-type__item.form-type__item--full-line(@click="setState(2)")
                | Добавить поле

        .form-type(v-if='state === 2')
            .form-type__item(@click="setType('TEXT')") Текстовое
            .form-type__item(@click="setType('DATE')") Дата
            .form-type__item(@click="setType('FILE')") Файл

        .form-block(v-if='state === 3')
            .form-type-placeholder(v-if='data.type === "DATE" || data.type === "FILE"') {{ typeText }}
            input.form-control(type='text' v-model='label' :disabled="save == true")
            .form-accept(v-if="save === false" @click="saveData()")
            svg.form-remove(v-if="del !== true" @click="remove()")
                use(xlink:href="~@/assets/img/main.svg#close")
            .form-return(v-if="del === true" @click="recovery()")
                .form-return__text Вернуть поле
                .form-return__count {{ time }}
                svg.form-return__icon
                    use(xlink:href="~@/assets/img/main.svg#return")
</template>

<script>
    export default {
        name: "custome",
        data() {
            return {
                state: 1,
                save: false,
                del: false,
                time: null,
                label: null,
            }
        },
        props: {
            data: Object,
        },
        computed: {
            typeText() {
                let text;
                switch (this.data.type) {
                    case 'DATE':
                        text = 'Дата';
                        break;
                    case 'FILE':
                        text = 'Файл';
                        break;
                    default:
                        text = null;
                        break;
                }
                return text;
            }
        },
        mounted() {
            if (this.data.label) {
                this.state = 3;
                this.save = true;
                this.setData(this.data.label);
            }
        },
        methods: {

            setData(label){
                this.label = label;
            },

            timer() {
                let counter = 5;
                for (let i = counter; i >= -1; i--) {
                    setTimeout(() => {
                        if (i === -1 && this.del)  {
                            //this.fullClear();
                            this.$emit('removeField')
                        }
                        this.time = i;
                    }, (counter - i) * 1000);
                }
            },

            recovery() {
                this.del = false;
            },
            remove() {
                this.del = true;
                if (this.save) {
                    this.timer();
                } else {
                    this.fullClear();
                }
            },
            fullClear() {
                this.data.value = '';
                this.state = 1;
                this.data.type = null;
                this.save = false;
                this.del = false;
                this.time = null;
            },
            saveData() {
                this.save = true;
                this.data.label = this.label;
                this.$emit('newField');
            },
            setState(state) {
                this.state = state;
            },
            setType(type) {
                this.data.type = type;
                this.setState(3);
            }
        }
    }
</script>

<style scoped>

</style>