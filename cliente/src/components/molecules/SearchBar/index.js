import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import meliLogo from "../../../assets/Logo_ML@2x.png.png";
import searchIcon from "../../../assets/ic_Search@2x.png.png";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {

  const navigate = useNavigate();
  const searchBar = useRef();

  const SubmitSearch = (e) => {
    e.preventDefault();     
    const pressSearchButton = e?.type === "submit";   
    if(pressSearchButton) {
      navigate(`/items?q=${e?.target[0]?.value}`,{ replace: true });
      searchBar.current.value = '';
      return;        
    }
    navigate(`/items?q=${e?.target?.value}`, { replace: true });
    searchBar.current.value = '';
  };

  return (
    <header className={styles.searchBar__wrapper}>
      <div className={styles.searchBar__molecule}>
        <img
          src={meliLogo}
          alt="Mercadolibre logo"
          className={styles.meliLogo}
          onClick={() => {
            navigate("/", { replace: true });
            searchBar.current.value = '';
          }}
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
            ref={searchBar}
            onKeyDown={(e) => {
              const pressEnter = e.keyCode === 13;
              if (pressEnter) SubmitSearch(e);
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
