<template>


  <div class="con-pagination-table vs-table--pagination mt-5 mb-5">
    <div class="vs-row" style="justify-content: space-between; display: flex; width: 100%;">
      <div class="vs-col vs-pagination--mb vs-xs-12 vs-sm-12 vs-lg-6" style="justify-content: flex-start; display: flex; align-items: center; margin-left: 0%; width: 100%;"></div>
      <div class="vs-col vs-pagination--mb vs-xs-12 vs-sm-12 vs-lg-6" style="justify-content: flex-end; display: flex; align-items: center; margin-left: 0%; width: 100%;">
        <div class="con-vs-pagination vs-pagination-primary">
          <nav class="vs-pagination--nav">

            <button class="vs-pagination--buttons btn-prev-pagination vs-pagination--button-prev" :class="getDisabled(1)" :disabled="getDisabled(1, true)" @click="itemClick(parseInt(localPagination.current_page)-1)">
              <i class="vs-icon notranslate icon-scale material-icons null">chevron_left</i>
            </button>

            <ul class="vs-pagination--ul">
              <template v-if="localPagination.current_page !== 1">
                <li class="item-pagination vs-pagination--li" :class="getItemClass(1)" @click="itemClick(1)"><span>1</span>
                  <div class="effect"></div>
                </li>
              </template>

              <template v-if="localPagination.current_page > 3 && localPagination.last_page > 3">
                <li class="item-pagination vs-pagination--li disabled"><span>...</span>
                  <div class="effect"></div>
                </li>
              </template>

              <template v-if="localPagination.last_page >= 3 && localPagination.current_page > 2">
                <li class="item-pagination vs-pagination--li 222" @click="itemClick(parseInt(localPagination.current_page)-1)"><span>{{ parseInt(localPagination.current_page)-1 }}</span>
                  <div class="effect"></div>
                </li>
              </template>

              <li class="item-pagination vs-pagination--li 333" :class="getItemClass(localPagination.current_page)" @click="itemClick(parseInt(localPagination.current_page))"><span>{{ localPagination.current_page }}</span>
                <div class="effect"></div>
              </li>

              <template v-if="localPagination.last_page >= 3 && (parseInt(localPagination.current_page)+1) < localPagination.last_page">
                <li class="item-pagination vs-pagination--li 444" @click="itemClick(parseInt(localPagination.current_page)+1)"><span>{{ parseInt(localPagination.current_page)+1 }}</span>
                  <div class="effect"></div>
                </li>
              </template>

              <template v-if="localPagination.last_page > 3 && (parseInt(localPagination.current_page)+2) < localPagination.last_page">
                <li class="item-pagination vs-pagination--li disabled"><span>...</span>
                  <div class="effect"></div>
                </li>
              </template>

              <template v-if="localPagination.current_page !== localPagination.last_page">
                <li class="item-pagination vs-pagination--li" :class="getItemClass(localPagination.last_page)" @click="itemClick(localPagination.last_page)"><span>{{ localPagination.last_page }}</span>
                  <div class="effect"></div>
                </li>
              </template>
            </ul>

            <button class="vs-pagination--buttons btn-next-pagination vs-pagination--button-next" :class="getDisabled(localPagination.last_page)" :disabled="getDisabled(localPagination.last_page, true)" @click="itemClick(parseInt(localPagination.current_page)+1)">
              <i class="vs-icon notranslate icon-scale material-icons null">chevron_right</i>
            </button>
            <!---->
          </nav>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "components.custom.pagination",
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
      return {

      }
    },

    computed: {
      localPagination() {
        return this.pagination;
      },
    },

    methods: {
      itemClick(page){
        this.$emit('eventClick', page)
      },

      getItemClass(page){
        let result = '';
        if(page === this.pagination.current_page){
          result = 'is-current'
        }

        return result;
      },
      getDisabled(page, flag__return_bool = false){
        let result = '';

        if(flag__return_bool === true){
          result = false
        }
        if(page === this.pagination.current_page){
          result = 'disabled'

          if(flag__return_bool === true){
            result = true
          }
        }


        return result;
      },
    }
  }
</script>

<style scoped>

</style>
