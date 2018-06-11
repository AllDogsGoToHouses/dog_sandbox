// Materialize JavaScript
$(document).ready(function(){
    $('.modal').modal()
    $('.sidenav').sidenav()
    $('.tooltipped').tooltip();
  })

// Add Favorite Cards
$("#add-fave").on("click", function(){
    imageURL = "https://placeimg.com/640/480/animals"
    name = "Favorite's Name"
    addFave(imageURL,name)
})

// Show Search Results
$("#dog-result").on("click", function(){
    imgURL = 
    name = 
    dogInfo = 
    showResults()
})


// Functions
function addFave(imageURL, name){
    $("#faves-holder").append('<div class="col s3 m3"> <div class="card"><div class="card-image"><img src="' + imageURL + '"></div><div class="card-action"><p>'+ name + '</p></div>')
} 

function showResults(imgURL, name, dogInfo){
    $("#dog-holder").html()

}