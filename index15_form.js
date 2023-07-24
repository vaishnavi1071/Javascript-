function validateform(){
    var name =document.myform.name.value;
    var password = document.myform.password.value;
    if(name==null || name==""){
        alert("Name cant be blank")
        return false;
    }
    else if(password==null||password.length<6)
    {
        alert("check password length");
        return false;
    }

}