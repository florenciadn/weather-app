import React from 'react';
import styles from '../Card/Card.module.css';
import {IoCloseCircleOutline} from 'react-icons/io5'


export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
  <div className={styles.card}>

    
    <span className={styles.name}> 
    {name} 
    <button className={styles.button} onClick={onClose}> <IoCloseCircleOutline/> </button>
    </span>
    
     <img src = {`http://openweathermap.org/img/wn/02d@2x.png`} alt= "icono del clima" />


      <div className={styles.temps}>
      <Temp label="Min" temp={min} />
      <Temp label="Max" temp={max} />
      </div>

  </div>

  )
};

// mala practica, tendria que estar en un archivo a parte :)


function Temp({ label, temp}) {
  return (
    <div className={styles.temp}>
        <span>{label} </span>
        <span> {temp} </span>

    </div>
  )
}