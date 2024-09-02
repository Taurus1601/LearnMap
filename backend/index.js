const express = require("express");
const mongoose = require("mongoose");
const User = require('./models/user.model');
const bodyParser = require('body-parser');
const userRoutes = require ('./routes/user')
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));// this is used to parse the data coming from the form

app.use('/api/users',userRoutes);

app.get("/", function (req, res) {
  res.send("Hello World");
});






mongoose
  .connect("mongodb://localhost:27017/agnihotri")
  .then((result) => {
    console.log("Connected to database");

    app.listen(3000, function () {
      console.log("Example app listening on port 3000!");
    });
  })
  .catch((err) => {
    console.log("Connection failed");
  });
