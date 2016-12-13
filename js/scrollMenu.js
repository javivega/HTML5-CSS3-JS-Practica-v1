var navbaritems = document.getElementsByClassName('navbar-item');

for (var i = 0; i<navbaritems.length; i++){
	navbaritems[i].addEventListener('click', function(){
		deleteActiveClass();
		this.classList.add('active');
		
		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		if(sectionToGo.length > 1){
			event.preventDefault();
			var toGo = sectionToGo[sectionToGo.length - 1];
			getElementByIdAndScroll(toGo);
		}
	});
}


 
function getElementByIdAndScroll(name){
	var element;
	if(name == ''){
		element = document.getElementsByClassName('header')[0];
	} else {
		element = document.getElementById(name);
	}
	
	scrollToElement(element);
}



function scrollToElement(element){
	var jump = parseInt(element.getBoundingClientRect().top * 0.3);
	document.body.scrollTop += jump;
	
	if(!element.lastJump || element.lastJump > Math.abs(jump)){
		element.lastJump = Math.abs(jump);
		
		setTimeout(function(){
			scrollToElement(element);
		}, "60");
		
	} else {
		element.lastJump = null;
	}
}

function deleteActiveClass(){
	for(var i = 0; i < navbaritems.length; i++){
		navbaritems[i].classList.remove('active');
	}
}

var cumulativeOffset = function(element){
	var top = 0;
	do {
		top += element.offsetTop || 0;
		element = element.offsetParent;
	} while(element);
	
	return top;
};


var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 50;
var offsetEquipo = cumulativeOffset(document.getElementById('equipo')) - 50;
var offsetTransporte = cumulativeOffset(document.getElementById('transporte')) - 50;


window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(event) {
	if(window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy){
		deleteActiveClass();
		document.querySelector('a[href="#"]').parentNode.classList.add('active');
	} else if(window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetEquipo){
		deleteActiveClass();
		document.querySelector('a[href$="quien-soy"]').parentNode.classList.add('active');
	}  else if(window.pageYOffset >= offsetEquipo && window.pageYOffset < offsetTransporte){
		deleteActiveClass();
		document.querySelector('a[href$="equipo"]').parentNode.classList.add('active');
	}
}