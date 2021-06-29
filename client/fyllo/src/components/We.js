import { style } from '@angular/animations';
import React,{useState,useEffect} from 'react'

export default function We() {


    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('tel-aviv');
    const [state, setState] = useState('tel-aviv');
    const [guess,setGuess] = useState();
    const [count,setcount] = useState(0);
    const [right,setRight] = useState(0);
    const [guessNumber,setGuessNumber] = useState(0)

    
    // API KEY AND URL
    //const apiKey = process.env.REACT_APP_API_KEY;
    const api_key = '9cff733aee57cb05b63dd4f731c46bc4'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${api_key}`;

    useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => setApiData(data));
         
          
      }, [apiUrl]);

    const inputHandler = (event) => {
        setGetState(event.target.value);
      };
      

      const handlerGuess =(event)=>{
          setGuess(event.target.value)
          console.log(guess)
      }

      const submitHandler = () => {
        setState(getState);
      };
      
      const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
      };

    return (

        
        <div className="App">
            
    <header className="d-flex justify-content-center align-items-center">
      <h2> Weather </h2>
    </header>
    <div className="container">
        
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
        <div class="col-auto">
          <label for="location-name" class="col-form-label">
            Enter Location :
          </label>
        </div>
        <div class="col-auto">
          <input
            type="text"
            id="location-name"
            class="form-control"
            onChange={inputHandler}
            value={getState}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={submitHandler}>
          Search
        </button>

        <input placeholder="Set guess" onChange={handlerGuess}></input>
      </div>

      <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
        {apiData.main ? (
          <div class="card-body text-center">
          

            <p className="h2">
              {kelvinToFarenheit(apiData.main.temp)}&deg; C
            </p>

            <p className="h5">
              <i className="fas fa-map-marker-alt"></i>{' '}
              <strong>{apiData.name}</strong>
            </p>

           
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>


<label style={right==3?{backgroundColor:'green'}:{backgroundColor:'red'}}>{guess}</label>
<label style={right==3?{backgroundColor:'green'}:{backgroundColor:'red'}}> {guess}</label>
<label style={right==3?{backgroundColor:'green'}:{backgroundColor:'red'}}>{guess}</label>
<label style={right==3?{backgroundColor:'green'}:{backgroundColor:'red'}}>{guess}</label>
   </div>
    )
}
