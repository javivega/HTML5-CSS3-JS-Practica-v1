var form = document.getElementById('form-contact');

var apellidosInput = document.getElementsByName('tienes_apellidos');
var ejercitoInput = document.getElementById('ejercito');

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