import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card" style={{position:'absolute', left:"600px", top:"240px", height:"14rem", padding:"20px"}}>
      <div className="card-content">
        <div className="content">
          <h1 style={{ marginBottom:"20px"}}>Examen Final</h1>
          <p style={{fontSize:"20px"}}>Éxitos!</p>
          <button className="btn btn-info btn-medium" style={{fontSize:"22px"}} onClick={onQuizStart}>Iniciar</button>
        </div>
      </div>
    </div>
  );
}

export default Start;