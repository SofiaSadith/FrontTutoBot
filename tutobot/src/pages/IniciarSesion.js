import React, {useEffect} from 'react'

export default function IniciarSesion() {

    async function postData(url = "", data) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }

    function IniciarSesion(){
        var urlBd="https://localhost:5000"
        console.log("Funciona");
        const em=document.getElementsByClassName("form-control mb-3 mt-4")[0].value;
        const pw=document.getElementsByClassName("form-control")[1].value;
        const plini = {
            email:em,
            password:pw,
            kind:1,
        }
        postData(urlBd + '/user/signin', plini)
            .then(data => {
                console.log("inin");
                if (data.status == "SUCCESS") {
                    //setSesion(!sesion);
                }
                else {
                    alert(data.message);
                }
            }).catch(err => console.log(err));       
    }

    return (
        <div style={{marginLeft:"400px", marginTop:"200px", width:"40rem"}}>
            <h1>Iniciar Sesión</h1>
            <input type="email" className="form-control mb-3 mt-4" placeholder="Email:" />
            <input type="password" className="form-control" placeholder="Password:" />
            <button className="btn btn-secondary mt-3" onClick={IniciarSesion}>ENVIAR</button>
        </div>

    )
}