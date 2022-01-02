import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Title from './Title';

import { useState, useEffect } from 'react';

//var userCurrent = localStorage.getItem("user") == "" ? "" : JSON.parse(localStorage.getItem("user"));

//export const kind = 'tutor';
export const kind = 'alumno';

function Navbar(props) {

  const [sesion, setSesion] = useState(props.sesion);

  useEffect(() => {
    props.onCollapse(sesion);
  }, [sesion]);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

      <div className='navbar'>
            <h2>
            <Switch>
                <Route path='/perfilalumno'>
                    <h2>Perfil</h2>
                </Route>
                <Route path='/perfiltutor'>
                    <h2>Perfil</h2>
                </Route>
                <Route path='/start'>
                    <h2>Start</h2>
                </Route>
                {/* <Route path='/question'>
                    <h1>PREGUNTAS</h1>
                </Route> */}
                <Route path='/tutos'>
                    <h2>Tutoriales</h2>
                </Route>
                <Route path='/mistutos'>
                    <h2>Mis tutoriales</h2>
                </Route>
                <Route path='/creartutos'>
                    <h2>Perfil</h2>
                </Route>
                <Route path='/misSesiones'>
                    <h2>Mis sesiones</h2>
                </Route>
                <Route path='/misSesionesTutor'>
                    <h2>Mis Sesiones</h2>
                </Route>
                <Route path='/misalumnos'>
                    <h2>Mis Alumnos</h2>
                </Route>
                {/*<Route exact path='/'>
                    <h1>HOME</h1>
              </Route>*/}

                
            </Switch>
            </h2>
        </div>

        <nav className='nav-menu active'>
          <ul className='nav-menu-items'>
          <Title/>

            {Sidebar.map((item, index) => {
              if(item.kind == kind || item.kind == ''){
                return (
                  <li key={index} className={item.cName} onClick={() => { 
                    item.path!="/inicio" ? localStorage.setItem("user", "inicioSesion") : localStorage.setItem("user", "");
                    setSesion(!sesion); 
                      }
                    }>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;