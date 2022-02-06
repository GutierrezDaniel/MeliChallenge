import React from 'react';

import styles from './App.module.scss';

import SearchBar from './components/molecules/SearchBar';

const App = () => (  
  <div className={styles.body__container}>
    <SearchBar/>
    <h1>Mercadolibre Challenge</h1>
  </div>
);

export default App;