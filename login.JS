function validate(){
    a=document.getElementById('inputpassword').value;
    b=document.getElementById('inputconfirm').value;
    if(a!==b)
    alert("Password did not match.");
}