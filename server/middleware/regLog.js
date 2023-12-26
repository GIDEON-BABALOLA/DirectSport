const path = require("path");
const logEvents = require(path.join(__dirname, "logEvents"));
const authRegister = (req, res, next)=>{
    logEvents(`${req.body.username}\t${req.body.password} just registered`, "registerLog.txt")
    // console.log(req.body.username, req.body.password);
    next();
}
const authLogin = (req, res, next)=>{
    logEvents(`${req.body.username}\t${req.body.password} just logged in`, "loginLog.txt")
    // console.log(req.body.username, req.body.password);
    next();
}
module.exports = {authRegister, authLogin}