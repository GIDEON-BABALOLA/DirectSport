const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mailchimpSchema = new Schema({
    email : String

})
module.exports = mongoose.model("mailchimpSubscribers", mailchimpSchema)
// Mongoose automatically looks for the plural, lowercased version of your model name