const express = require("express");
const router = express.Router();
const Bundle = require('../Bundle.js')
var fs = require('fs-extra');
var rimraf = require("rimraf");
const path = require('path')

router.post("/pipe-dream/api/build", async (req, res) => {
    var bundle = Bundle.make("car-app", req.body.reviewFiles)
    bundle.saveAsZip();
    
    res.send({
        bundleUrl: bundle.url()
    })
})

module.exports = router