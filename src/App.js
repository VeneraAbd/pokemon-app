import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState([]);
//console.log(data, "my data")


useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(resp =>{
      console.log(resp.data.results, "it`s response")
      const respData = resp.data.results
      setData(respData)
    })
    

  }, [])

  return (
    <div className="App">
      <h1>My pokemons</h1>
      <ul>
      {data.map(item => 
      <li> 
        <p>{item.name}</p> 
        <img src={item.url}/>
      </li>
      )}
      </ul>

    </div>
  );
}

export default App;
