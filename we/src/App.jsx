 import { useState } from "react"
import axios from "axios";
import './App.css';

let baseUrl = ``;
if (window.location.href.split(":")[0] === "http") {
    baseUrl = `http://localhost:5001`;
}

function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [cityName, setCityName] = useState("")
console.log(cityName);
  const submitHandler = (e) => {
      e.preventDefault();
      
      // let forCast = "http://localhost:3000/"+e;
    //  console.log("I am click handler")
    axios.get(`${baseUrl}/${cityName}`)
          .then(response => {
              console.log("response: ", response.data);

              setWeatherData(response.data);
          })
          .catch(err => {
              console.log("error: ", err);
          })
  }

  return (
      <div className="main">
          <div className="content">
            
          <form onSubmit={submitHandler}>
              City Name:
             

          <select name="text"  onChange={(e) => { setCityName(e.target.value) }} className="inp" > 
            <option value="Karachi" >Karachi</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Lahore">Lahore</option>

          </select>




              <button type="submit">GET Weather</button>
          </form>
          <br />
          <br />

          {(weatherData === null) ? null :
              <div>
                <h3>{cityName}</h3>
                  Temperature: {Math.round(weatherData?.temp)}°C
                  <br />
                  <br />
              
                  min: {Math.round(weatherData?.min)}°C
                  <br />
                  <br />
                  max: {Math.round(weatherData?.max)}°C
                  <br />
                  <br />
                  Humidity: {Math.round(weatherData?.humidity)}°C
                  <br />
                  <br />

              </div>
          }
          </div>
      </div>
  );
        }
   

export default App;



