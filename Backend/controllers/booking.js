const Booking = require('../models/Bookings');
const LabTests = require('../models/LabTests');

const bookTest = async(req, res) => {
    try{
        const {testId} = req.body;
        const test = await LabTests.findById(testId);
        if(!test){
            return res.status(404).json({message: "Invalid testId"})
        }

        await Booking.create({
            patientId: req.userId,
            testId: testId
        })
        res.status(201).json({message:"Booking Successful"})
    }catch(err){
        console.log(err.message)
        res.status(500).json({message: `Internal server error: ${err.message}`})
    }
}

const retriveBookings = async(req, res) => {
    try{
        const bookings = await Booking.find({patientId: req.userId}).populate('testId')
        return res.status(200).json(bookings);
    }catch(err){
        return res.status(500).json({message: "Internal server error"})
    }
}

module.exports = {bookTest, retriveBookings};