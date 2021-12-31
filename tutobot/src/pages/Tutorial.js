import React from "react";
import "./EditarTuto.css";
import { Link, useParams} from 'react-router-dom';
import Tuto from '../data/tuto.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";

function Tutorial({data}){

	let {tuto} = useParams();
    let TutoData = Tuto.data.find(element => element.titulo === tuto);
    console.log(TutoData);

	// function inscribir(){
		
	// }

    return(
		<div className='principal'>
        <div className="crearTutos">
            <div class="form-group">
				<label for="titleText" style={{fontSize:"35px"}}>{TutoData.titulo}</label>
				{/*<input readonly="readonly" class="form-control" id="titleText" placeholder="Titulo del Tutorial"/>*/}
			</div>
			
			<h1 style={{color:"#484848"}} className="mt-3 mb-3">Descripción</h1>
			<div class="form-group">
				{/*<label for="descripcionText">Descripción</label>*/}
				<div style={{fontSize:"18px"}} id="descripcionTextTutorial">{TutoData.descripcion}</div>
			</div>
			<br/>
			<h1 style={{color:"#484848"}} className="mt-2 mb-3">Información del tutor</h1>
			<div id="contenedor">
				<div id="info">
					<div className="icono">
						<FontAwesomeIcon icon={faUser} />
					</div>
					<div>
						{/* <h2>Laura Santos Balladares</h2> */}
						<h2>Dra. Ciencias de la Computación</h2>
						<p>
							<br/>Soy egresada de la escuela de Ciencias de la Computación 
							en la Universidad Nacional de Ingeniería.
						</p>
					</div>
				</div>

				<div className="datosPersonales">
					<h1>Información General</h1>
					<h2>Nombres: Laura</h2>
					<h2>Apellidos: Santos Balladares</h2>
					<h2>Celular: 908671524</h2>
					<h2>Email: laurasb@uni.edu.pe</h2>
					{/*<h2>HORARIO DE ATENCIÓN: </h2> */}
				</div>
			</div>

			<h1 style={{color:"#fff"}} className="mb-3">Pasos</h1>
			<div id="contenedor">
        
                <div className="card">
					<div className="card-body">
						<h1>{TutoData.paso1.nombre}</h1>
					</div>
				</div>
                <div className="card">
					<div className="card-body">
						<h1>{TutoData.paso2.nombre}</h1>
					</div>
				</div>
                <div className="card">
					<div className="card-body">
						<h1>{TutoData.paso3.nombre}</h1>
					</div>
				</div>
                <div className="card">
					<div className="card-body">
						<h1>{TutoData.paso4.nombre}</h1>
					</div>
				</div>
                <div className="card">
					<div className="card-body">
						<h1>{TutoData.paso5.nombre}</h1>
					</div>
				</div>
			</div>
			
			<div className="text-center mt-4">
				<Link to="/mistutos"><button className="btn btn-primary" onClick={()=>{

				}}>Registrarse</button></Link>
			</div>
        </div>
		</div>
    )
}

export default Tutorial;