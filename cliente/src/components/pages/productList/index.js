import React from "react";
import ProductCard from "../../molecules/ProductCard";
import styles from "./ProductList.module.scss";


const ProductsList = () => {
  return (
    <main className={styles.main}>      
      <ul className={styles.list}>
        <ProductCard/>
      </ul>
    </main>
  );
};

export default ProductsList;
