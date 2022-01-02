import React from "react";
import "./Modal.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Modal = ({children, state, setState, titulo}) => {
    return(
        <>
            {state? (
            <div className="overlay">
                <div className="contenedor-modal">
                    <div className="encabezado-modal">
                        <h4>{titulo}</h4>
                    </div> 
                    <button className="botonCerrar" onClick={() => setState(false)}>
                        <FontAwesomeIcon icon={faClose}/>
                    </button>
                    {children}
                </div>
            </div>
            ) : (
                <div></div>
            )
            }
        </>
    )
}

export default Modal;