const multer = require('multer');
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, callback){
            console.log(req.body)
            callback(null, file.originalname);
           // callback(null, req);
        }
    })
}
