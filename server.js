const express=require ('express')
const connectDB=require('./config/connectDB')
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express()
require ('dotenv').config()


connectDB()

app.use(bodyParser.json());
app.use(cors());
//API Route
app.use("/api/user/", require("./routes/User"));
// app.use("/api/profile/", require("./routes/Profile"));
app.use("/api/property/", require("./routes/Property"));


const port=process.env.PORT || 5000
app.listen(port,(error)=>
    error 
    ? console.log(error)
    : console.log(`the server is running on ${port}`)
) 
