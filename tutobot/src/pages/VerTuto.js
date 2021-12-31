import React, {useState} from 'react'
import "./EditarTuto.css";
import {useParams} from 'react-router-dom';
import Tuto from '../data/tuto.json';
import { Link } from 'react-router-dom';

function VerTuto({data}) {

	const [paso, setPaso] = useState(1);
	// const {title, text, opc1, opc2, opc3, opc4} = props;

    let {tuto} = useParams();
    let TutoData = Tuto.data.find(element => element.titulo === tuto);
    console.log(TutoData);
    
	function actualizarPaso(){
		if (paso<5){
			setPaso(paso+1);
		}
	}

    return (
        <div className="editarTuto">
            <h1 id="titulo" className="text-center">{TutoData.titulo}</h1>
			<div id="descripcion">
				<h1>Descripción</h1>
				<p>
                    {TutoData.descripcion}
				</p>
			</div>
			<div id="contenedor">

				<div className="card">
					<div className="card-body">
						<h1>Paso 1</h1>
						<h2 id="paso1">
							{TutoData.paso1.nombre}
						</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Paso 2</h1>
						<h2>
							{TutoData.paso2.nombre}
						</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Paso 3</h1>
						<h2>
                            {TutoData.paso3.nombre}
						</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Paso 4</h1>
						<h2>
                            {TutoData.paso4.nombre}
						</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Paso 5</h1>
						<h2 id="paso5">
                            {TutoData.paso5.nombre}
						</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h1>Examen Final</h1>
						<h2>
							{TutoData.titulo}
						</h2>
					</div>
				</div>
			</div>
			{/* Paso 1 */}
			<div>
				<h1>Paso {paso}</h1>
				<div id="card-flex" className="card">
					<div id="card-flex-body" className="card-body">
						{TutoData["paso"+String(paso)].nombre}
					</div>
				</div>
				<div id="adjuntar" className="form-group mt-2">
					Aqui se va a mostrar el archivo
				</div>
			</div>
			{/* Preguntas de Práctica */}
			<div id="practica">
				<h1>Preguntas de Práctica</h1>
				<div id="practica-container">

					<div className="card">
						<div className="card-body">
                            <h1>Pregunta 1</h1>
                            <textarea readonly="readonly">{TutoData["paso"+String(paso)].pregunta1.enunciado}</textarea>
							<div className="opciones text-start">
								<label>
									<input type="radio" name="p1" />
									<div>{TutoData["paso"+String(paso)].pregunta1.opciones[0]}</div>
								</label>
								<label>
									<input type="radio" name="p1" />
									<div>{TutoData["paso"+String(paso)].pregunta1.opciones[1]}</div>
								</label>
								<label>
									<input type="radio" name="p1" />
									<div>{TutoData["paso"+String(paso)].pregunta1.opciones[2]}</div>
								</label>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
                            <h1>Pregunta 2</h1>
                            <textarea readonly="readonly">{TutoData["paso"+String(paso)].pregunta2.enunciado}</textarea>
							<div className="opciones text-start">
								<label>
									<input type="radio" name="p2" />
									<div>{TutoData["paso"+String(paso)].pregunta2.opciones[0]}</div>
								</label>
								<label>
									<input type="radio" name="p2" />
									<div>{TutoData["paso"+String(paso)].pregunta2.opciones[1]}</div>
								</label>
								<label>
									<input type="radio" name="p2" />
									<div>{TutoData["paso"+String(paso)].pregunta2.opciones[2]}</div>
								</label>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
                            <h1>Pregunta 3</h1>
                            <textarea readonly="readonly">{TutoData["paso"+String(paso)].pregunta3.enunciado}</textarea>
							<div className="opciones text-start">
								<label>
									<input type="radio" name="p3" />
									<div>{TutoData["paso"+String(paso)].pregunta3.opciones[0]}</div>
								</label>
								<label>
									<input type="radio" name="p3" />
									<div>{TutoData["paso"+String(paso)].pregunta3.opciones[1]}</div>
								</label>
								<label>
									<input type="radio" name="p3" />
									<div>{TutoData["paso"+String(paso)].pregunta3.opciones[2]}</div>
								</label>
							</div>
						</div>
					</div>
				</div>
				{paso<5? (
						<div className="text-center">
							<button className="btn btn-primary mt-4" onClick={actualizarPaso}>Siguiente Paso</button>
						</div>
						) : (
						<div className="text-center">
							<Link to="/start">
								<button className="btn btn-primary mt-4" onClick={actualizarPaso}>Dar Examen Final</button>
							</Link>
						</div>
					)
				}
			</div>
        </div>
    )
}

export default VerTuto;