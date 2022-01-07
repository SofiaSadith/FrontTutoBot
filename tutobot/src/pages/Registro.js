import React, { useEffect, useState } from 'react'
//import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './Registro.css'
import estudiante from '../media/estudiante.png'
//import Input from './componentes/Input';

export var knd=false;


function Registro(props) {
    const [sesion, setSesion] = useState(props.session);
    // const[kind, setKind] = useState(props.kind);
    useEffect(() => {
        props.onCollapse(sesion);
    }, [sesion]);

    // const [isTutor, setTutor] = useState(props.isTutor);
    const [isTutor, setTutor] = useState(false);
    // setTutor(false);
    const [registro, setRegistro] = useState(false);
    
    const [usuario, cambiarUsuario] = useState({ campo: '', valido: null });
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [password2, cambiarPassword2] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);
    
    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validarPassword2 = () => {
        if (password.campo.length > 0) {
            if (password.campo !== password2.campo) {
                cambiarPassword2((prevState) => {
                    return { ...prevState, valido: 'false' }
                });
            } else {
                cambiarPassword2((prevState) => {
                    return { ...prevState, valido: 'true' }
                });
            }
        }
    }

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            usuario.valido === 'true' &&
            nombre.valido === 'true' &&
            password.valido === 'true' &&
            password2.valido === 'true' &&
            correo.valido === 'true' &&
            telefono.valido === 'true' &&
            terminos
        ) {
            cambiarFormularioValido(true);
            cambiarUsuario({ campo: '', valido: '' });
            cambiarNombre({ campo: '', valido: null });
            cambiarPassword({ campo: '', valido: null });
            cambiarPassword2({ campo: '', valido: 'null' });
            cambiarCorreo({ campo: '', valido: null });
            cambiarTelefono({ campo: '', valido: null });

            // ... 
        } else {
            cambiarFormularioValido(false);
        }
    }

    


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

    function IniciarSesion() {
        var urlBd = "http://localhost:5000"
        const em = document.getElementById("emailinp").value;
        const pw = document.getElementById("pwdinp").value;
        const kn = isTutor;
        let plini = {
            email: em, clave: pw
        }
        var dir="";
        if(kn === false){
            dir="/usuario/iniciaSesionAlumno";
        }else{
            dir="/usuario/iniciaSesionProfesor";
        }
        console.log(typeof(em));
        postData(urlBd + dir, plini)
            .then(data => {
                if (data.status === "SUCCESS") {
                    setSesion(!sesion);
                    localStorage.setItem("user", "iniciaSesion");
                }
                else {
                    alert(data.message);
                }
            }).catch(err => console.log(err));
    }

    function Registrar() {
        var urlBd = "http://localhost:5000"
        const nom = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const correo= document.getElementById("correo").value;
        const tel = document.getElementById("telefono").value;
        const contra = document.getElementById("contraseña").value;
        
        const kn = isTutor;
        var dir="";
        let datosReg={};
        if(kn===false){
            dir='/usuario/creaUsuarioAlumno';
            datosReg = {
                nombre: nom,
                apellido: apellidos,
                email: correo,
                clave: contra,
                telefono: tel
            };
        }else{
            const lnk= document.getElementById("link").value;
            dir='/usuario/creaUsuarioProfesor';
            datosReg = {
                nombre: nom,
                apellido: apellidos,
                email: correo,
                clave: contra,
                telefono: tel,
                link: lnk
            };
        }
        postData(urlBd + dir, datosReg)
            .then((data) => {
                console.log(data);
                alert(data["message"]);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <body>

            {/*<img className="estudiante" src={estudiante} />*/}
            {registro ? (

                <div className="registro text-center">
                    <h1>Registro</h1>
                    <div className="switch-container">
                        <span style={{ color: isTutor ? "grey" : "black", fontWeight: "bold" }}> Alumno </span>
                        <div className="switch-checkbox">
                            <label className="switch">
                                <input type="checkbox" onChange={() => {setTutor(!isTutor); knd=!isTutor;localStorage.setItem("kbool", !isTutor);}} />
                                <span className={`${isTutor ? "tutor" : ""} slider`}> </span>
                            </label>
                        </div>
                        <span style={{ color: isTutor ? "black" : "grey", fontWeight: "bold" }}> Tutor </span>
                    </div>
                    <form className="form" >
                        <input
                            type="text"
                            required id="nombre"
                            placeholder="Nombre"
                        />
                        {/* <label className="label"> 
                        <span className="nombre_campo">Nombre(s) </span>
                    </label> */}

                        <input
                            type="text"
                            required id="apellidos"
                            placeholder="Apellidos"
                        />
                        {/* <label className="label"> 
                        <span className="nombre_campo">Apellidos </span>
                    </label> */}

                        <input
                            type="text"
                            required id="correo"
                            placeholder="Correo Institucional"
                        />
                        {/* <label className="label">
                        <span className="nombre_campo">Correo </span>
                    </label> */}

                        <input
                            type="text"
                            required id="telefono"
                            placeholder="Teléfono"
                        />
                        {/* <label className="label"> 
                        <span className="nombre_campo">Teléfono </span>
                    </label> */}

                        <input
                            type="password"
                            required id="contraseña"
                            placeholder="Contraseña"
                        />
                        {/* <label className="label"> 
                        <span className="nombre_campo">Contraseña </span>
                    </label> */}

                        {isTutor ? (

                            <input
                                type="text"
                                required id="link"
                                placeholder="Link de contacto"
                            />


                        ) : (
                            <div></div>
                        )}

                        {/*formularioValido === false && <MensajeError>
                        <p>
                            <FontAwesomeIcon icon={faExclamationTriangle}/>
                            <b>Error:</b> Por favor rellena el formulario correctamente.
                        </p>
                    </MensajeError>}
                    <ContenedorBotonCentrado>
                        <Boton type="submit">Enviar</Boton>
                        {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
                    </ContenedorBotonCentrado>*/}
                    </form>

                    <button className="btnRegistro" onClick={()=>{Registrar();}}>
                        Registrarse
                    </button>
                </div>
            ) : (
                <div className="iniciarSesion text-center">
                    <h1>Iniciar Sesión</h1>
                    <div className="switch-container">
                        <span style={{ color: isTutor ? "grey" : "black", fontWeight: "bold" }}> Alumno </span>
                        <div className="switch-checkbox">
                            <label className="switch">
                                <input type="checkbox" onChange={() => {setTutor(!isTutor); knd=!isTutor;localStorage.setItem("kbool", !isTutor);}} />
                                <span className={`${isTutor ? "tutor" : ""} slider`}> </span>
                            </label>
                        </div>
                        <span style={{ color: isTutor ? "black" : "grey", fontWeight: "bold" }}> Tutor </span>
                    </div>
                    <form className="form">
                        <input id="emailinp" type="text" required placeholder="Email" />
                        <input id="pwdinp" type="password" required placeholder="Password" />
                    </form>
                    
                    <button className="btnRegistro" onClick={() => {
                        IniciarSesion();
                        console.log(isTutor);
                        // setSesion(!sesion);
                        // localStorage.setItem("user", "iniciaSesion");
                    }
                    }>Entrar</button>
                    

                </div>
            )}
            <div className={`${registro ? "izq" : ""} cambio`}>
                <h3>{`${registro ? "Ya" : "Aún no"} tienes una cuenta?`}</h3>
                <h5>{`${registro ? "Inicia sesión para entrar a la página" : "Regístrate para iniciar sesión"}`}</h5>
                <button className="btnCambiar mt-3" onClick={() => setRegistro(!registro)}>
                    {`${registro ? "Iniciar Sesión" : "Registrarse"}`}
                </button>
            </div>
        </body>
    )

}

export default Registro;