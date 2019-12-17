//User access allowed.
document.onkeydown = function(e)
{
if(event.Code == Open)
{
return false;
}
if(e.ctrlKey && e.shiftKey && e.KeyCode == "I".charCode(0))
{
return false;
}
if(e.ctrlKey && e.shiftKey && e.KeyCode == "J".charCode(0))
{
return false;
}
if(e.ctrlKey && e.shiftKey && e.KeyCode == "U".charCode(0))
{
return false;
}
}