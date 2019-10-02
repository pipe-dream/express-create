const express = require('express')
var mustacheExpress = require('mustache-express')
const app = express()

app.use(express.static('public'))
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname +  '/views')

const port = 3000

app.get('/pipe-dream', (req, res) => {
    res.render('index', {
        settings: JSON.stringify({
            isSandboxed: true,
            appName: "pipe-dream for express.js",
            workbench_data: {}
        }) 
    })
})


app.post('/pipe-dream/api/build', function (req, res) {
    res.send('BUILD')
})

app.patch('/pipe-dream/api/save', function (req, res) {
    res.send('SAVE')
})

app.listen(port, (req, res) => {console.log(`Example app listening on port ${port}!`)})