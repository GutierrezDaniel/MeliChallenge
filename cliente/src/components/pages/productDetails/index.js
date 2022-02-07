import React from "react";
import mockData from "./mockData";
import PriceBox from "../../molecules/PriceBox";

import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {

  const { 
     title,
     price, 
     picture, 
     condition, 
     sold_quantity, 
     description } = mockData.item;
  const { amount, decimals } = price;
  const textDescription = String(description);

  const propDecimals = decimals !== '0' ? "00" : decimals+"";

  const tempBreadcrumb = "Electronica, Audio y Video > iPod > Reproductores > iPod touch > 32 GB"

  return (
    <>
    <p className={styles.breadCrumb}>{tempBreadcrumb}</p>
    <main className={styles.main}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={picture} alt={title} />
        </div>
        <PriceBox         
          title={title}
          price={amount}
          decimals={propDecimals}
          condition={condition}
          quantity={sold_quantity}
          onclick={() => {}}          
        />
      </div>
      <section className={styles.section}>
        <h2>Descripción del producto</h2>
        <p>{textDescription}</p>
      </section>
    </main>
    </>
  );
};

export default ProductDetails;
