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

import "./MisAlumnos.css";
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';






function MisAlumnos() {

	
	return (
		<div className="perfil">
			{/* <h1> ProfilePage: {username}</h1> */}
		




		

			<div id="table">
				
				<div className="tabla tablaAlum">
					<table class="table table-dar table-hover table-bordered">
						<thead>
							<tr>
								<th scope="col" className="lista">Apellidos</th>
								<th scope="col">Nombre</th>
	
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Perez Sánchez</td>
								<td>Juan Luis</td>
								

							</tr>
						</tbody>
					</table>
				</div>
				</div>
			</div>
			);
}

			export default MisAlumnos;