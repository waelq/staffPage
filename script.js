
fname = document.getElementById("fname");
lname = document.getElementById("lname");
email = document.getElementById("email");
age = document.getElementById("age");
phone = document.getElementById("phone");
select = document.getElementById("select")
var gender = document.querySelector(".gender").checked



var button = document.getElementById("add")
var display = document.getElementById("display")



button.onclick=function () {
	
	//console.log(gender === "male")
	var object ={
		fname:fname.value,
		lname:lname.value,
		email:email.value,
		age:age.value,
		phone:phone.value,
		select:select.value,
		//gender:gender.value

	}
	console.log(object)

}



