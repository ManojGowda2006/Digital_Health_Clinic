const express = require('express')
const app = express()
const PORT = 3010
const connect = require('./dataBase')
const route = require('./routes/route')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
connect();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser());
//dataBase connection


app.use("/api", route)

    
app.listen(PORT, () => {
    console.log(`Server is running in the port: ${PORT}`)
})
