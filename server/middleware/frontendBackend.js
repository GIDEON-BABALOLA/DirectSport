const frontendBackendPaddlock = process.env.FRONTEND_BACKEND_PADDLOCK;
const frontendBackend =  (req, res,  next) => {
    const apiKey = req.headers['x-api-key']; // Access the API key from the 'X-Api-Key' header
    if (!apiKey || (apiKey !== frontendBackendPaddlock)){
        console.log("error in frontend backend connection")
     return res.status(404).json({"message" : "unauthorized frontend"})
    }
        next();
}
module.exports = frontendBackend