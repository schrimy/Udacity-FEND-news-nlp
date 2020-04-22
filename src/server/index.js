const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
const aylien = require('aylien_textapi')
const express = require('express')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Aylien api setup
const aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//Alyien post request
app.post('/apiRequest', (req, res) => {
    const reqUrl = req.body.url;
    
    aylienApi.combined({
        'url': reqUrl,
        'endpoint': ['language', 'sentiment', 'summarize'] 
    }, function(error, result) {
        if (error === null){
            res.send(result.results)
        }
    })
})
