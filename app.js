const express = require('express');
const app = express();
const router = require('./src/routes/api');
const bodyparser = require('body-parser');
const path = require('path')


// security middleware
const expressRateLimit = require('express-rate-limit');
const hpp = require('hpp');
const xssClean = require('xss-clean');
const helmet = require('helmet');
const mongoSanatize = require('express-mongo-sanitize');
const cors = require('cors');


// data Base
const mongoose = require('mongoose');


// security middleware implementation
app.use(expressRateLimit());
app.use(hpp());
app.use(xssClean());
app.use(helmet());
app.use(mongoSanatize());
app.use(cors());


// body parser
app.use(bodyparser.json());

// express rate limiter
const limiter = expressRateLimit({windowMs:60*60*1000, max:3000});



// mongodb database connection
mongoose.connect("mongodb://localhost:27017/CRUD")
    .then(() => {
        console.log('Connection successful');
    })
    .catch((error) => {
        console.log('Connection error:', error);
    });



// managing Front end routing
app.use(express.static('client/dist'))
app.get("*", function(req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

//managing backend routing

app.use('/api/v1', router);



module.exports = app;