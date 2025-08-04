const mongoose = require('mongoose')

const Bookings = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LabTests",
        required: true
    },
    bookingDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bookings', Bookings);