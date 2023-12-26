const path = require("path");
const express = require("express")
const router = express.Router()
const qrCodeController = require(path.join(__dirname, "..", "controllers", "qrCodeController"))
router.get("/", qrCodeController)
module.exports = router;