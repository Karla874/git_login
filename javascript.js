const registrar = document.querySelector(".box3 button");

registrar.addEventListener("click", function (e) {
	let pass1 = document.getElementById("pass").value;
	let pass2 = document.getElementById("cpass").value;
	
	if (pass1 !== pass2) {
		alert("Please verify your password");
	}
});