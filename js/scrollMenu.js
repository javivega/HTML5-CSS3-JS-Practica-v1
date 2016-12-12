var navbaritems = document.getElementsByClassName('navbar-item');

for (var i = 0; i<navbaritems.length; i++){
	navbaritems[i].addEventListener('click', function(){
		deleteActiveClass();
		this.classList.add('active');
		
		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		if(sectionToGo > 1){
			var toGo = sectionToGo[sectionToGo.length - 1];
			getElementByIdAndScroll(toGo);
		}
	})
}

function deleteActiveClass(){
	for(var i = 0; i < navbaritems.length; i++){
		navbaritems[i].classList.remove('active');
	}
}