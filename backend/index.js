import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`TeaApp listening on port ${port}`)
})