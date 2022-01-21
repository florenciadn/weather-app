import React from 'react';
import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'


export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (

  <div className={styles.cards}>

   {cities.map((city) => 
    (<Card 

      key={city.id}

      min={city.min} 
      max={city.max}
      name= {city.name}
      img={city.img} 
      onClose={() => onClose(city.id)}
      />))}
    </div>

  )
};