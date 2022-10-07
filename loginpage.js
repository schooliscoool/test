document.getElementById("email").addEventListener("focusout", setvalueofemail);
document.getElementById("password").addEventListener("focusout",setvalueofpassword)
defaultvalue = "example@gmail.com"
defaultpassvalue = "password"

function setvalueofemail(){
    value = document.getElementById('email').value;
    if (value == ''){
        document.getElementById('email').value = defaultvalue;
    }else{
        //do nothing
    }
}

function changevalueofemail(){
    value = document.getElementById('email').value;
    if (value == (''|| defaultvalue)){
        document.getElementById('email').value = "";
    }else{
        return 0
    }
}


function setvalueofpassword(){
    passvalue = document.getElementById('password').value
    if (passvalue == ''){
        document.getElementById('password').value = defaultpassvalue;
        document.getElementById('password').setAttribute('type','')
    }else{
        //do nothing
    }
}

function changevalueofpassword(){
    passvalue = document.getElementById('password').value
    if (passvalue == (''|| defaultpassvalue)) {
        document.getElementById('password').value = "";
        document.getElementById('password').setAttribute('type','password')
    }
}