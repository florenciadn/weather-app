import React from 'react';
import styles from '../SearchBar/SearchBar.module.css'
import { IoIosAdd } from "react-icons/io";

export default function SearchBar({onSearch}) {
  // acá va tu código

  function handleOnSearch() {
    if (typeof onSearch === "function"){
      const input = document.getElementById("search-bar-input")
      onSearch(input.value);
      input.value = "";
    }


  }
  return (
  <div className={styles.searchBar}>
    <input className={styles.input} id="search-bar-input" placeholder= "Agregar una ciudad..."/>

    <button className={styles.button} onClick={handleOnSearch}> <IoIosAdd/> </button>    
    
  </div>
  )};



