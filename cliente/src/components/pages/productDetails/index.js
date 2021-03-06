import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PriceBox from "../../molecules/PriceBox";
import Spinner from "../../atoms/spinner";
import ErrorMsg from "../../atoms/errorMsg";
import {BASE_URL} from "../../../config/baseUrl";
import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getProductDetails = async (id) => {
    return fetch(`${BASE_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  if (loading) return <Spinner />;

  if (product.hasOwnProperty("error")) return <ErrorMsg errorMsg={product?.error}/>;

  const strDecimals = String(product?.item?.price?.decimals);

  

  return (
    <>
      <main className={styles.main}>        
        <div className={styles.productContainer}>
          <div className={styles.imageContainer}>
            <img src={product?.item?.picture} alt={product?.item?.title} />
          </div>
          <PriceBox
            title={product?.item?.title}
            price={product?.item?.price?.amount}
            decimals={strDecimals === "0" ? "00" : strDecimals}
            condition={product?.item?.condition}
            quantity={product?.item?.sold_quantity}
          />
        </div>
        <section className={styles.section}>
          <h2>Descripción del producto</h2>
          <p style={{ whiteSpace: "pre-line" }}>{product?.item?.description}</p>
        </section>
      </main>
    </>
  );
};

export default ProductDetails;
