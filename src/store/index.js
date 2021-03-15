import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moduleApp from './app/moduleApp.js'
import moduleAuth from './auth/moduleAuth.js'
import moduleExperts from './experts/moduleExperts.js'
import moduleService from './service/moduleService.js'
import moduleServiceCategory from './service-category/moduleServiceCategory.js'
import moduleServiceClasses from './service-classes/moduleServiceClasses.js'
import moduleOrder from './order/moduleOrder.js'
import moduleCart from './cart/moduleCart.js'
import moduleErrors from './errors/moduleErrors.js'
import moduleProfile from './profile/moduleProfile.js'
import moduleFinOperation from './fin-operations/moduleFinOperation.js'
import moduleRequest from './request/moduleRequest.js'
import moduleRequestMessage from './request-message/moduleRequestMessage.js'
import moduleFAQ from './faq/moduleFAQ.js'
import moduleReviews from './reviews/moduleReviews.js'
import modulePopupUserInfo from './popup_user_info/modulePopupUserInfo.js'
import moduleNews from './news/moduleNews.js'
import moduleNewsCategory from './news-category/moduleNewsCategory.js'
import moduleTeam from './team/moduleTeam.js'


// POPUP
import modulePopup from './popup/index.js'


// ADMIN
import moduleAdminUsers from './admin/users/moduleAdminUsers.js'
import moduleAdminProfile from './admin/profile/moduleAdminProfile.js'
import moduleAdminOrders from './admin/orders/moduleAdminOrders.js'
import moduleAdminOrderCart from './admin/order-cart/moduleAdminOrderCart.js'
import modulePopupTeamMember from "./popup/popup_team_member/modulePopupTeamMember";


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },

  modules: {

    'app': moduleApp,

    // AUTH
    'auth': moduleAuth,
    'experts': moduleExperts,
    'service': moduleService,
    'service_category': moduleServiceCategory,
    'service_classes': moduleServiceClasses,
    'order': moduleOrder,
    'cart': moduleCart,
    'errors': moduleErrors,
    'profile': moduleProfile,
    'fin_operation': moduleFinOperation,
    'request': moduleRequest,
    'request_message': moduleRequestMessage,
    'faq': moduleFAQ,
    'reviews': moduleReviews,
    'popup_user_info': modulePopupUserInfo,
    'news': moduleNews,
    'news_category': moduleNewsCategory,
    'team': moduleTeam,

    // ADMIN
    'admin.users': moduleAdminUsers,
    'admin.profile': moduleAdminProfile,
    'admin.orders': moduleAdminOrders,
    'admin.order_cart': moduleAdminOrderCart,

    // POPUP
    'popup.popup_service_category_form': modulePopup.modulePopupServiceCategoryForm,
    'popup.popup_service_classifier_form': modulePopup.modulePopupServiceClassifierForm,
    'popup.popup_news_category_form': modulePopup.modulePopupNewsCategoryForm,
    'popup.popup_team_member': modulePopup.modulePopupTeamMember,

  }
})
