import React from 'react'
import "./EditarTuto.css";

function EditarTuto() {

	function actualizarPaso(){
		
	}

    return (
        <div className="editarTuto">
            <h1 id="titulo" contentEditable="true" className="text-center">Titulo del Tutorial</h1>
			<div id="descripcion">
				<h1>Descripción</h1>
				<p contentEditable="true">
					Descripción del Tutorial
				</p>
			</div>
			<div id="contenedor">
				<div className="card">
					<div className="card-body">
						<h1>Paso 1</h1>
						<h2 id="paso1" contentEditable="true">
							Nombre del tema
							<br />
							del Paso 1
						</h2>
						
							{/* <label className="text-dark fs-6" for="a">Titulo</label>
							<textarea class="form-control" id="a" rows="2"></textarea>
						 */}
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Paso 2</h1>
						<h2 contentEditable="true">
							Nombre del tema
							<br />
							del Paso 2
						</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Paso 3</h1>
						<h2 contentEditable="true">
							Nombre del tema
							<br />
							del Paso 3
						</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Paso 4</h1>
						<h2 contentEditable="true">
							Nombre del tema
							<br />
							del Paso 4
						</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Paso 5</h1>
						<h2 id="paso5" contentEditable="true">
							Nombre del tema
							<br />
							del Paso 5
						</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Examen Final</h1>
						<h2 contentEditable="true">
							Nombre del
							<br />
							Tutorial
						</h2>
					</div>
				</div>
			</div>
			{/* Paso 1 */}
			<div>
				<h1>Paso 1</h1>
				<div id="card-flex" className="card">
					<div id="card-flex-body" className="card-body">
						<input
							id="name-input"
							type="text"
							className="form-control"
							placeholder="Nombre del Paso 1"
							onInput="actualizarPaso"
						/>
						<p>
							* Se recomienda guardar cada cambio realizado
							<br />
							*Solo se puede adjuntar un archivo por cada paso (pdf, mp4, jpg,
							png)
						</p>
					</div>
				</div>
				<div id="adjuntar" className="form-group mt-2">
					<input
						type="file"
						className="form-control"
						accept=".pdf, .jpg, .png"
					/>
				</div>
			</div>
			{/* Preguntas de Práctica */}
			<div id="practica">
				<h1>Preguntas de Práctica</h1>
				<div id="practica-container">
					<div className="card">
						<div className="card-body">
                            <h1>Pregunta 1</h1>
                            <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
							<div className="opciones text-start">
								<label>
									<input type="radio" name="p1" />
									<div contentEditable="true">Opcion 1</div>
								</label>
								<label>
									<input type="radio" name="p1" />
									<div contentEditable="true">Opcion 2</div>
								</label>
								<label>
									<input type="radio" name="p1" />
									<div contentEditable="true">Opcion 3</div>
								</label>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
                            <h1>Pregunta 2</h1>
                            <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
							<div className="opciones text-start">
								<label>
									<input type="radio" name="p2" />
									<div contentEditable="true">Opcion 1</div>
								</label>
								<label>
									<input type="radio" name="p2" />
									<div contentEditable="true">Opcion 2</div>
								</label>
								<label>
									<input type="radio" name="p2" />
									<div contentEditable="true">Opcion 3</div>
								</label>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
                            <h1>Pregunta 3</h1>
                            <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
							<div className="opciones text-start">
								<label>
									<input type="radio" name="p3" />
									<div contentEditable="true">Opcion 1</div>
								</label>
								<label>
									<input type="radio" name="p3" />
									<div contentEditable="true">Opcion 2</div>
								</label>
								<label>
									<input type="radio" name="p3" />
									<div contentEditable="true">Opcion 3</div>
								</label>
							</div>
						</div>
					</div>
				</div>
                <div className="text-center">
                    <button className="btn btn-primary mt-4">Siguiente Paso</button>
                </div>
			</div>
        </div>
    )
}

export default EditarTuto;