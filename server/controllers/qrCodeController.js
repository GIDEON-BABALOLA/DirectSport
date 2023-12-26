
const qr = require("qr-image");
const fs = require("fs");
const fsPromises = require("fs").promises
const qrCodeController = async (req, res)=> {
  const createQrCode = async (userName) => {
    const qr_svg = qr.image(userName, { type: 'svg', margin: 2 });
    const filePath = userName + ".svg"; // Use userName as the file name
    const writeStream = await fs.createWriteStream(filePath);
    // Pipe the QR code image to the write stream
   await qr_svg.pipe(writeStream);
  const fileContent = await fsPromises.readFile(filePath, "utf-8")
    res.json({"qrCode" : fileContent})
  };
 await createQrCode("google.com")
}
      module.exports = qrCodeController
    