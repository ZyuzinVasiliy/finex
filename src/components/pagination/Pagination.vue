<template lang="pug">

    nav.pagination-wrapper.mt-3(aria-label='Page navigation example')
        .page-item(:class="getDisabled(1)", :disabled="getDisabled(1, true)")
            .page-link.arrow(tabindex='-1',  @click="itemClick(parseInt(localPagination.current_page)-1)")
                svg.page-item__prev
                    use(xlink:href='@/assets/img/sprite.svg#prev')
                | Назад

        ul.pagination.justify-content-center

            // first page
            template(v-if="localPagination.current_page !== 1")
              li.page-item(:class="getItemClass(1)")
                  .page-link(@click="itemClick(1)") 1

            // dotted
            template(v-if="localPagination.current_page > 3 && localPagination.last_page > 3")
              li.page-item.disabled
                  .page-link ...

            // page prev
            template(v-if="localPagination.last_page >= 3 && localPagination.current_page > 2")
              li.page-item
                  .page-link(@click="itemClick(parseInt(localPagination.current_page)-1)") {{ parseInt(localPagination.current_page)-1 }}

            li.page-item(:class="getItemClass(localPagination.current_page)")
                .page-link(@click="itemClick(parseInt(localPagination.current_page))") {{ localPagination.current_page }}

            // page next
            template(v-if="localPagination.last_page >= 3 && (parseInt(localPagination.current_page)+1) < localPagination.last_page")
              li.page-item
                .page-link(@click="itemClick(parseInt(localPagination.current_page)+1)") {{ parseInt(localPagination.current_page)+1 }}

            // dotted
            template(v-if="localPagination.last_page > 3 && (parseInt(localPagination.current_page)+2) < localPagination.last_page")
              li.page-item.disabled
                .page-link ...

            // last page
            template(v-if="localPagination.current_page !== localPagination.last_page")
              li.page-item(:class="getItemClass(localPagination.last_page)")
                  .page-link(@click="itemClick(localPagination.last_page)") {{ localPagination.last_page }}

        .page-item(:class="getDisabled(localPagination.last_page)", :disabled="getDisabled(localPagination.last_page, true)")
            .page-link.arrow(@click="itemClick(parseInt(localPagination.current_page)+1)")
                | Вперед
                svg.page-item__next
                    use(xlink:href='@/assets/img/sprite.svg#next')

</template>

<script>
    export default {
        name: "components.pagination",
        props: {
            pagination: {
                default: {
                    current_page: 1,
                    total_item_count: 1,
                    last_page: 1,
                    per_page: 30,
                    from: 1,
                    to: 1,
                    prev_page: 1,
                    next_page: 1,
                }
            },
        },
        data() {
            return {}
        },

        computed: {
            localPagination() {
                return this.pagination;
            },
        },

        methods: {
            itemClick(page) {
                this.$emit('eventClick', page)
            },
            getItemClass(page) {
                let result = '';
                if (page === this.pagination.current_page) {
                    result = 'active'
                }

                return result;
            },
            getDisabled(page, flag__return_bool = false) {
                let result = '';

                if (flag__return_bool === true) {
                    result = false
                }
                if (page === this.pagination.current_page) {
                    result = 'disabled'

                    if (flag__return_bool === true) {
                        result = true
                    }
                }
                return result;
            },
        }
    }
</script>

<style scoped>
    .page-link {
        cursor: pointer;
        background: none;
    }
    .disabled .page-link {
        background: none !important;
    }
</style>
