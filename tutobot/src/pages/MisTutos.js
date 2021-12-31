import React from 'react';
import CardTuto from '../components/CardMisTutos';
import Tuto from '../data/tuto.json';

function MisTutos() {
    
    Tuto.data.map((titulo, i)=>{
        console.log("Tutorial " + i)
        console.log(titulo.titulo)
        console.log(titulo.descripcion)
    })

    console.log(Tuto.data.length);

    return (
        <div className="misTutos">
          

            {Tuto.data.map((titulo)=>{
                return(
                <CardTuto
                    title= {titulo.titulo}
                    text = {titulo.descripcion}
                    done = "50"
                />)
            })}
    
            {/* <CardTuto
                title="Cálculo de límites"
                text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de límites"
                done="80"
            /> */}
            {/* <CardTuto
                title="Biología"
                text="En este tutorial, aprenderás los conceptos básicos acerca de las ciencias biológicas"
                done="40"
            />
            
            <CardTuto
                title="Cálculo de probabilidades"
                text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de probabilidades"
                done="90"
            /> */}
            
        </div>
    )
}

export default MisTutos;