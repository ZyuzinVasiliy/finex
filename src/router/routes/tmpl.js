import authFunctions from "@/functions/auth/authFunctions";

/**
 *
 */
import config from "@/config"


// роуты
const routes =
  {
        path: '',
        component: () => import('@/layouts/main/Main.vue'),
        children: [
            {path: '/template',               component: () => import('@/views/template/Pages.vue'),},
            {path: '/template/Messenger',     component: () => import('@/views/template/Messenger.vue'),},
            {path: '/template/Empty_screen1', component: () => import('@/views/template/Empty_screen1.vue'),},
            {path: '/template/Empty_screen2', component: () => import('@/views/template/Empty_screen2.vue'),},
      ]
  }

//
export default routes
