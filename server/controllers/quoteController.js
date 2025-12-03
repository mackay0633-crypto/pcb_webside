import { calculatePrice } from '../utils/priceCalculator.js'
import fs from 'fs'
import path from 'path'

export async function calculate(req,res){
  const payload=req.body
  const r=calculatePrice(payload)
  res.json(r)
}

export async function submit(req,res){
  const id=String(Date.now())
  res.json({ order_id:id, status:'pending', created_at:new Date().toISOString() })
}

export async function getOrder(req,res){
  res.json({ order_id:req.params.id, status:'pending' })
}

export async function dictionaries(req,res){
  const p=path.join(process.cwd(),'server','config','dictionaries.json')
  const text=fs.readFileSync(p,'utf-8')
  res.type('json').send(text)
}
