import { createRouter, createWebHistory } from 'vue-router'
import QuotePage from '../views/QuotePage.vue'
import PCBOrder from '../views/PCBOrder.vue'
import OrderConfirmation from '../views/OrderConfirmation.vue'
import AboutDAPE from '../views/AboutDAPE.vue'

const routes=[
  { path:'/', redirect:'/quote/pcb' },
  { path:'/quote/pcb', component: PCBOrder },
  { path:'/quote/:type', component: QuotePage },
  { path:'/order/confirm', component: OrderConfirmation },
  { path:'/order/:id', component: OrderConfirmation },
  { path:'/about', component: AboutDAPE }
]

export default createRouter({ history:createWebHistory(), routes })
