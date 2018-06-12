module.exports = function(sequelize, DataTypes) {
    var Shelter = sequelize.define("Shelter", {
 shelter_name: {
    type: DataTypes.STRING
  },
  shelter_manager: {
    type: DataTypes.STRING
  },
  shelter_number: {
    type: DataTypes.STRING
  },
  shelter_email: {
    type: DataTypes.STRING
  },
},{
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    });
    return Shelter;
  };