import { Router } from 'express'
import multer from 'multer'
import { calculate, submit, getOrder, dictionaries } from '../controllers/quoteController.js'

const router=Router()
const upload=multer({ dest:'server/uploads' })

router.post('/quote/calculate',calculate)
router.get('/dictionaries',dictionaries)
router.post('/files/upload',upload.single('file'),(req,res)=>{ res.json({ file_id:req.file.filename, url:'', size:req.file.size, ext:'' }) })
router.post('/order/submit',submit)
router.get('/order/:id',getOrder)

export default router
