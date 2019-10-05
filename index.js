const express = require('express')
var mustacheExpress = require('mustache-express')
const app = express()
app.use(express.json());

app.use(express.static('public'))
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname +  '/views')

const port = 3000

app.use(require('./routes/gui.js'))
app.use(require('./routes/saves.js'))
app.use(require('./routes/builds.js'))

app.listen(port, (req, res) => {console.log(`Example app listening on port ${port}!`)})