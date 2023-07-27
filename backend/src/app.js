require('dotenv').config();
const express = require('express')
const { initializeDB } = require('./config/dbConfig')
const { userRouter } = require('./routes')

const PORT = process.env.PORT
const app = express()

app.use(express.json())


app.use('/user', userRouter)


app.listen(PORT, async () => {
    await initializeDB()
    console.log(`Server running in port: ${PORT}`)
})