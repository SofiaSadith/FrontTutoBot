import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SesionesTutor.css";
import {
    faCheckCircle,
    faTimesCircle,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";

function MisSesionesTutor() {
    const [addReu, setAddReu] = useState(false);
    const [comment, setComment] = useState(false);
    const [present, setPresent] = useState(false);
    const [absent, setAbsent] = useState(false);
    const stars = 4;

    return (
        <div className="perfil">
            {/* <h1> ProfilePage: {username}</h1> */}

            <div className="reuniones">
                <h3>REUNIONES</h3>
                <div className="tablaAlum">
                    <div className="fila">
                        <div className="fecha">Fecha</div>
                        <div className="hora">Hora</div>
                        <div className="alumno">Alumno</div>
                        <div className="asistencia">Asistencia</div>
                        <div className="valoracion">Valoración</div>
                        <div className="comentarios">Comentarios</div>
                    </div>
                    <div className="fila">
                        <div className="fecha">08/12/2021</div>
                        <div className="hora">17:00</div>
                        <div className="alumno">Susana Alexandra Ortiz Lévano</div>
                        <div className="asistencia">
                            {stars === 0 ? (
                                <>
                                    <button
                                        className={present ? "presente btnAsist" : "btnAsist"}
                                        onClick={() => {
                                            setPresent(!present);
                                            setAbsent(false);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </button>
                                    <button
                                        className={absent ? "ausente btnAsist" : "btnAsist"}
                                        onClick={() => {
                                            setPresent(false);
                                            setAbsent(!absent);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className={present ? "presente btnAsist" : "btnAsist"}
                                    >
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </button>
                                    <button className={absent ? "ausente btnAsist" : "btnAsist"}>
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="valoracion">
                            <button className={stars > 0 ? "color stars" : "stars"}>
                                <FontAwesomeIcon icon={faStar} />
                            </button>
                            <button className={stars > 1 ? "color stars" : "stars"}>
                                <FontAwesomeIcon icon={faStar} />
                            </button>
                            <button className={stars > 2 ? "color stars" : "stars"}>
                                <FontAwesomeIcon icon={faStar} />
                            </button>
                            <button className={stars > 3 ? "color stars" : "stars"}>
                                <FontAwesomeIcon icon={faStar} />
                            </button>
                            <button className={stars > 4 ? "color stars" : "stars"}>
                                <FontAwesomeIcon icon={faStar} />
                            </button>
                        </div>
                        <div className="comentarios">
                            <p>Comentario guardado anteriormente...</p>
                            <button onClick={() => setComment(!comment)}>Editar</button>
                            <Modal state={comment} setState={setComment} titulo="Comentarios">
                                <div className="children">
                                    <textarea placeholder="Escribe tu nuevo comentario..." />
                                    <button onClick={() => setComment(false)}>Guardar</button>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="addReu">
                    <button onClick={() => setAddReu(!addReu)}>
                        Agregar reunión
                    </button>
                    <Modal state={addReu} setState={setAddReu} titulo="Agregar nueva reunión">
                        <div className="children">
                            <input type="date" placeholder="..." />
                            <input type="hour" placeholder="..." />
                            <input type="text" placeholder="..." />
                            <button onClick={() => setAddReu(false)}>Guardar</button>
                        </div>
                    </Modal>
                </div>
                
            </div>
        </div>
    );
}

export default MisSesionesTutor;
