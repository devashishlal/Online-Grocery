// login validation
function loginValidation(){
    var email = document.getElementById("login-username").value;
    var pwd = document.getElementById("login-password").value;

    if(email!="admin"){
        alert("Incorrect Email!")
        return false;
    }
    if(pwd!="12345"){
        alert("Incorrect Password!")
        return false;
    }
}