var express = require("express")
var router = express.Router();


var db = require("../models")

router.get("/api/adopter", function(req, res){
	console.log("Got get for /api/adopter")
    db.Dog.findAll({
    	attributes: { exclude: ['createdAt','updatedAt'] } 
    })
      .then(function(dbDogs) {
        res.json(dbDogs);
      });
})

//Route to create a new dog
router.post("/api/adopter", function(req, res){
	db.Adopter.create({
		adopter_name: req.body.adopter_name,
		adopter_email: req.body.adopter_email,
		adopter_favorites: req.body.adopter_favorites,
	}).then (function(dbAdopter){
		console.log("Adding new adopter: ");
		console.log(dbAdopter);
		res.redirect("/adopter");
	})
});

//Route to get a specific dog
router.get("/api/dogs/:id", function(req, res){
	db.Dog.findOne({
		where: {
			id: req.params.id
		}
	}).then(function(dbDog){
		res.json(dbDog);
	});
});

//Route to update a specific dog
router.put("/api/dogs/:id", function(req, res){

});

module.exports = router;