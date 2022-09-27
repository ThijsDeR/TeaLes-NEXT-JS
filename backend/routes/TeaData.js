import { createClient } from'@supabase/supabase-js';
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const teaRouter = express.Router()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

teaRouter.get('/', async (req, res) => {
    const data = await supabase.from("teadata").select()
    data.data.map((teaData) => teaData.url = req.protocol + '://' + req.get('host') + req.baseUrl + `/${teaData.id}`)

    res.json({
        "title": "TeaData",
        "url": req.originalUrl,
        "query": req.query,
        "data": data.data
    })
})

teaRouter.get('/:teaDataId', async (req, res) => {
    const data = await supabase.from("teadata").select().eq('id', req.params.teaDataId)

    res.json({
        "title": "TeaData",
        "url": req.originalUrl,
        "query": req.query,
        "data": data.data[0]
    })
})

export default teaRouter