import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../../molecules/ProductCard";
import Spinner from "../../atoms/spinner";
import ErrorMsg from "../../atoms/errorMsg";
import {BASE_URL} from "../../../config/baseUrl";
import styles from "./ProductList.module.scss";

const ProductsList = () => {
  const [productList, setProductList] = useState({});
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const getProductDetails = async (query) => {
    return fetch(`${BASE_URL}?q=${query}`)
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

  if (productList.hasOwnProperty("error")) return <ErrorMsg errorMsg={productList?.error}/>;

  if (!query) return <ErrorMsg errorMsg="ingrese una Query valida"/>;

  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {productList?.items.slice(0, 4).map((item) => (
          <ProductCard key={item?.id} item={item} />
        ))}
      </ul>
    </main>
  );
};

export default ProductsList;
