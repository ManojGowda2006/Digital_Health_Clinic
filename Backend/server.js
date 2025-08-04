const express = require('express')
const app = express()
const PORT = 3010

app.listen(PORT, () => {
    console.log(`Server is running in the port: ${PORT}`)
})
