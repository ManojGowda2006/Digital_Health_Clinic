const LabTests = require('../models/LabTests')

const LabTest = async(req, res) => {
    try{
        const tests = await LabTests.find();
        res.status(200).json(tests);
    }catch(err){
        res.status(500).json({message: `Internal server error: ${err.message}`})
    }
}

module.exports = LabTest;