import {Router} from 'express'
import {getHuespedes, postHuespedes, putHuespedes, deleteHuesped, getHuesped} from '../controllers/huespedes.controller.js'



const router = Router()


router.get('/huespedes', getHuespedes)

router.get('/huespedes/:id', getHuesped)

router.post('/huespedes', postHuespedes)

router.put('/huespedes/:rut', putHuespedes);

router.delete('/huespedes/:id', deleteHuesped)



export default router
