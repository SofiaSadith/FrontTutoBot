import React from 'react';
import robots from '../media/robots.png';
import './Home.css'

function Home(){
    return(
        <div className='principal'>
            <div className='confe'>
                <div className='picture'>
                    <img classname='inic' src={robots} />
                </div>
               
            </div>
        </div>
    )
}

export default Home;