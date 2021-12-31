import React, { useState } from 'react';
import {Link} from "react-router-dom";

import './CardMisTutos.css';

function CardMisTutos(props) {

    const {title, text, done, opc2, opc3, opc4} = props;
    const [style, setStyle] = useState({});
    setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);

    return (
        <div className="cardTuto">
            <div className="card" style={{display: "block"}}>
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize:"21px"}}>{title}</h5>
                    <p className="card-text" style={{marginTop:"20px", fontSize:"16px"}}>{text}</p>
                    
                    <div className="progress">
			            <div className="progress-done" style={style}>
			            	{done}%
			            </div>
		            </div>
                    <Link to={"/verTuto/"+title}>
                    <input type="submit" value="Ver Más" style={{color:"#fff",width:"8rem", bottom:"15px", left:"6.5rem"}} className='btn bt'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardMisTutos;