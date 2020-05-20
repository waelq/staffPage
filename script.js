
fname = document.getElementById("fname");
lname = document.getElementById("lname");
email = document.getElementById("email");
age = document.getElementById("age");
phone = document.getElementById("phone");
select = document.getElementById("select")
function ret(){
var gender =$("input:radio[name=gender]:checked").val();

var object ={
		id:Date.now(),
		fname:fname.value,
		lname:lname.value,
		email:email.value,
		age:age.value,
		phone:phone.value,
		select:select.value,
		gender:gender+""

	}
	return object	
}

var button = document.getElementById("add")
var display = document.getElementById("display")

var numberStaff = [];

button.onclick=function () {
		if(fname.value === ""){
			alert("Fill Your First Name Plz")
		}
		else if(lname.value === ""){
			alert("Fill Your Last Name Plz")
		}
		else if(email.value === ""){
			alert("Fill Your Email Plz")
		}
		else if(age.value === ""){
			alert("Fill Your Agg Plz")
		}
		else if(phone.value === ""){
			alert("Fill Your Phone number Plz")
		}
		else if(select.value === ""){
			alert("Select Jop Plz")
		}
		
		
	else{
		numberStaff.push(ret())
		console.log(numberStaff)
	}
	fname.value ="";
	lname.value ="";
	email.value ="";
	age.value ="";
	select.value ="";
	phone.value ="";
		
}


function myFunction() {
$('#table tbody').empty();
  var dis = numberStaff;

  var table = document.getElementById("table");
 var row1 = table.insertRow(0);
  var cell0 = row1.insertCell(0);
  var cell1 = row1.insertCell(1);
  var cell2 = row1.insertCell(2);
  var cell3 = row1.insertCell(3);
  var cell4 = row1.insertCell(4);
  var cell5 = row1.insertCell(5);
  var cell6 = row1.insertCell(6);
  var cell7 = row1.insertCell(7);

  cell0.innerHTML = "ID";
  cell1.innerHTML = "First Name";
  cell2.innerHTML = "Last Name";
  cell3.innerHTML = "Email";
  cell4.innerHTML = "Agg";
  cell5.innerHTML = "Phone number";
  cell6.innerHTML = "Type Jop";
  cell7.innerHTML = "Sex";
   
  for(var i = 0 ; i <dis.length ; i++){
  var row = table.insertRow(1);

  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  var cell5 = row.insertCell(5);
  var cell6 = row.insertCell(6);
  var cell7 = row.insertCell(7);
   var cell8 = row.insertCell(8);
  var cell9 = row.insertCell(9);

  cell0.innerHTML = numberStaff[i].id;
  cell1.innerHTML = numberStaff[i].fname;
  cell2.innerHTML = numberStaff[i].lname;
  cell3.innerHTML = numberStaff[i].email;
  cell4.innerHTML = numberStaff[i].age;
  cell5.innerHTML = numberStaff[i].phone;
  cell6.innerHTML = numberStaff[i].select;
  cell7.innerHTML = numberStaff[i].gender;
  cell8.innerHTML =  "<button class='edit';>Editar</button>";
  cell9.innerHTML = "<button class='delete';>Delete</button>";


}
dis =[];
}





$('table').on('click', '.delete', function(e){
	var array = $( "tr" ).toArray() ;
   $(this).closest('tr').remove();
	var index = array.length - 2;
		numberStaff.splice(index,1)
		console.log(numberStaff)

	})
//numberStaff =  numberStaff.slice(index,1)
//


