const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const competitionSchema = new Schema({
    id : Number,
    competitionName : String,
    timestamp: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },

})
module.exports = mongoose.model("Competition", competitionSchema)
// Mongoose automatically looks for the plural, lowercased version of your model name