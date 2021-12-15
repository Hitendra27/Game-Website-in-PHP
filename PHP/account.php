
   
       <?php include "header.php";  ?>

      

       <link rel="stylesheet" href="./../css/main.css" />

        <section>
                <article>

            <h2> Registration</h2>

        <p> <!-- Registration input fields -->
              Username: <input type ="user" id="UsernameInput"> <br>
              Password: <input type="passwoed" id="PasswordInput"> <br>
              <button onclick="storeUser()"> Register</button>
               </p>
          <!-- Result of registration displayed here -->

        <p id="Result"></p>

        <script>
        function storeUser(){
            //buid object that we are going to store
            var usrObject = {};
            usrObject.username = document.getElementById("UsernameInput").value;
            usrObject.password = document.getElementById("PasswordInput").value;

            //Store user
            localStorage[usrObject.username] = JSON.stringify(usrObject);

            //Inform user of result
            document.getElementById("Result").innerHTML = "<b>Registration successful.</b>";
        }
            function login(){
                //Get username
                let username = document.getElementById("usernameInput").value;

                //User does not have an account
                if (localStorage[username] === undefined){
                    //Inform user that they do not have an account
                    document.getElementById("loginFailure").innerHTML = "Username not recognized. Do you have an account? "
                    return; //Do nothing else

                }
                else { //User has an account
             let usrObj = JSON.parse(localStorage[username]);//Convert to object)}
             let password = document.getElementById("passwordInput").value;
             if(password === usrObj.password){ //Succussful Login
                    document.getElementById("loginPara").innerHTML = usrObj.usernam + "loggin in.";
                    document.gerElementById("LoginFailure").innerHTML = ""; //Clear any login failures
                    sessionStorage.loggedInUsrEmail = usrObj.username;
                }
                else{
                    document.getElementById("loginFailure").innerHTML = "Password not correct. Please try again ";

                }

               }
            }

            window.onload = checkLogin;// Check to see if user is logged in already

            function checkLogin(){
                if(sessionStorage.loggedInUsrEmail !== undefined){
                    //Extract details of logged in user
                    let usrObj = JSON.parse[localStorage.loggedInUsrEmail];
                          
                    //Say hello to logged in user
                    document.getElementById("loginPara").innerHTML = usrObj.email + "logged in.";
                }

            }



        </script>
       
    </article>   
</section>
            
   
  
<?php include "footer.php";  ?>
   
</body>
    </html>