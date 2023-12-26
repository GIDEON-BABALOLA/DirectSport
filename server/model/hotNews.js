const mongoose = require("mongoose");
const date = new Date();
const finalDate = `${ date.toLocaleString('default', { month: 'long' })} ${date.getMonth()} ${date.getFullYear()}`
const Schema = mongoose.Schema;
const hotNewsSchema = new Schema({
    id : String,
    competitionName : String,
    image : String,
    author : String,
    title : String,
    date : { type : String, default : finalDate},
    content : String,
    likes : {type : Number, default : 0},
    timestamp: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },

})
module.exports = mongoose.model("hotnews", hotNewsSchema)
// Mongoose automatically looks for the plural, lowercased version of your model name