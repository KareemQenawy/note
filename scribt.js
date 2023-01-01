var registerBtn = document.getElementById("registerBtn");
var alertMasg = document.getElementById("alertmsg");
var users ;
console.log(localStorage.getItem("allUsers"))
if(localStorage.getItem("allUsers") == null){
    users = [];
}else{
    users = JSON.parse(localStorage.getItem("allUsers"));
}     
var registerForm = function(){
    var userName = document.getElementById("userName").value;
    var userPhone = document.getElementById("userPhone").value;
    var userPass = document.getElementById("userPass").value;
    var userEmail = document.getElementById("userEmail").value;
console.log(
    userName, userPhone, userPass , userEmail
)
    if(userEmail !== "" && userName !== ""  && userPhone !== ""  && userPass !== "" ){
        var user = {
            userName : userName ,
            userPhone : userPhone ,
            userPass : userPass ,      
            userEmail : userEmail
        };
        users.push(user);
        localStorage.setItem("allUsers" , JSON.stringify(users));
        console.log(users)
        location.href = "login.html";
        
    }else{
        alertMasg.classList.remove(d-none)
    };
    
};



 registerBtn.addEventListener("click",registerForm);
 