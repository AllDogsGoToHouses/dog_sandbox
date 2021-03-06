// Materialize JavaScript
$(document).ready(function(){
    $('.modal').modal()
    $('.sidenav').sidenav()
    $('.tooltipped').tooltip()
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    //load by static id for adopter
    //update later to pull from cookie
    $.get("/api/adopter/1", function(adopter_data){
        console.log(adopter_data)
        $.get("/api/dogs", function(dogs_data){
            console.log(dogs_data)
            dogVars(dogs_data)
        })
    })

   
  })

//dog variables
  function dogVars(dogsArray) {

    var dog_id  
    var dog_name
    var dog_image_url 
    var dog_size
    var age
    var activity_level
    var gender
    var breed
    var likes
    var dislikes
    var shelter_id
    
    for(var i=0;i<dogsArray.length;i++) {
      console.log("It works", i);
      dog_id = dogsArray[i].dog_id
      dog_name = dogsArray[i].dog_name
      dog_image_url = dogsArray[i].dog_image_url
      dog_size = dogsArray[i].dog_size
      age = dogsArray[i].age
      activity_level = dogsArray[i].activity_level
      gender = dogsArray[i].gender
      breed = dogsArray[i].breed
      likes = dogsArray[i].likes
      dislikes = dogsArray[i].dislikes
      shelter_id = dogsArray[i].shelter_id
        console.log(dog_id,dog_name,dog_size,age,activity_level,gender,breed,likes,dislikes,shelter_id)
    showResults(dog_name, dog_image_url, age, breed, gender, dog_size, activity_level, likes, dislikes)   
    }
    } 

// Create Account
$("#create-account").on("click", function(){
    signUpHolder.html("Make Account")
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
    console.log("favorite added!")
})


// Show Search Results
$("#dog-result").on("click", function(){
    
    showResults(dog_name, dog_image_url, age, breed, gender, dog_size, activity_level, likes, dislikes)   
    
    // Add to favorites
    $(".add").on("click", function(){
        alert("Added to Favorites")
    })
})

//Placeholder stuff, doesn't affect code
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
function showResults(Name, Image, Age, Breed, Gender, Size, Activity, Likes, Dislikes){
    $(".dog-holder").append(`
        <div class="row">
        <div class="col s4 push-s2">
            <div class="card">
            <div class="card-image">
                <img src="`+ Image +`">
                <span class="card-title">`+ Name +`</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
                <span class="row">
                    <div class="col s4"><h6>`+ Age +`</h6><p>Dog Age</p></div>
                    <div class="col s4"><h6>`+ Breed +`</h6>Dog Breed</div>
                    <div class="col s4"><h6>`+ Gender +`</h6>Dog Gender</div>
                </span>
                <span class="row">
                    <div class="col s6"><h6>`+ Size +`</h6>Dog Size</div>
                    <div class="col s6"><h6>`+ Activity +`</h6>Dog Activity Level</div>
                </span>
                <span class="row">
                    <h6>Likes</h6>
                    <div class="col s4">`+ Likes + `</div>
                </span>
                <span class="row">
                    <h6>Dislikes</h6>
                    <div class="col s4">`+ Dislikes + `</div>
                </span>
            </div>
            </div>
        </div>
        </div>
    `)
}

// function showResults(imageURL, name, dogInfo){
//     $(".dog-holder").html('<div class="col s8 push-s2"><div class="card"><div class="card-image"><img src="' + imageURL + '"><span class="card-title">'+ name + '</span><a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"><span class="add">add</i></a></div><div class="card-content">' + dogInfo + '</div></div></div></div>' )

// }

function signUp(signUpType){
    $("#signup-holder").html(signUpType)

    if (signUpType = "email"){
        console.log("Signing up with email")
    } else{
        signUpType = "facebook"
    }
}


var loginHolder = $("#login-holder")
var emailLogin = $(".email-login")

// Opens Email Login
emailLogin.on("click", function(){
  console.log("This Works")
})

var loginHolder = $("#login-holder")

// Opens Email Login
$("#email-login").on("click", function(){
    console.log("clicked")
    emailLogin()
})

// Opens Create Account$
$(".create-account").on("click", function(){
   createAccount()
})

// Facebook Login
$("#facebook").on("click", function(){
    facebookLogin()
})

// Google Login
$("#gmail").on("click", function(){
    googleLogin()
    
})


// Modal Fxns
function emailLogin(){
    loginHolder.html(`
        <div class="container">
            <div class="row" style="display: inline-block;">
                <form class="col s12" method="">
                <div class='row'><div class='col s12'></div></div>

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
                    <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect signup-btns'>Login</button>
                </div>
                <a href=""><p>Back</p></a>
                </form>
            </div>
        </div>
        </center>

        <div class="section"></div>
        <div class="section"></div>
    `)
}

function googleLogin(){
    loginHolder.html(`
        Google OAuth
        <a href=""><p>Back</p></a>
    `)

}

function facebookLogin(){
    loginHolder.html(`
        Facebook OAuth
        <a href=""><p>Back</p></a>
    `)

}

function createAccount(){
    $("#create-account").text("Create Account")
    loginHolder.html(`
        <form>
            <div class='row'>
                <div class="input-field col s12">
                    <input id="adopter_name" type="text" class="validate">
                    <label for="adopter_name">Full Name</label>
                </div>
            </div>
            <div class='row'>
                <div class='input-field col s12'>
                    <input class='validate' type='email' name='email' id='email' />
                    <label for='email'>Enter your email</label>
                </div>
            </div>
            <div class='row'>
                <div class='input-field col s6'>
                    <input class='validate' type='password' name='password' id='password' />
                    <label for='password'>Enter password</label>
                </div>
                <div class='input-field col s6'>
                    <input class='validate' type='password' name='password' id='password' />
                    <label for='password'>Verify  password</label>
                </div>
            </div>
            
            <button class="btn signup-btns create-account">Create account</button>
            <a href=""><p>Back</p></a>
        </form>
    `)
}
