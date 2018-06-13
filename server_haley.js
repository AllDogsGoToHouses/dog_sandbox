var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var db = require("./models/index.js")
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


db.sequelize.sync().then(function(){
  app.listen(port, function(){
    
  })
})