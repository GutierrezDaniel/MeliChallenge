import React from 'react';

import styles from './App.module.scss';

import SearchBar from './components/molecules/SearchBar';
import ProductDetails from './components/pages/productDetails';

const App = () => (  
  <div className={styles.body__container}>
    <SearchBar/>
    <ProductDetails/>
  </div>
);

export default App;