import authFunctions from "@/functions/auth/authFunctions";

/**
 *
 */
import config from "@/config"


async function requirePublic(to, from, next) {
    if (config.PARAMS.SUBDOMAIN === 'PUBLIC') {
        next()
    }
    else {
        window.location.href = '/login';
    }
}


// роуты
const routes =
  {
        path: '',
        component: () => import('@/layouts/main/Main.vue'),
        children: [

    // Главная страница
        {
            path: '/',
            name: 'public.main.index',
            component: () => import('@/views/public/main/Index.vue'),
            beforeEnter: requirePublic
        },

    // О сервисе
        {
            path: '/about',
            name: 'public.about.index',
            component: () => import('@/views/public/about/Index.vue')
        },

    // Новости / Список новосте
        {
            path: '/news',
            name: 'public.news.index',
            component: () => import('@/views/public/news/Index.vue')
        },

    // Посадочная страница новости
        {
            path: '/news/:id',
            name: 'public.news.item',
            component: () => import('@/views/public/news/Item.vue')
        },

    // Контакты
        {
            path: '/contacts',
            name: 'public.contacts.index',
            component: () => import('@/views/public/contacts/Index.vue')
        },

    // Экспертам
        {
            path: '/information/for-experts',
            name: 'public.information.for-experts',
            component: () => import('@/views/public/information/ForExperts.vue')
        },

    // Партнерам
        {
            path: '/information/for-partners',
            name: 'public.information.for-partners',
            component: () => import('@/views/public/information/ForPartners.vue')
        },

    // Публичная оферта
        {
            path: '/information/public-offer',
            name: 'public.information.public-offer',
            component: () => import('@/views/public/information/PublicOffer.vue')
        },

    // Политика конфиденциальности
        {
            path: '/information/privacy-policy',
            name: 'public.information.privacy-policy',
            component: () => import('@/views/public/information/PrivacyPolicy.vue')
        },


      ]
  }

//
export default routes
