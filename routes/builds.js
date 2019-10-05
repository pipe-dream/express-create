const express = require("express");
const router = express.Router();

module.exports = router.post("/pipe-dream/api/build", async (req, res) => {
    res.send({
        message: "Cool, we built files with node..."
    })
})