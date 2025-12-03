import express from 'express'
import cors from 'cors'
import router from './routes/quote.js'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app=express()
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.use('/hqpcb', createProxyMiddleware({
  target:'https://www.hqpcb.com',
  changeOrigin:true,
  secure:true,
  pathRewrite:{'^/hqpcb':''}
}))

const port=process.env.PORT||3000
app.listen(port,()=>{})
