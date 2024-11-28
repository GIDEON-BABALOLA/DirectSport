const mongoose = require("mongoose")
const path = require("path")
const axios = require("axios")
const mailchimpSubscribers = require(path.join(__dirname, "..", "model", "newsletterSubscribers"))
const subscribeNewsletter = async (req, res) => {
const email = req.body.email;
console.log("email" + email)
const newSubscriber = {
  email :  email
}
try{
  const subscriber = await mailchimpSubscribers.findOne({ email: email });
  if (subscriber) {
    console.log("user already subscribed")
return res.status(200).json({"message" : "user already subscribed"})
  } else {
    console.log('Subscriber not found');
    
  }
  await mailchimpSubscribers.create(newSubscriber)
}
catch(error){
  console.log(error)
}
}
module.exports = subscribeNewsletter