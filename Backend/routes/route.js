const express = require('express')
const { Register, Login } = require('../controllers/Authention')
const {bookTest, retriveBookings} = require('../controllers/booking')
const LabTest = require('../controllers/labTests')
const sendReport = require('../controllers/report')
const userAuth = require('../middleware/userAuth')
const route = express.Router()


route.post("/register", Register)
route.post("/login", Login) 

route.post("/book", userAuth, bookTest)

route.get("/", userAuth, LabTest)

route.get('/bookings/download', userAuth, sendReport)

route.get('/bookings', userAuth, retriveBookings)

module.exports = route