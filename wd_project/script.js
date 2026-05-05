function login_validation(){
    var user = document.getElementById("login-username");
    var pass = document.getElementById("login-password");

    if(user.value.trim()=="" || pass.value.trim()==""){
        return false;
    }else{
        true;
    }

}

function signup_validation(){
    var fname =document.getElementById("signup-fname");
    var lname =document.getElementById("signup-lname");
    var email =document.getElementById("signup-email");
    var dob =document.getElementById("signup-dob");
    var fpwd =document.getElementById("signup-fpwd");
    var cpwd =document.getElementById("signup-fname");
    if(fname.value.trim()==""||lname.value.trim()==""||email.vlaue.trim()==""||dob.vlaue.trim()==""||fpwd.vlaue.trim()==""||cpwd.vlaue.trim()==""){
        fname.style.border="solid 2px red";
        lname.style.border="solid 2px red";
        fpwd.style.border="solid 2px red";
        cpwd.style.border="solid 2px red";
        return false;
    }else if(fpwd.value!=cpwd){
        fpwd.style.border="solid 2px red";
        cpwd.style.border="solid 2px red";
        return false;
    }else if(fpwd<8 || cpwd<8){
        fpwd.style.border="solid 2px red";
        cpwd.style.border="solid 2px red";
        return false;
    }else{
        true;
    }
}

function reset_validation(){
    var user = document.getElementById("reset-Npass");
    var pass = document.getElementById("reset-Cpass");

    if(user.vlaue!=pass.value){
        if(length.user<8 || length.pass<8){
            user.style.border="solid 2px red";
            pass.style.border="solid 2px red";
            return false;
        }
    }
    else{
        true;
    }
}