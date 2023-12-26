const mongoose = require("mongoose")
const connectDB = async (url) => {
try{
await mongoose.connect(url, {
useNewUrlParser: true,
useUnifiedTopology:true }
)
}
catch(error){
console.error(error)
}
}
module.exports = connectDB