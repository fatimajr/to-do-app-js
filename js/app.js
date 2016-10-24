window.addEventListener("load",cargarPagina);
	var contador = 1;
	function cargarPagina(){
		var boton = document.getElementById("boton");
		boton.addEventListener("click",agregarTexto);
		var mensaje = document.getElementById("mensaje");
		mensaje.addEventListener("keyup",bloquearBoton);
	};	
	function agregarTexto(e){
		e.preventDefault();
		var div2 = document.createElement("div");
		div2.classList.add("panel","panel-default");
		var mensaje = document.getElementById("mensaje");
		var caja = document.getElementById("caja");
		var div1 = document.createElement("div");
		var input = document.createElement("input");
		var label = document.createElement("label");
		var span = document.createElement("span");
		div1.classList.add("panel-body");
		caja.appendChild(div2);
		div1.appendChild(input);
		div1.appendChild(label);
		div1.appendChild(span);
		div2.appendChild(div1);
		label.innerHTML = mensaje.value;
		label.setAttribute("for","id" + contador);
		input.setAttribute("type","checkbox");
		input.setAttribute("id","id" + contador);
		span.classList.add("glyphicon","glyphicon-remove-sign","pull-right");
		span.setAttribute("aria-hidden","true");
		mensaje.value = "";	
		boton.disabled = true;
		contador ++;		
		span.addEventListener("click", eliminar);
		input.addEventListener("click",tachar);
		function tachar(){
			input.nextSibling.classList.toggle("tachar");
		}
		function eliminar(){
			this.parentElement.parentElement.remove();
		}
	}
	function bloquearBoton(){
		if(mensaje.value.trim().length == 0){
			boton.disabled = true;
		}else{
			boton.disabled = false;
		}
	}
