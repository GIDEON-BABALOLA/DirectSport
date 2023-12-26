const path = require("path");
const uuid = require('uuid');
const mongoose = require("mongoose");
const logEvents = require(path.join(__dirname, "..", "middleware", "logEvents.js"))
const hotNewsModel = require(path.join(__dirname, "..", "model", "hotNews.js"))
const postHotNews =  async (req, res) => {
    const {competitionName, image, author, title, content, likes} = req.body
    console.log(req.body)
    const newHotNews = {
        id : uuid.v4(), 
        competitionName : competitionName.toLowerCase(),
        image : image,
        author : author,
        title : title,
        date : new Date().toISOString().slice(0,10),
        content : content,
        likes : likes,
    }
    try{
 await hotNewsModel.create(newHotNews)
        console.log("trying")
        res.status(201).json(newHotNews)
    }
    catch(error){
        console.log(error)
        logEvents(`${error.name} : ${error.message}`, "hotNewsErrorLog.txt")
    }

}
const getHotNews = async (req, res) => {
    const allContent =  await hotNewsModel.find().sort({  timestamp: -1 })
    res.status(200).json(allContent)

}
module.exports = {postHotNews, getHotNews}