import React, {useState, useEffect} from 'react';
import Flight from './Flight';
import './App.css';

function App() {

  const [flight, setFlight] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setFlight(json);
      })
  }, []) 

  return (
    <div className="main">
      <h2>Tímasetning fluga</h2><br/> 
      <div className="App">{flight.map((flights, i) => <Flight key={i} info={flights}/>)}</div>
    </div>
  );
}

export default App;
