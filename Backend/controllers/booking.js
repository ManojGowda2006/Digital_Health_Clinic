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
            PatientId: req.userId,
            testId: testId
        })
    }catch(err){
        res.status(500).json({message: `Internal server error: ${err.message}`})
    }
}

module.exports = bookTest;