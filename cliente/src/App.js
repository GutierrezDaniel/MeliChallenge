import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";
import SearchBar from "./components/molecules/SearchBar";
import ProductsList from "./components/pages/productList";
import ProductDetails from "./components/pages/productDetails";
import Landing from "./components/pages/landing";
import ErrorMsg from "./components/atoms/errorMsg";


const App = () => (
  <div className={styles.body__container}>
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/items" element={<ProductsList />} />
        <Route path="/items/:id" element={<ProductDetails />} />        
        <Route path="*" element={<ErrorMsg errorMsg="404 Pagina no disponible"/>}/>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
