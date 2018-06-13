// Materialize JavaScript
$(document).ready(function(){
    $('.modal').modal()
    $('.sidenav').sidenav()
    $('.tooltipped').tooltip()
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  })

// Add Favorite Cards
$("#add-fave").on("click", function(){
    imageURL = "https://placeimg.com/640/480/animals"
    name = "Favorite's Name"
    addFave(imageURL,name)
})



// Show Search Results
$("#dog-result").on("click", function(){
    imageURL = "http://via.placeholder.com/350x150"
    name = "Dog Name"
    dogStats = {
        age: 1,
        size: "Big",
        activity: "Couch Potato",
        likes: ["Like 1", "Like 2", "Like 3"],
        dislikes: ["Dislike 1", "Dislike 2 ", "Dislike 3"],
    }
    dogInfo = "Age: " + dogStats.age + "\n\n" +
              "Size: " + dogStats.size  + "\n\n" +
              "Activity Level: " + dogStats.activity +
              "Likes: " + dogStats.likes  + "\n\n" +
              "Dislikes: " + dogStats.dislikes  + "\n\n" 

    showResults(imageURL,name,dogInfo)

    // Add to favorites
    $("#add").on("click", function(){
        alert("Added to Favorites")
    })
})



// Functions
function addFave(imageURL, name){
    $("#faves-holder").append('<div class="col s3 m3"> <div class="card"><div class="card-image"><img src="' + imageURL + '"></div><div class="card-action"><p>'+ name + '</p></div>')
} 

function showResults(imageURL, name, dogInfo){
    $(".dog-holder").html('<div class="col s8 push-s2"><div class="card"><div class="card-image"><img src="' + imageURL + '"><span class="card-title">'+ name + '</span><a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons" id="add">add</i></a></div><div class="card-content">' + dogInfo + '</div></div></div></div>' )

}

// To Do 
// Disable Right Swipe of Carousel
// Link Database Values to show on page
// Format Search Results Card