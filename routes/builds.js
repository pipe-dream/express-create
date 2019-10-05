const express = require("express");
const router = express.Router();
var fs = require('fs-extra');
var rimraf = require("rimraf");


function cleanSandBox() {
    rimraf("sandbox/project/", function () { console.log("done"); });
}

function writeFiles(files) {
    files.forEach(file => writeFile(file))
}

function writeFile(file) {
    fs.outputFile(`sandbox/project/${file.path}`, file.content, function(err) {
        if(err) {
            return console.log(err);
        }
    });
}

module.exports = router.post("/pipe-dream/api/build", async (req, res) => {
    cleanSandBox();
    const result = writeFiles(req.body.reviewFiles);
    
    res.send({

    })
})