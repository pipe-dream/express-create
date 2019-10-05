const express = require("express");
const router = express.Router();

module.exports = router.get("/pipe-dream", async (req, res) => {
    res.render('index', {
        settings: JSON.stringify({
            isSandboxed: true,
            appName: "pipe-dream for express.js",
            workbench_data: {}
        }) 
    })
})