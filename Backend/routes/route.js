const express = require('express')
const { Register, Login } = require('../controllers/Authention')
const {bookTest, retriveBookings} = require('../controllers/booking')
const LabTest = require('../controllers/labTests')
const sendReport = require('../controllers/report')
const userAuth = require('../middleware/userAuth')
const route = express.Router()

//Auth routes
route.post("/register", Register)
route.post("/login", Login) 
//Booking routes
route.post("/book", userAuth, bookTest)

route.get("/", userAuth, LabTest)
//Report download route
route.get('/bookings/download', userAuth, sendReport)

route.get('/bookings', userAuth, retriveBookings)

module.exports = route