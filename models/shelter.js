module.exports = function(sequelize, DataTypes) {
  var Shelter = sequelize.define("Shelter", {
    shelter_name: DataTypes.STRING,
    shelter_manager: DataTypes.STRING,
    shelter_number: DataTypes.STRING,
    shelter_email: DataTypes.STRING,
  },{
    timestamps: false
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Shelter;
};