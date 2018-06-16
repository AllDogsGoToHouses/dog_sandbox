var loginHolder = $("#login-holder")

// Opens Email Login
$(".email-login").on("click", function(){
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
