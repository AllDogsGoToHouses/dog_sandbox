module.exports = function(sequelize, DataTypes) {
    var Adopter = sequelize.define("Adopter", {
 adopter_name: {
    type: DataTypes.STRING
  },
  adopter_email: {
    type: DataTypes.STRING
  },
  adopter_favorites: {
    type: DataTypes.STRING
  },
},{
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    });
    return Adopter;
  };