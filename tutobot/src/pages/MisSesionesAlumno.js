import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SesionesAlumnos.css";
import {faCheckCircle, faTimesCircle, faStar} from '@fortawesome/free-solid-svg-icons';


function MisSesionesAlumno() {
    const present = true
    const absent = false
    const [stars, setStars] = useState(0)
	
	return (
		<div className="perfil">
			{/* <h1> ProfilePage: {username}</h1> */}
		

			<div className="reuniones">
				<h3>REUNIONES</h3>
				<div className="tablaAlum">
                    <div className="fila">
                        <div className="fecha">Fecha</div>
                        <div className="hora">Hora</div>
                        <div className="alumno">Tutor</div>
                        <div className="asistencia">Asistencia</div>
                        <div className="valoracion">Valoración</div>
                        <div className="comentarios">Comentarios</div>
                    </div>
                    <div className="fila">
                        <div className="fecha">08/12/2021</div>
                        <div className="hora">17:00</div>
                        <div className="alumno">Susana Alexandra Ortiz Lévano</div>
                        <div className="asistencia">
                            <button className={present? "presente btnAsist" : "btnAsist"}>
                                <FontAwesomeIcon icon={faCheckCircle}/>
                            </button>
                            <button className={absent? "ausente btnAsist" : "btnAsist"}>
                                <FontAwesomeIcon icon={faTimesCircle}/>
                            </button>
                        </div>
                        <div className="valoracion">
							{present? (
								<>
									<button className={stars>0? "color stars" : "stars"}
											onClick={() => setStars(1)}>
										<FontAwesomeIcon icon={faStar}/>
									</button>
									<button className={stars>1? "color stars" : "stars"}
											onClick={() => setStars(2)}>
										<FontAwesomeIcon icon={faStar}/>
									</button>
									<button className={stars>2? "color stars" : "stars"}
											onClick={() => setStars(3)}>
										<FontAwesomeIcon icon={faStar}/>
									</button>
									<button className={stars>3? "color stars" : "stars"}
											onClick={() => setStars(4)}>
										<FontAwesomeIcon icon={faStar}/>
									</button>
									<button className={stars>4? "color stars" : "stars"}
											onClick={() => setStars(5)}>
										<FontAwesomeIcon icon={faStar}/>
									</button>
								</>
							) : (
								<>
									<button className="noStars">
										<FontAwesomeIcon icon={faStar}/>
									</button>
									<button className="noStars">
										<FontAwesomeIcon icon={faStar}/>
									</button>
									<button className="noStars">
										<FontAwesomeIcon icon={faStar}/>
									</button>
									<button className="noStars">
										<FontAwesomeIcon icon={faStar}/>
									</button>
									<button className="noStars">
										<FontAwesomeIcon icon={faStar}/>
									</button>
								</>
							)}
                        </div>
                        <div className="comentarios">
                            <p>Comentario guardado anteriormente...</p>
                        </div>
                    </div>
				</div>
				</div>
			</div>
			);
}

export default MisSesionesAlumno;