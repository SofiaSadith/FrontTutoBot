import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SesionesAlumnos.css";
import {
  faCheckCircle,
  faTimesCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function MisSesionesAlumno() {
  const present = true;
  const absent = false;
  const [stars, setStars] = useState(0);
  var comen = "primer comentario";
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

  function loadComentario() {
    var urlBd = "http://localhost:5000";
    const id = 1; //document.getElementById("emailinp").value;
    let plini = {
      id: id,
    };
    console.log(typeof em);
    postData(urlBd + "/sesiones/loadC", plini)
      .then((data) => {
        if (data.status === "SUCCESS") {
			console.log(data.message);
          comen = data.message;
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.log(err));
  }

  loadComentario();

  return (
    <div className="perfil">
      {/* <h1> ProfilePage: {username}</h1> */}

      <div className="reuniones">
        <h3>REUNIONES</h3>
        <div className="tablaAlumno">
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
              <button className={present ? "presente btnAsist" : "btnAsist"}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </button>
              <button className={absent ? "ausente btnAsist" : "btnAsist"}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>
            <div className="valoracion">
              {present ? (
                <>
                  <button
                    className={stars > 0 ? "color stars" : "stars"}
                    onClick={() => setStars(1)}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button
                    className={stars > 1 ? "color stars" : "stars"}
                    onClick={() => setStars(2)}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button
                    className={stars > 2 ? "color stars" : "stars"}
                    onClick={() => setStars(3)}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button
                    className={stars > 3 ? "color stars" : "stars"}
                    onClick={() => setStars(4)}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button
                    className={stars > 4 ? "color stars" : "stars"}
                    onClick={() => setStars(5)}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                </>
              ) : (
                <>
                  <button className="noStars">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="noStars">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="noStars">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="noStars">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="noStars">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                </>
              )}
            </div>
            <div className="comentarios">
              <p>Comentario guardado anteriormente... {comen}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisSesionesAlumno;
