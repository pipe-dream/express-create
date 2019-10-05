const express = require("express");
const router = express.Router();

module.exports = router.post("/pipe-dream/api/build", async (req, res) => {
    console.log("Building!");
    //res.send('BUILD')
})