import React from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../../molecules/ProductCard";
import styles from "./ProductList.module.scss";

const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  console.log("query", { query });

  return (
    <main className={styles.main}>
      {query ? (
        <ul className={styles.list}>
          <ProductCard />
        </ul>
      ) : (
        <h1>ingrese a query valida</h1>
      )}
    </main>
  );
};

export default ProductsList;
