require("dotenv").config();
const path = require('path');
const express = require("express")
const app = require("express")()
const connectDB = require(path.join(__dirname, "config", "dbConn"))
connectDB(process.env.DATABASE_URI)
const PORT = process.env.PORT || 3500;
const mongoose = require("mongoose")
const cors = require("cors");
const corsOptions = require(path.join(__dirname, "config", "corsOptions"))
const errorHandler = require(path.join(__dirname, "middleware", "errorHandler"))
const {authLogin, authRegister} = require(path.join(__dirname, "middleware", "regLog")) 
const  requestLogs  =  require(path.join(__dirname, "middleware", "reqLog")) 
const newsletter = require(path.join(__dirname, "routes", "newsletter"))
const competitionLogo = require(path.join(__dirname, "routes", "competition.js"))
const hotNewsRouter = require(path.join(__dirname, "routes", "hotNews.js"))
const frontendBackend = require(path.join(__dirname, "middleware", "frontendBackend"))
const qrCodeSignUp = require(path.join(__dirname, "routes", "qrCode.js"))
app.use(express.urlencoded( {extended : true}));
app.use(express.json());
app.use(cors(corsOptions));
// app.use(frontendBackend) 
// API Key connecting frontend and backend
app.use(authLogin);
app.use(authRegister);
app.use(requestLogs);
app.use("/newsletter", newsletter);
app.use("/competitionLogo", competitionLogo);
app.use("/hotNews", hotNewsRouter)
app.use("/qrCodeSignUp", qrCodeSignUp);
app.use(errorHandler)

mongoose.connection.once("open", () => {
    console.log("connected to database successfully");
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
});