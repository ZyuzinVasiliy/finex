<template lang="pug">
    .popup(:class="{ 'active':flag_open__computed }")
        .popup__bg
        .popup__content
            svg.popup__close(@click="closePopup()")
                use(xlink:href="@/assets/img/sprite.svg#close")
            team-member(:data="team_member__computed" class="mt-3" style="margin-top: 50px !important")
            .section__sub-caption
                .section__sub-caption__name
                    span.nowrap Последние сделки
                .section__sub-caption__line
            .transaction-card-group
                //transaction-card
                | В данный момент сделки отсутствуют
            //a.show-all.show-all--mini(href="#") Смотреть все

</template>

<script>

    import transactionCard from '@/components/cards/Transaction';
    import teamMember from '@/components/cards/TeamMember';

    import vSelect from "vue-select";

    export default {
        name: "TeamMemberPopup",
        components: {
            teamMember,
            transactionCard,
        },
        data() {
            return {
            }
        },
        computed:{
            flag_open__computed() {
                let flag_open = this.$store.getters['popup.popup_team_member/GET_STATUS_OPEN'];
                return flag_open;
            },
            team_member__computed(){
                let team_item = this.$store.getters['team/GET_ITEM'];
                console.log(team_item);
                return team_item;
            }
        },
        methods: {
            async closePopup() {
                this.$emit('closePopup')
            },
            setData(popup_data){
                this.model = popup_data;
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>