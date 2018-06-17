// Materialize JavaScript
$(document).ready(function(){
    $('.modal').modal()
    $('.sidenav').sidenav()
    $('.tooltipped').tooltip()
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  })
var signUpHolder = $("#signup-holder")
// Create Account
$("#create-account").on("click", function(){
    signUpHolder.html("Make Account")

})


// Opens Email Login
$("#e-signup").on("click", function(){
    signUpHolder.html(`
      <div class="container">
        <div class="row" style="display: inline-block;">
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='email' name='email' id='email' />
                <label for='email'>Enter your email</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='password' name='password' id='password' />
                <label for='password'>Enter your password</label>
              </div>
              <label style='float: right;'>
                    <a href='#!'><b>Forgot Password?</b></a>
            </label>
            </div>

            <br />
            <center>
              <div class='row'>
                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect signup-btns' id='login_btn'>Login</button>
              </div>
            </center>
        </div>
      </div>
    </center>

    <div class="section"></div>
    <div class="section"></div>
  </main>
    
 
    `)
    
    $("#login_btn").on("click",function(){
      var email = $("#email").val();
        var password = $("#password").val(); 
        var data = {
           email:email,
           password:password
        }
        var posting = $.post( "/signup",data);
        posting.done(function( data ) {
          location.reload();
        });
});
})
  // Sign Up Buttons
$("#email").on("click", function(){
    signUpType = "email"
    signUp(signUpType)
})

$("#facebook").on("click", function(){
    signUpType = "facebook"
    signUp(signUpType)
})

$("#gmail").on("click", function(){
    signUpType = "gmail"
    signUp(signUpType)
})

$(".back").on("click", function(){
    location.reload()
})



// Add Favorite Cards
$("#add-fave").on("click", function(){
    addFave(imageURL,name, dogInfo)
})


// Show Search Results
$("#dog-result").on("click", function(){
    showResults(imageURL,name,dogInfo)
    // Add to favorites
    $(".add").on("click", function(){
        alert("Added to Favorites")
    })
})

imageURL = "https://placeimg.com/640/480/animals"
name = "Dog Name"
dogStats = {
    age: 1,
    size: "Big",
    activity: "Couch Potato",
    likes: ["Like 1", "Like 2", "Like 3"],
    dislikes: ["Dislike 1", "Dislike 2 ", "Dislike 3"],
}
dogInfo = "<div class='row'>Age:" + dogStats.age + "</div><div class='row'> Size: " + dogStats.size  + "</div>" +
          "<div class='row'>Activity Level: " + dogStats.activity  + "</div>" +
          "<div class='row'>Likes: " + dogStats.likes  + "</div>" +
          "<div class='row'>Dislikes: " + dogStats.dislikes  + "</div>" 


// Functions
function addFave(imageURL, name, dogInfo){
    $("#faves-holder").append
    ('<div class="col s3 m4"> <div class="card"><div class="card-image"><img src="' + imageURL + '"></div><div class="card-action collapsible-header activator">'+ name + 
    '</div> <div class="card-reveal"><span class="card-title">'+ name +' <i class="material-icons right">close</i></span>' +
    '<p>' +  dogInfo + '</p>')
} 

function showResults(imageURL, name, dogInfo){
    $(".dog-holder").html('<div class="col s8 push-s2"><div class="card"><div class="card-image"><img src="' + imageURL + '"><span class="card-title">'+ name + '</span><a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"><span class="add">add</i></a></div><div class="card-content">' + dogInfo + '</div></div></div></div>' )

}


function signUp(signUpType){
    $("#signup-holder").html(signUpType)

    if (signUpType = "email"){
      
    } else{
        signUpType = "facebook"
    }
}


