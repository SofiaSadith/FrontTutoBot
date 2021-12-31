import React from 'react';
import CardTuto from '../components/CardTuto';
import "./EditarTuto.css";

function TutosCreados() {
    return (
        <div className="misTutos">
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
                title="Cálculo de determinantes"
                text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de determinantes"
            />
            <CardTuto
                title="Cálculo de límites"
                text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de límites"
            />
        </div>
    )
}

export default TutosCreados;