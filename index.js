const express = require('express')
var mustacheExpress = require('mustache-express')
const app = express()

app.use(express.static('public'))
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname +  '/views')

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))