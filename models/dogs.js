module.exports = function(sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
       dog_name: {
          type: DataTypes.STRING
        },
        dog_image_url: {
          type: DataTypes.STRING
        },
        size: {
          type: DataTypes.STRING
        },
        age: {
          type: DataTypes.INTEGER
        },
        activity_level: {
          type: DataTypes.STRING
        },
        gender: {
          type: DataTypes.STRING
        },
        breed: {
          type: DataTypes.STRING
        },
        likes: {
          type: DataTypes.STRING
        },
        dislikes: {
          type: DataTypes.STRING
        },
        shelter_id: {
          type: DataTypes.INTEGER
        },
        createdAt: false,
        updatedAt: false,
      },{
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    });
    return Dog;
  };