require("dotenv").config();
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const userRouter = require("./users/user.router");
const businessRouter = require("./business/business.router");

//we are converting json object to javascript object
app.use(express.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/business", businessRouter);


app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running on",process.env.APP_PORT, "Port number........... :)");
})