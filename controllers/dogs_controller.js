var express = require("express")
var router = express.Router();


var db = require("../models")
//TODO: Convert to sequelize

router.get("/", function(req, res){
	res.redirect("/index");
})

router.get("/api/dogs", function(req, res){
	console.log("Got get for /api/dogs")
    db.Dog.findAll({
    	attributes: { exclude: ['createdAt','updatedAt'] } 
    })
      .then(function(dbDogs) {
        res.json(dbDogs);
      });
})

//Route to create a new dog
router.post("/api/dogs", function(req, res){
	db.Dog.create({
		dog_name: req.body.dog_name,
		dog_image: req.body.dog_image,
		size: req.body.dog_size,
		age: req.body.age,
		activity_level: req.body.activity_level,
		gender: req.body.gender,
		breed: req.body.breed,
		likes: req.body.likes,
		dislikes: req.body.dislikes,
		shelter_id: req.body.shelter_id
	}).then (function(dbDog){
		console.log(dbDog);
		res.redirect("/index");
	})
});

//Route to get a specific dog
router.get("/api/dogs/:id", function(req, res){

});

//Route to update a specific dog
router.put("/api/dogs/:id", function(req, res){

});

module.exports = router;