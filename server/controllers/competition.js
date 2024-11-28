const path = require("path");

const cloudinary = require('cloudinary').v2;
const logEvents = require(path.join(__dirname, "..", "middleware", "logEvents.js"))
const getCompetitionsLogo = (req, res) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
        api_secret:  process.env.CLOUDINARY_CLOUD_API_SECRET,
        secure: true,
       });
       
       cloudinary.api.resources({
         type: 'upload',
         prefix: 'file-upload/Home-page' // add your folder
       },
         function(error, result)
          { 
            if (error) {
              console.log("connect to the internet")
              logEvents(`${error.name} : ${error.message}`, "errLog.txt")
              return res.status(400).json({"message": "connect to the internet"})
              }else{
                const imageUrls = result.resources.map((element) => element.url);
             return    res.status(200).json(imageUrls);
              }
            });
} 
  module.exports = getCompetitionsLogo
