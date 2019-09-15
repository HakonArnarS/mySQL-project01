import React from 'react';
import './App.css';
import Form from './Form.js';

export default props=> (
    <div>
        Tími: <p>{props.info.date}</p>
        {/* Flugnúmer: <p>{props.info.flightNumber}</p><br/>
        Áfangastaður: <p>{props.info.toDestination}</p><br/>
        Áætluð lending: <p>{props.info.plannedArrival}</p><br/>
        Raunlending: <p>{props.info.realArrival}</p><br/>
        Staða: <p>{props.info.status}</p><br/> */}
        <Form />
    </div>

)