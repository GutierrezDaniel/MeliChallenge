import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PriceBox from "../../molecules/PriceBox";
import styles from "./ProductDetails.module.scss";


const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getProductDetails = async (id) => {
    return fetch(`http://localhost:3001/api/items/${id}`)
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

  if (loading) return <h1>Cargando...</h1>;

  if(product.hasOwnProperty('error')) return <h1>{product?.error}</h1>; 

  const tempBreadcrumb =
    "Electronica, Audio y Video > iPod > Reproductores > iPod touch > 32 GB";

  return (
    <>
      <p className={styles.breadCrumb}>{tempBreadcrumb}</p>
      <main className={styles.main}>
        <div className={styles.productContainer}>
          <div className={styles.imageContainer}>
            <img src={product?.item?.picture} alt={product?.item?.title} />
          </div>
          <PriceBox
            title={product?.item?.title}
            price={product?.item?.price?.amount}
            decimals={ product?.item?.price?.decimals || "00"}
            condition={product?.item?.condition}
            quantity={product?.item?.sold_quantity}
            onclick={() => {}}
          />
        </div>
        <section className={styles.section}>
          <h2>Descripción del producto</h2>
          <p style={{whiteSpace: "pre-line"}}>{product?.item?.description}</p>
        </section>
      </main>
    </>
  );
};

export default ProductDetails;
