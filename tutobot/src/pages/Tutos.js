import React, { useState } from 'react';
import CardTuto from '../components/CardTuto';
import Tuto from '../data/tuto.json';

function Tutos(props) {

    const {title, text, opc1, opc2, opc3, opc4} = props;

    const[rpta, setRpta] = useState(1);

    const cambioRadioRpta=e=>{
      setRpta(e.target.value);
    }

    return (
        <div className='principal'>
        <div className="tutos">

            {Tuto.data.map((titulo)=>{
                return(
                <CardTuto
                    title= {titulo.titulo}
                    text = {titulo.descripcion}
                />)
            })}
             <CardTuto
                    title="Cálculo de integrales"
                    text="En este tutorial, aprenderás tanto conceptos de Cálculo integral, como a usar las diversas técnicas que se emplean para el cálculo de integrales"
                    
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
                    title="Fisica I"
                    text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de derivadas"
                />
                <CardTuto
                    title="Cálculo de determinantes"
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