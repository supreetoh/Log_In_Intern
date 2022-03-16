function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username == "admin" && password =="iamvaccinated"){

        alert("Login succesful. " + "Click OK !");
        window.open('index2.html');
        return false;
    }
    else{
        alert(" Login failed, User does not match! ");
    }






}