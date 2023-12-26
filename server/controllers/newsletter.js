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
    const newsletterData = {
      members: [
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: "",
            LNAME: "",
            PHONE: ""
          }
        }
      ]
    };
    const url = "https://us14.api.mailchimp.com/3.0/lists/0193af99a9"; // Replace with your Mailchimp API endpoint
    
    axios.post(url, newsletterData, {
      auth: {
        username: "DIRECTSPORT",
        password: process.env.MAILCHIMP_API_KEY
      }
    })
      .then(response => {
        if (response.status === 200) {
          console.log("User subscribed successfully");
          // You may send a success response to the client here
          return res.status(201).json({"message" : "done"})
        } else {
          console.log("Error in subscribing new user");
        return  res.status(response.status).json({ message: 'Error in subscribing user' });
          // Handle the error and send an appropriate response to the client
        }
      })
      .catch(error => {
        console.error("An error occurred:", error);
        return res.status(500).json({ message: 'Internal server Error' });
        // Handle the error and send an appropriate response to the client
      });
  }
  await mailchimpSubscribers.create(newSubscriber)
}
catch(error){
  console.log(error)
}
}
module.exports = subscribeNewsletter