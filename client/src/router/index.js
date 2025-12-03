import { createRouter, createWebHistory } from 'vue-router'
import QuotePage from '../views/QuotePage.vue'
import PCBOrder from '../views/PCBOrder.vue'
import OrderConfirmation from '../views/OrderConfirmation.vue'

const routes=[
  { path:'/', redirect:'/quote/pcb' },
  { path:'/quote/pcb', component: PCBOrder },
  { path:'/quote/:type', component: QuotePage },
  { path:'/order/confirm', component: OrderConfirmation },
  { path:'/order/:id', component: OrderConfirmation }
]

export default createRouter({ history:createWebHistory(), routes })
