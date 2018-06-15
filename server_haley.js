var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var db = require("./models/index.js")
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
var routes = require("./controllers/dogs_controller.js");

app.use(routes);

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
      console.log("Server listening on: http://localhost:" + PORT);


  })
})