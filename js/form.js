

var form = document.getElementById('form-contact');

var apellidosInput = document.getElementsByName('tienes_apellidos');
var ejercitoInput = document.getElementById('ejercito');
var tooManyEnemies = document.getElementById('too-many-enemies');

var inputApellidos = document.createElement("input");
inputApellidos.setAttribute("id", "apellidos");
inputApellidos.setAttribute("type", "text");
inputApellidos.setAttribute("name", "apellidos");
inputApellidos.setAttribute("placeholder", "Apellidos");
inputApellidos.setAttribute("required","");

for(var i = 0; i < apellidosInput.length; i++){
	apellidosInput[i].addEventListener('click', function(event){
		if(this.value == 'yes'){
			this.parentNode.appendChild(inputApellidos);
		} else {
			this.parentNode.removeChild(inputApellidos);
		}
	})
}

ejercitoInput.addEventListener('keyup', function(event){
	if(this.value > 20){
		tooManyEnemies.style.display = 'block';
	} else {
		tooManyEnemies.style.display = 'none';
	}
})

form.addEventListener("submit", function(event){
	var nombre = document.getElementById("nombre");
	var apellidosInput = {
		"apellidos_si" : document.getElementById("apellidos_si"),
		"apellidos_no" : document.getElementById("apellidos_no")
	}
	
	
	if(nombre.checkValidity() == false){
		event.preventDefault();
		alert("Escribe un nombre");
		nombre.classList.add('error');
		nombre.focus();
		return false;
		
	}
	
	if(apellidosInput.apellidos_si.checkValidity() == false){
		event.preventDefault()
		alert("rellene los apellidos");
		return false;
	}
})