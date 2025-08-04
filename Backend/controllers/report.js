const path = require('path')

const sendReport = async (req, res) => {
    try{
        const {bookingId} = req.params;

        const filePath = path.join(__dirname, '../report.pdf');
        res.download(filePath, `Report-${bookingId}.pdf`, (err) => {
            if(err){
                console.log(err)
                res.status(500).json({message: "Could not download"})
            }
        });
    }catch(err){
        res.status(500).json({message: `Internal server error: ${err.message}`})
    }
}

module.exports = sendReport;