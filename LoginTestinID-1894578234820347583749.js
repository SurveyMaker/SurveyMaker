var user = [
{
Username: "Admin1.0",
Password: "Password",
IP: "12.587.142.43"
}
]
var k = document.getElementById("keep");
var s = document.getElementsById("loginform")

function login(){

var Username = document.getElementById("Username").value
var Password = document.getElementById("Password").value
var IP = document.getElementById("IP").value

for(i = 0; i < user.length; i++){
if(Username == user[i].Username && Password == user[i].Password && IP == user[i].IP){
alert(Username + " Is Logged in")
window.open("YourSurveys.html","_self");
return

    }
}
alert("Incorrect Username, Password, or IP address.");
}
function offline(){
window.open("Oflline.html","_self")
}


