const express = require("express");
const router = express.Router();

module.exports = router.get("/pipe-dream/api/bundle/:id", async (req, res) => {
    res.download('./storage/cat.jpg', 'cat.jpg');
})