window.addEventListener("load", function(){
	var caja = document.getElementById("caja");
	var form = document.getElementById("form");
	var areaTexto = document.getElementById("areatexto");
	var boton = document.getElementById("boton");
	boton.disabled = true;
	areaTexto.addEventListener("keydown", function(){
		var long = areaTexto.value.length;
		var nospace = areaTexto.value.replace(/\s/g,"");
		if(long == 0 || nospace == 0){
			boton.disabled = true;
		}else{
			boton.disabled = false;
		}
	});
	boton.addEventListener("click", function(e){
		e.preventDefault();
		valor = areaTexto.value;
		var cajaLista = document.createElement("div");
		var checkBox = document.createElement("input");
		cajaLista.classList.add("lista", "bg-primary");
		checkBox.setAttribute("type","checkbox");
		cajaLista.innerHTML = valor;
		cajaLista.insertBefore(checkBox, cajaLista.childNodes[0]);
		caja.appendChild(cajaLista);
		areaTexto.value = "";
		boton.disabled = true;

		var trash = document.createElement("span");
		trash.classList.add("glyphicon");
		trash.classList.add("glyphicon-trash");
		trash.classList.add("trash");		
		trash.setAttribute("aria-hidden","true");
		cajaLista.appendChild(trash);
		checkBox.addEventListener("click", function(){
			cajaLista.classList.toggle("tachar"); 					
 		});
 		trash.addEventListener("click", function(){
 			caja.removeChild(cajaLista);  
 		});
	});	
});