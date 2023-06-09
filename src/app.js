import express from 'express'
import huespedes from './routes/huespedes.routes.js'
import indexRoutes from './routes/index.routes.js'
import {PORT} from './config.js'
import cors from 'cors';


const app = express()
app.use(cors())
app.use(express.json())





// CREANDO RUTAS


app.use(indexRoutes)
app.use('/api',huespedes)

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'ENDPOINT NO ENCONTRADO'
    })
})


export default app;
