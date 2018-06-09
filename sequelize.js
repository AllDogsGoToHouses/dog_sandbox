// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "NewDog" model that matches up with all_dogsDB
var NewDog = sequelize.define("all_dogsDB", {
  dog_name: {
    type: Sequelize.STRING
  },
  dog_image: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  activity_level: {
    type: Sequelize.STRING
  },
  likes: {
    type: Sequelize.STRING
  },
  dislikes: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
NewDog.sync();

// Makes the NewDog model available for other files (will also create a table)
module.exports = NewDog;
