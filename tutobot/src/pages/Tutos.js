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
                    text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de integrales"
                    
                />
                <CardTuto
                    title="Cálculo de derivadas"
                    text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de derivadas"
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
                    title="Cálculo de probabilidades"
                    text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de probabilidades"
                />
                <CardTuto
                    title="Cálculo de derivadas"
                    text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de derivadas"
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
                </div>
        </div>
    )
}

export default Tutos;