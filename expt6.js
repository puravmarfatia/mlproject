function validate() {
    if(document.myForm.name.value ===""){
    alert("provide name");
    return false;
}
if(document.myForm.email.value ===""){
    alert("provide email");
    return false;
}
if(document.myForm.password.value ===""){
    alert("provide password");
    return false;
}
if(document.myForm.confirmpassword.value ===""){
    alert("provide confirm password");
    return false;
}
if(document.myForm.password.value!=document.myForm.confirmpassword.value)
{
    alert("your password and confirmed password do not match")
}
return true;
}