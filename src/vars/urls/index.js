/**
 * Created by XpoHo
 */

import apiMain from '@/vars/urls/api/main'
import apiUser from '@/vars/urls/api/user'
import apiAuth from '@/vars/urls/api/auth'

import app from '@/vars/urls/api/app'
import experts from '@/vars/urls/api/experts'
import service from '@/vars/urls/api/service'
import service_category from '@/vars/urls/api/service_category'
import service_classes from '@/vars/urls/api/service_classes'
import order from '@/vars/urls/api/order'
import profile from '@/vars/urls/api/profile'
import fin_operation from '@/vars/urls/api/fin_operation'
import request from '@/vars/urls/api/request'
import request_message from '@/vars/urls/api/request_message'
import faq from '@/vars/urls/api/faq'
import reviews from '@/vars/urls/api/reviews'
import news from '@/vars/urls/api/news'
import news_category from '@/vars/urls/api/news_category'
import team from '@/vars/urls/api/team'

// group
import balance from '@/vars/urls/api/balance/index'

import admin from '@/vars/urls/api/admin/index'


import selfMain from '@/vars/urls/self/main'


export default {
  // URL для общения с API-сервером
  apiMain,
  apiUser,
  apiAuth,

  app,
  experts,
  service,
  service_category,
  service_classes,
  order,
  profile,
  fin_operation,
  request,
  request_message,
  faq,
  reviews,
  news,
  news_category,
  team,

  // group
  balance,

  admin,

  selfMain
}
