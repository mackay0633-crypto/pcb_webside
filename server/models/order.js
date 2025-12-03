import mongoose from 'mongoose'

const OrderSchema=new mongoose.Schema({
  pcb:{
    width_cm:Number,
    height_cm:Number,
    qty_pcs:Number,
    layers:Number,
    material:String,
    copper_oz:Number
  },
  price:Number,
  breakdown:Object,
  status:{ type:String, default:'pending' },
  createdAt:{ type:Date, default:Date.now }
})

export default mongoose.model('Order',OrderSchema)
