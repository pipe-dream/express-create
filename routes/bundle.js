const express = require("express");
const router = express.Router();
const Bundle = require('../Bundle.js')

module.exports = router.get("/pipe-dream/api/bundles/:id", async (req, res) => {
    var bundle = Bundle.find(req.params.id)    
    res.download(bundle.storagePath, `${bundle.storageFileName}.zip`);
})