const express = require('express');
const bodyParser = require("body-parser");
const postsRoutes = require('./routes/post');

const mongoose = require('mongoose');
const app = express();

mongoose.connect(
  "mongodb+srv://mario:38Ur8Bvovdia0lFm@cluster0-4xbkm.mongodb.net/NODE-ANGULAR?retryWrites=true"
  )
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
