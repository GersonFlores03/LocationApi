import { useState ,useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import './App.css'

 function App() {
  const[isclima , setisClima] = useState({})
  const [iscelsius ,setCelsius] = useState(true)
  const loader = document.getElementById("loader")
  
  setTimeout(() =>{
    loader?.classList.add("hide")
  }, 1000)
  useEffect(()=>{

   
    
  function success(pos) {
   const crd = pos.coords;
   axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=46dc136f9103941630256983c3a4a97a`)
   .then(res=> setisClima(res.data))
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);

 },[])
 console.log(isclima)

 const  C = (isclima.main?.temp-273.15).toFixed(2)
 const  F = C * 1.8 + 32

 const Boton1 = ()=>{
     setCelsius(!iscelsius)
 }
//Imagen ramdon No terminda dudas
/*const RandomImg = [];
RandomImg[0]= "./assets/beautiful-sunset-beach-landscape-with-boat.jpg"
RandomImg[1]= "./assets/black-rain-abstract-dark-power.jpg"
window.onload = function (){
  const Random = Math.floor(Math.random()* RandomImg.length)
  document.body.style.backgroundImage = `url(${RandomImg[Random]})`
}*/

//Funcion de loader
document.addEventListener("DOMContentLoaded", ()=>{
      loadComponet();
})



  return (
    <div className='Clima'>
    <div className="App">
      <div className='CardClima'>
        <div className='ClimaVariantes'>
        <img src={`http://openweathermap.org/img/wn/${isclima.weather?.[0].icon}@2x.png`} alt="" />
          <ul>
            <li className='ListaUno'> 
            <i className="fa-brands fa-cloudflare"></i> {" "}
             Wind Speed:  <span> {isclima.wind?.speed }  m/s </span>
            </li>
            <li className='ListaDos'>
              <i className="fa-solid fa-cloud"></i> {" "}
              Clouds: <span> {isclima.clouds?.all}  % </span>
            </li>
            <li className='ListaTres'>
              <i className="fa-solid fa-temperature-three-quarters"></i> {""}
             Pressure:  <span> {isclima.main?.pressure} mbr </span>
            </li>
          </ul>
        </div>
        <div className='Location'>
        <h1>Wheather App</h1>
        <h2>{isclima?.name} ,{isclima.sys?.country} </h2>
        </div>
       
        <div className='BotonGrados'>
        <h2> { iscelsius? C: F} {" "} {iscelsius ? " °C " : "°F"} </h2>
        <button onClick={Boton1}>Degrees°C/°F</button>
        </div>
       
       
      </div>
    </div>
   
    <div className='loader' id='loader'>
           <svg class="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.92 56.48">
          <title>Academlo Logo</title>
          <g>
            <g>
              <path
                d="M28.58,15.39H25.16L35.78,36H31.49L20.67,15.71,8.23,38.82H18.94l3-5.43h-3.4l-1.47,2.54h-4l2.69-5.09H25.85l4.28,8H40.67ZM17.23,28.21l3.57-6.6,3.57,6.6Z">
              </path>
            </g>
          </g>
       </svg>
        </div>
    </div>
  )
}

export default App
