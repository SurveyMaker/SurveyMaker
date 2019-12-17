//Clear Description
function Clear(){
var c =	confirm("Are you sure you want to clear format?")
	if(c == true){
		var x = document.getElementById("Description");
		x.value = "";
	}
	else{
		return false;
	}
}
//Save Description
function Save(){
	var x = document.getElementById("Description");
	x.select();
	document.execCommand("copy");
	var Z = document.getElementById("Notify");
	Z.innerHTML = "Copy to clipboard";
	Z.style.color = "yellowgreen";
	setTimeout(execNote,6000);
}
function execNote(){
	var Z = document.getElementById("Notify");
	Z.innerHTML = ""
}
//Preview Description
function Preview(){
	var a = document.getElementById("Description-Upload");
	var b = document.getElementById("Description-Save");
	var c = document.getElementById("Description-Preview");
    var d = document.getElementById("Description-Clear");
	var y = document.getElementById("Description");
	var z = document.getElementById("Description-Exit-Preview");
	var t = document.getElementById("Preview-Description");
	
	a.hidden = true;
	b.hidden = true;
	c.hidden = true;
	d.hidden = true;
	z.hidden = false;
	t.hidden = false;
	
	t.innerHTML = y.value;
	y.readOnly = true;
	if(t.innerHTML == ""){
		t.innerHTML = "No Preview";
	}
}
//Exit-Preview
function Exit(){
	var a = document.getElementById("Description-Upload");
	var b = document.getElementById("Description-Save");
	var c = document.getElementById("Description-Preview");
    var d = document.getElementById("Description-Clear");
	a.hidden = false;
	b.hidden = false;
	c.hidden = false;
	d.hidden = false;
	var y = document.getElementById("Description");
	var z = document.getElementById("Description-Exit-Preview");
	var t = document.getElementById("Preview-Description");
	y.readOnly = false;
	z.hidden = true;
	t.hidden = true;
}
//Publish
function Publish(){
var x =	confirm("Are you sure you want this publish? Reminder: You Can edit BUT all data will be lost.");
if(x == true){
var a = document.getElementById("Description-Upload");
	var b = document.getElementById("Description-Save");
	var c = document.getElementById("Description-Preview");
    var d = document.getElementById("Description-Clear");
	var y = document.getElementById("Description");
	var z = document.getElementById("Description-Exit-Preview");
	var t = document.getElementById("Preview-Description");
var r = document.getElementById("Display-Description");
var n = document.getElementById("Description-Note");

r.innerHTML = y.value;


a.hidden = true;
b.hidden = true;
c.hidden = true;	
d.hidden = true;
y.hidden = true;
z.hidden = true;
t.hidden = true;
n.hidden = true;

window.location.href = "#Display-Description";

navigator.clipboard.writeText("");
	


}
else{
	return false;
}
}

