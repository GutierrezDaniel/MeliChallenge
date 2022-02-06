import React from "react";

import meliLogo from "../../../assets/Logo_ML@2x.png.png";
import searchIcon from "../../../assets/ic_Search@2x.png.png";
import styles from "./SearchBar.module.scss";

const SearchBar = () => (
  <header className={styles.searchBar__wrapper}>
      <div className={styles.searchBar__molecule}>
          <img src={meliLogo} alt="Mercadolibre logo" className={styles.meliLogo}/>
          <form onSubmit={(e)=> e.preventDefault()} className={styles.form}>
                <input 
                    type="text" 
                    placeholder="Nunca dejes de buscar"
                    arialabel="Ingresa el producto a buscar"
                    autocorrect="off"
                    spellCheck="false"
                    autoComplete="off"                    
                    tabindex="1"
                    className={styles.input}/>
                <button type="submit" className={styles.input__button}>
                    <img src={searchIcon} alt="Buscar" className={styles.input__searchIcon}/>
                </button>
          </form>
      </div>
  </header>
);

export default SearchBar;
