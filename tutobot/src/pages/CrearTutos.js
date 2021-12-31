import React from "react";
import "./EditarTuto.css";

function CrearTutos() {
	return (
		<div className="crearTutos">
			
			<div class="form-group">
				<label for="titleText">Titulo</label>
				<input class="form-control" id="titleText" placeholder="Titulo del Tutorial"/>
			</div>
			
			<div class="form-group">
				<label for="descripcionText">Descripción</label>
				<textarea class="form-control" id="descripcionText" rows="3"></textarea>
			</div>
		

			<div class="form-group mt-4">
				<h1>Visibilidad</h1>
				<select class="form-select" aria-label="Default select example">
					<option value="Privado" selected>Privado</option>
					<option value="Publico">Publico</option>
				</select>
			</div>
			
			<div className="text-center mt-4">
				<button className="btn btn-primary">Guardar</button>
			</div>
		</div>
	);
}

export default CrearTutos;
