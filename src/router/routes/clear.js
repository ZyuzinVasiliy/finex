/**
 * Файл содержит роуты для которых нужно использовать Clear layout
 */

const routes =
    {
      path: '',
      component: () => import('@/layouts/Clear.vue'),
      children: [
          {
              path: '/main',
              name: 'main',
              component: () => import('@/views/main/pages/Main.vue'),
          },

        /**
         * шаблон для нового роута
         *
         {
        path: '/URL',
        name: 'main.<PAGE_GROUP_NAME>.<PAGE_NAME>',
        component: () => import('@/views/<PAGE_GROUP_NAME>/<PAGE_NAME>.vue'),
        // требовать что пользователь авторизован
        beforeEnter: requireGuest
      },
         */

      ]
    }

export default routes
