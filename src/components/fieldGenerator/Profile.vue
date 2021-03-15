<template lang="pug">
    label.form-group
        .form-type(v-if='state === 1')
            .form-type__item.form-type__item--full-line(@click="setState(2)")
                | Добавить поле

        .form-accept(v-if='state === 2 && data.name == null && select_model.name != null' @click="saveData()")

        v-select(v-if='state === 2' :options="fields_list" v-model="select_model")

        .form-block(v-if='state === 3')

            input.form-control(type='text' v-model="select_model.label" disabled)
            svg.form-remove(v-if="del !== true" @click="remove()")
                use(xlink:href="~@/assets/img/main.svg#close")
            .form-return(v-if="del === true" @click="recovery()")
                .form-return__text Вернуть поле
                .form-return__count {{ time }}
                svg.form-return__icon
                    use(xlink:href="~@/assets/img/main.svg#return")
</template>
<style scoped>
    .form-accept {
        transform: translateX(-15px);
    }
</style>
<script>
    import vSelect from 'vue-select';
    import 'vue-select/dist/vue-select.css';

    export default {
        name: "profile.vue",
        components: {
            vSelect,

        },
        data() {
            return {
                select_model: {name:null, label:null},
                fields_list: [],

                state: 1,
                save: false,
                del: false,
                time: null,
            }
        },
        props: {
            data: Object,
        },
        async mounted() {
            // this.fields_list = await this.$store.getters['service/getDefaultFields'];
            this.fields_list = [
                {
                    "name": "first_name",
                    "label": "Имя"
                },
                {
                    "name": "last_name",
                    "label": "Фамилия"
                },
                {
                    "name": "second_name",
                    "label": "Отчество"
                },
                {
                    "name": "inn",
                    "label": "Инн"
                },
                {
                    "name": "snils",
                    "label": "Снилс"
                },
            ];

            if (this.data.name != null) {
                this.select_model = this.data;
                this.setState(3);
                this.save = true;
            }

            // console.log('--');
            // console.log(this.data);
            // console.log('---fields_list---');
            // console.log(this.fields_list);
        },
        created(){
        },
        methods: {

            timer() {
                let counter = 5;
                for (let i = counter; i >= -1; i--) {
                    setTimeout(() => {
                        if (i === -1 && this.del)  {
                            this.$emit('removeField')
                        }
                        this.time = i;
                    }, (counter - i) * 1000);
                }
            },

            recovery() {
                this.del = false;
            },
            fullClear() {
                //this.data = '';
                this.state = 1;
                this.save = false;
                this.del = false;
                this.time = null;
            },
            saveData() {
                this.setState(3);
                this.save = true;
                this.$emit('newField');
                this.$emit('updateFieldData', this.select_model);
            },
            setState(state) {
                this.state = state;
            },
            remove() {
                this.del = true;
                if (this.save) {
                    this.timer();
                } else {
                    this.fullClear();
                }
            },
        },
    }
</script>