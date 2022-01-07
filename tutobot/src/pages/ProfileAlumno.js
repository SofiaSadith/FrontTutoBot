import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBook,
  faHome,
  faHeart,
  faDoorClosed,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EditIcon from "@mui/icons-material/Edit";
import "./Profile.css";
// import Chart from 'chart.js/auto';
import "chartjs-plugin-labels";
import {
  barData,
  barOptions,
  pieData,
  pieOptions,
} from "../components/Chart.js";
import { Bar, Pie } from "react-chartjs-2";



function ProfileAlumno() {
  return (
    <div className="perfil">
      {/* <h1> ProfilePage: {username}</h1> */}
      <div id="contenedor">
        <div id="infoAlumno1">
          <div className="icono">
            <FontAwesomeIcon icon={faUser} />
          </div>

          {/* <h2>Laura Santos Balladares</h2> */}

          <h2 class='nombreA'>Laura</h2>
          <div class="form-group">
            <textarea
              maxLength="135"
              className="form-control"
              id="descripcionText"
              placeholder="Descríbete"
              rows="1"
            ></textarea>
          </div>
          <div className="text-center perrito">
            <button className="btn btn-primario" style={{color:"#067CF8"}}>Guardar</button>
            <button type="button" className="btn btn-e">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>

        {/*<div className="datosPersonales"> */}

        <div id="infoAlumno2">
          <h1>Información General</h1>
          <h3>
            <span>Nombres:</span> Laura
          </h3>
          <h3>
            <span>Apellidos:</span> Santos Balladares
          </h3>
          <div className="campo">
            <label for="titleText">Celular:</label>
            <input
              className="form-control"
              id="titleTextA"
              placeholder="Tu teléfono"
            />
            <button type="button" className="btn btn-a" style={{color:"#ff7a00"}}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
          <div className="campo">
            <label for="titleText">Email:</label>
            <input
              className="form-control"
              id="titleTextA"
              placeholder="Tu e-mail"
            />
            <button type="button" className="btn btn-a" style={{color:"#ff7a00"}}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
          <div className="text-center perrito">
            <button className="btn btn-primario" style={{color:"#067CF8"}}>Guardar</button>
          </div>

          {/*<h2>Nombres: Laura</h2>
					<h2>Apellidos: Santos Balladares</h2>
					<h2>Celular: 908671524</h2>
					<h2>Email: laurasb@uni.edu.pe</h2>
					<h2>HORARIO DE ATENCIÓN: </h2> */}
        </div>
      </div>

      <div id="conten-estadisticas">
        <div className="estadisticasA">
          {/* <h1>Estadísticas</h1>
					<h2>Cantidad de tutoriales registrados: </h2>
					<h2>Cantidad de tutoriales completados: </h2>
					<h2>Porcentaje de rendimiento: </h2>
					<h2>Cantidad total de me gusta: </h2>
					<h2>Puntaje total:</h2>
					<h2>Promedio de notas:</h2>
					<h2>Reuniones: </h2> */}
          <h1>ESTADÍSTICAS</h1>

          <div className="barNotasA">
            Promedio de notas
            <Bar data={barData} options={barOptions} />
          </div>
          <div className="pieAprobadoA">
            Rendimiento
            <Pie data={pieData} options={pieOptions} />
          </div>

          {/* <h2>Cantidad de tutoriales subidos: 10</h2>
					<h2>Cantidad total de registros: 3</h2>
					<h2>Cantidad de registros por tutorial: 0.3</h2>
					<h2>Cantidad total de me gusta: 2</h2>
					<h2>Cantidad de me gusta por Tutorial: 0.2</h2>
					<h2>Reuniones: </h2> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileAlumno;
