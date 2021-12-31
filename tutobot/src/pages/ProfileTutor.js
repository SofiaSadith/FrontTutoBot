import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledEngineProvider } from '@mui/material/styles';
import Estrella from '../components/Estrella';
import {
	faUser,
	faBook,
	faHome,
	faHeart,
	faDoorClosed,
	faEdit,
} from "@fortawesome/free-solid-svg-icons";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EditIcon from "@mui/icons-material/Edit";
import "./ProfileTutor.css";
import "../App.css";
import Chart from "chart.js/auto";
import "chartjs-plugin-labels";
import {
	barData,
	barOptions,
	pieData,
	pieOptions,
} from "../components/ChartTutor.js";
import { Bar, Pie } from "react-chartjs-2";

function ProfileTutor() {
	const { username } = useParams();
	return (
		<div className="perfil">
			{/* <h1> ProfilePage: {username}</h1> */}
			<div id= 'datos'>
				<div id='total'>
					<h1 className="totalE"> Total de Estudiantes</h1>
					<h2 className="datoE">200</h2>
				</div>
				<div id= 'estrellasT'>
					<h1 className="totalE">Calificación</h1>

					<StyledEngineProvider injectFirst>
    					<Estrella/>
  					</StyledEngineProvider>,


				</div>
				<div id= 'sesionesT'>
				<h1 className="totalE">Sesiones de la Semana</h1>
				<h2 className="datoE">12</h2>
				</div>
			</div>
			
			<div id="contenedor">
				<div id="info1">
					<div className="icono">
						<FontAwesomeIcon icon={faUser} />
					</div>
					<h1>Laura</h1>
					<div class="form-group">
						<textarea maxLength="135" className="form-control" id="descripcionText" placeholder='Descríbete' rows="1"></textarea>
					</div>
					<div className="text-center perrito">
						<button className="btn btn-primary">Guardar</button>
                        <button className="btn btn-primaryD"><FontAwesomeIcon icon={faEdit} /></button>
					</div>
                    
				</div>

				<div id='infogeneral'>
					<h1>Información General</h1>
					<h3><span>Nombres:</span> Laura</h3>
					<h3><span>Apellidos:</span> Santos Balladares</h3>
					<div className="campo">
						<label for="titleText">Celular:</label>
						<input type='tel' className="form-control" id="titleText" placeholder="Tu teléfono" />
						<button type="button" className="btn btn-aTutor" style={{color:"#fff"}}>
						<FontAwesomeIcon icon={faEdit} />
						</button>
					</div>
					<div className="campo">
						<label for="titleText">Email:</label>
						<input type='email' className="form-control" id="titleText" placeholder="Tu e-mail" />
						<button type="button" className="btn btn-aTutor" style={{color:"#fff"}}>
						<FontAwesomeIcon icon={faEdit} />
						</button>
					</div>
                    <div className="campo">
						<label for="titleText">Zoom:</label>
						<input className="form-control" id="titleText" placeholder="Tu enlace de Zoom" />
						<button type="button" className="btn btn-aTutor" style={{color:"#fff"}}>
						<FontAwesomeIcon icon={faEdit} />
						</button>
					</div>
					<div className="text-center perrito">
						<button className="btn btn-primary">Guardar</button>
					</div>
                   

					{/*<h2>Nombres: Laura</h2>
					<h2>Apellidos: Santos Balladares</h2>
					<h2>Celular: 908671524</h2>
					<h2>Email: laurasb@uni.edu.pe</h2>
					<h2>HORARIO DE ATENCIÓN: </h2> */}
				</div>

			</div>
			<div id='conten-estadisticas'>
				<div class='estadisticas'>
						<h1 className="titulo">ESTADÍSTICAS</h1>
					<div className='barNotas'>
						Promedio de notas de asesorados por ciclo
						<Bar
							data={barData}
							options={barOptions}
						/>
					</div>
					<div className='pieAprobado'>
						Evaluación de las Sesiones
						<Pie
							data={pieData}
							options={pieOptions}
						/>
					</div>
				</div>
			</div>
			{/*<div id="conten-estadisticas">
				<div className="estadisticas">
					 <h1>Estadísticas</h1>
					<h2>Cantidad de tutoriales registrados: </h2>
					<h2>Cantidad de tutoriales completados: </h2>
					<h2>Porcentaje de rendimiento: </h2>
					<h2>Cantidad total de me gusta: </h2>
					<h2>Puntaje total:</h2>
					<h2>Promedio de notas:</h2>
					<h2>Reuniones: </h2> 
					<h1>ESTADISTICAS</h1>

					<div className = "barNotas">
						
						Promedio de notas
						<Bar
							data = {barData} 
							options = {barOptions}
						/>
					</div>
					<div className = "pieAprobado">
						Rendimiento
						<Pie
							data = {pieData} 
							options = {pieOptions}
						/>
					</div>
					<br/><br/>
					<h3>Cantidad de tutoriales subidos: 10</h3>
					<h3>Cantidad total de registros: 3</h3>
					<h3>Cantidad de registros por tutorial: 0.3</h3>
					<h3>Cantidad total de me gusta: 2</h3>
					<h3>Cantidad de me gusta por Tutorial: 0.2</h3>
					<h3>Reuniones: </h3>
				</div> 
			</div>*/}
			
		</div>
	);
}

export default ProfileTutor;
