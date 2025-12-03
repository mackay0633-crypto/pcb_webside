import axios from 'axios'
const api=axios.create({ baseURL:'http://localhost:3000' })
export function calcQuote(data){ return api.post('/api/quote/calculate', data) }
export function submitOrder(data){ return api.post('/api/order/submit', data) }
export function getOrder(id){ return api.get(`/api/order/${id}`) }
export function getDictionaries(){ return api.get('/api/dictionaries') }
export default api
