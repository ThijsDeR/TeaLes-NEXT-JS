import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import teaRouter from './routes/TeaData.js';
dotenv.config()
const app = express()
const port = process.env.PORT || 5000


const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || process.env.CORS_DOMAIN === origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.use("/teaData", teaRouter)

app.listen(port, () => {
  console.log(`TeaApp listening on port ${port}`)
})