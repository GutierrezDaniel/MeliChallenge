import React from 'react';

import styles from './App.module.scss';

import SearchBar from './components/molecules/SearchBar';
import ProductsList from './components/pages/productList';
// import ProductDetails from './components/pages/productDetails';

const App = () => (  
  <div className={styles.body__container}>
    <SearchBar/>
    {/* <ProductDetails/> */}
    <ProductsList/>
  </div>
);

export default App;