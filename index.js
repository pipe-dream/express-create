const express = require('express')
var mustacheExpress = require('mustache-express')
const app = express()

app.use(express.static('public'))
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname +  '/views')

const port = 3000

app.get('/pipe-dream', function (req, res) {
    res.send('GUI')
})

app.post('/pipe-dream/api/build', function (req, res) {
    res.send('BUILD')
})

app.patch('/pipe-dream/api/save', function (req, res) {
    res.send('SAVE')
})

/*
return view('pipe-dream::spa')->with([
    'settings' => [
        'isSandboxed' => env('PIPEDREAM_IS_SANDBOXED', false),
        'appName'     => request()->path(),
        'workbench_data' => json_decode("{}") // not implemented
    ],
]);
*/






app.listen(port, (req, res) => {console.log(`Example app listening on port ${port}!`)})