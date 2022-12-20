const express=require('express');
//const mongoose = require('mongoose');
const router = require('./src/routes/api');
const bodyParser = require('body-parser')
const app=new express()


//security middleware import
const rateLimit=require('express-rate-limit')
const hpp=require('hpp')
const mongoSanitize=require('express-mongo-sanitize')
const helmet=require('helmet')
const cors=require('cors')
const xssClean=require('xss-clean');
const { mongoose } = require('mongoose');


////security middleware implement

app.use(hpp());
app.use(mongoSanitize());
app.use(helmet());
app.use(cors());
app.use(xssClean())
// parse application/json
app.use(bodyParser.json())

// security rate limit Middleware
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

// database creation
const URI='mongodb://127.0.0.1:27017/Company'
const OPTION={user:"",pass:""}
mongoose.set('strictQuery', true);
mongoose.connect(URI,OPTION,(error)=>{
	console.log('Mongoose is connected');
	console.log(error);
})

// this is rest api router end point
app.use('/api/v1',router)

// undefined routes

app.use('*',(req,res)=>{
   res.status(404).json({status:"not found",data:"Failed"})
})

module.exports=app;