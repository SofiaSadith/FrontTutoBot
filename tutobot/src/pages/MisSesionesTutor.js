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
import Dropdown from "../components/Dropdown";

function MisSesionesTutor() {
    const [addReu, setAddReu] = useState(false);
    const [comment, setComment] = useState(false);
    const [present, setPresent] = useState(false);
    const [absent, setAbsent] = useState(false);
    const stars = 4;
    const [selected, setSelected] = useState("Alumno");

    async function postData(url = "", data) {
        console.log(JSON.stringify(data));
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }

    function Comentar() {
        var urlBd = "http://localhost:5000"
        const id = 1;//document.getElementById("emailinp").value;
        const c = document.getElementById("com").value;
        let plini = {
            id: id, comentario: c
        }
        console.log(typeof(em));
        postData(urlBd + '/sesiones/comentar', plini)
            .then(data => {
                if (data.status === "SUCCESS") {
                    alert("Comentario guardado");
                }
                else {
                    alert(data.message);
                }
            }).catch(err => console.log(err));
    }

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
                                <div className="childrenC">
                                    <textarea id="com" placeholder="Escribe tu nuevo comentario..." />
                                    <button onClick={() => {Comentar();setComment(false);}}>Guardar</button>
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
                            <input className= 'fecha' type="date"/>
                            <input className='hora' type="time" placeholder="Seleccionar hora"/>
                            < div className="alumnado">
                                <Dropdown selected={selected} setSelected={setSelected} />
                            </div> 
                            <button onClick={() => setAddReu(false)}>Guardar</button>
                        </div>
                    </Modal>
                </div>
                
            </div>
        </div>
    );
}

export default MisSesionesTutor;
