$(document).ready(function(){
    $('.modal').modal()
    $('.sidenav').sidenav()
    $('.tooltipped').tooltip();
    
   
  })

// Add Favorite Cards
  $("#add-fave").on("click", function(){
    addFave()
})
    function addFave(){
        $("#faves-holder").append(`<div class="col s3 m5">
            <div class="card">
                <div class="card-image">
                    <img src="https://placeimg.com/640/480/animals">
                    </div>
                <div class="card-action">
                    <p> Favorite's Name</p>
                </div>
            `
    )
} 