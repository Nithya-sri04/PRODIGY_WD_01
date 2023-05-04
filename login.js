function validpassword(){
	var name  = document.myform.name.value;
	var password = document.myform.password.value;
	if (name==""){
		alert("Name cannot be empty");
		return false;
	}else if (password.length<=7){
		alert("Password must be 8 characters long");
		return false;
	}

}

