import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";
import SearchBar from "./components/molecules/SearchBar";
import ProductsList from "./components/pages/productList";
import ProductDetails from "./components/pages/productDetails";


const App = () => (
  <div className={styles.body__container}>
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/items" element={<ProductsList />} />
        <Route path="/items/:id" element={<ProductDetails />} />        
        <Route path="*" element={<h1>404 no encontrado!</h1>} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
