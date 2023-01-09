
const  mongoose  = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { appRoutes } = require('./routes');

//Creating Express App
var app = express();
const PORT = 8090;
mongoose.connect('mongodb://localhost:27017/productManagementDB');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// parse application/json
app.use(bodyParser.json({extended: true}));
//The app.get() function lets a route handler for GET requests to the URL be defined
app.get("/", (req, res)=>{res.status(200).send("<h4>Product Management API</h4><h6>DONE BY HERBERT</h6>")});
app.use("/api",appRoutes)
//On the specified host and port, the app.listen() function is utilized to bind and listen the connections
app.listen(PORT, ()=>{
    console.log(`server running on url.... http://localhost:${PORT}`)
})