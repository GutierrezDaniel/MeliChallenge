import React from "react";

import meliLogo from "../../../assets/Logo_ML@2x.png.png";
import searchIcon from "../../../assets/ic_Search@2x.png.png";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const SubmitSearch = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <header className={styles.searchBar__wrapper}>
      <div className={styles.searchBar__molecule}>
        <img
          src={meliLogo}
          alt="Mercadolibre logo"
          className={styles.meliLogo}
        />
        <form onSubmit={(e) => SubmitSearch(e)} className={styles.form}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            arialabel="Ingresa el producto a buscar"
            autoCorrect="off"
            spellCheck="false"
            autoComplete="off"
            tabIndex="1"
            onKeyDown={(e) => {
              if (e.keyCode === 13) SubmitSearch(e);
            }}
            className={styles.input}
          />
          <button type="submit" className={styles.input__button}>
            <img
              src={searchIcon}
              alt="Buscar"
              className={styles.input__searchIcon}
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
