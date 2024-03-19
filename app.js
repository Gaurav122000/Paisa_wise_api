require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const userRouter = require("./users/user.router");
const businessRouter = require("./business/business.router");

//we are converting json object to javascript object
app.use(express.json());

app.use("/users", userRouter);
app.use("/business", businessRouter);
// app.get("/api", (req, res)=>{
//     res.json({
//         success: 1,
//         message: "This is rest apis working"
//     });
// });

app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running on",process.env.APP_PORT, "Port number........... :)");
})