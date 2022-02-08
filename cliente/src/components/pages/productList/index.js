import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../../molecules/ProductCard";
import Spinner from "../../atoms/spinner";
import styles from "./ProductList.module.scss";

const ProductsList = () => {
  const [productList, setProductList] = useState({});
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const getProductDetails = async (query) => {
    return fetch(`http://localhost:3001/api/items?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        setLoading(false);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getProductDetails(query);
  }, [query]);

  

  if (loading) return <Spinner />;

  if (productList.hasOwnProperty("error")) return <h1>{productList?.error}</h1>;

  if (!query) return <h1>ingrese una Query valida</h1>;  

  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {
          productList?.items.slice(0,4).map( item => <ProductCard key={item?.id} item={item}/>)
        }        
      </ul>
    </main>
  );
};

export default ProductsList;
