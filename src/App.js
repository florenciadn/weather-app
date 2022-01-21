import React from 'react';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { Cairns } from './data.js';
import styles from './App.module.css'
import cities from './data.js';


const apiKey = "37ef2bd5bc0f7a987237f28a23821182"





function App() {

  const [data, setData] = React.useState([]);

  

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setData(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  
    }
    

    function handleOnClose(id) {
      setData(prevData =>{
        return prevData.filter(city => city.id !== id)
      })
    } 



  return (
    <div className={styles.app}>

      <div className={styles.bkg}/>

    

    <div className={styles.container}>
      
      <div>
      <SearchBar
        onSearch={onSearch}
      />
      </div>
      
      
      <div className={styles.citiesContainer}>
      <Cards
        cities={data} onClose={handleOnClose}
        />
      </div>


    </div> 
      
   
    </div>
  );
  
}

export default App;
