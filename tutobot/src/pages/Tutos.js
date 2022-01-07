import React, { useState } from 'react';
import CardTuto from '../components/CardTuto';
import Tuto from '../data/tuto.json';
import "./Tutos.css";

function Tutos(props) {

    const {title, text, opc1, opc2, opc3, opc4} = props;

    const[rpta, setRpta] = useState(1);

    const cambioRadioRpta=e=>{
      setRpta(e.target.value);
    }

    return (
        
        <div className='principal'>
            <div className="filtro">
                <input className="buscador" type="search" placeholder="&#x1F50D;" aria-label="Search"/>
                {/*<select name="cat" id="selCat" className="form-control"> 
                </select>*/}
                <select name="brn" id="selBrand">
                </select>
                <select name="brm" id="selA">
                </select>
                <select name="asd" id="selF">
                </select>
                {/*<input type="number" id="textPrice" placeholder="Precio máximo"/>*/}
                <button name="btnSearch" id="btnSr" onclick="searchProduct()">Buscar</button>
            </div>
            <div className="tutos">
            {Tuto.data.map((titulo)=>{
                return(
                <CardTuto
                    title= {titulo.titulo}
                    text = {titulo.descripcion}
                />)
            })}
             <CardTuto
                    title="Cálculo diferencial e integral avanzado"
                    text="En este tutorial, aprenderás que son y como se calculan las inegrales dobles y triples."
                    
                />
                <CardTuto
                    title="Cálculo de derivadas"
                    text="En este tutorial, conoceras el concepto de derivada, así como las diversas técnicas para su cálculo"
                />
                <CardTuto
                    title="Cálculo de determinantes"
                    text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de determinantes"
                />
                <CardTuto
                    title="Cálculo de límites"
                    text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de límites"
                />
                <CardTuto
                    title="Biología"
                    text="En este tutorial, aprenderás los conceptos básicos acerca de las ciencias biológicas"
                />
                <CardTuto
                    title="Introducción a la Programación"
                    text="En este tutorial, aprenderás los conceptos básicos de programación así como programar en lenguaje C++"
                />
                <CardTuto
                    title="Calculo de dervidas II"
                    text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de derivadas"
                />
                <CardTuto
                    title="Física I"
                    text="En este tutorial aprenderas sobre los fenómenos físicos tales como la estática, dinámica, MRU,MRUV,etc.. "
                />
                <CardTuto
                    title="Química I"
                    text="En este tutorial aprenderás sobre los fenómenos químicos básicos, tales como: reacciones químicas, estequeometria, gases, etc.."
                />
                <CardTuto
                    title="Redacción"
                    text="En este tutorial, las diversas reglas a la hora de redacctar algún documento."
                /> 
            </div>
        </div>
    )
}

export default Tutos;