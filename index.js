const express = require('express')
var mustacheExpress = require('mustache-express')
const app = express()
app.use(express.json());

app.use(express.static('public'))
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname +  '/views')

app.use(require('./routes/gui'))
app.use(require('./routes/saves'))
app.use(require('./routes/builds'))
app.use(require('./routes/bundle.js'))

app.listen(3000, (req, res) => {console.log(`App running...`)})