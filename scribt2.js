var loginBtn = document.getElementById("loginBtn");
var allUsers = JSON.parse(localStorage.getItem("allUsers"));

var handleLogin = function(){
    var userEmail = document.getElementById("userEmail").value;
    var userPass = document.getElementById("userPass").value;
    for(var i = 0; i < allUsers.length; i++){
        
        if(allUsers[i].userName ===userEmail && allUsers[i].userPass === userPass){
        
            localStorage.setItem("allUsers" , userEmail);
            location.href = "index.html";
        }
    }
   
}

loginBtn.addEventListener("click", handleLogin);