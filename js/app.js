// Eliminar de Local Storage
//localStorage.clear();

jQuery(document).ready(function() {
	
	events () 

	const carrito = $('tbody')
	
	function events () {
		$('.agregar-carrito').on('click', agregarCarrito);
		
		$('#vaciar-carrito').on('click',vaciarCarrito);
	}
	function agregarCarrito (e) {
		e.preventDefault()
		let card = $(this).parent().parent()
		let imagen = card.children('img').attr('src')
		let texto = card.children('.info-card').children('h4').text()
		let precio = card.children('.info-card').children('.precio').children('span').text()
		
		fila = $('<tr>')
		fila.html(` 
			<td><img src="${imagen}" width=100></td>
			<td>${texto}</td>
			<td>${precio}</td>
			<td><a href="#" class="borrar-curso"> X</a></td>

		`)
		carrito.append(fila)
		
		$('.borrar-curso').on('click',borrarCurso);

	}

	function borrarCurso (e) {
		e.preventDefault()
		$(this).parent().parent().remove()
	}

	function vaciarCarrito (e) {
		carrito.children().remove()
	}

});