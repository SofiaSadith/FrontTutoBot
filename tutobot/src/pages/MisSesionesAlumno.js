import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	
	faUser,
	faBook,
	faHome,
	faHeart,
	faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import "./SesionesAlumnos.css";
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';






function ProfileAlumno() {

	
	return (
		<div className="perfil">
			{/* <h1> ProfilePage: {username}</h1> */}
		




		

			<div id="table">
				<h1>REUNIONES</h1>
				<div className="tabla tablaAlum">
					<table class="table table-dar table-hover table-bordered">
						<thead>
							<tr>
								<th scope="col" className="lista">Fecha</th>
								<th scope="col">Hora</th>
								<th scope="col">Tutor</th>
								<th scope="col">Asistencia</th>
                                <th scope="col">Valoración</th>
                                <th scope="col">Comentarios</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>08/12/2021</td>
								<td>17:00</td>
								<td>Susana Alexandra Ortiz Lévano</td>
								<td ><FontAwesomeIcon icon={faCheckCircle}/>
                                <FontAwesomeIcon icon={faTimesCircle}/>
								</td>

							</tr>
						</tbody>
					</table>
				</div>
				</div>
			</div>
			);
}

			export default ProfileAlumno;