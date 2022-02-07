import React from "react";

import freeshippingIcon from "../../../assets/ic_shipping@2x.png.png";
import styles from "./ProductCard.module.scss";

const item = {
  id: "MLA1115833344",
  title:
    "Anteojos De Sol Polarizados Rusty Pears One Size, Color Mblk/s10 Con Marco De G-flex, Lente De Policarbonato, Varilla De G-flex - 315",
  price: {
    currency: "ARS",
    amount: 6989,
    decimals: 0,
  },
  picture: "http://http2.mlstatic.com/D_647486-MLA48170555155_112021-I.jpg",
  condition: "new",
  free_shipping: true,
  address: "Buenos Aires",
};

export const ProductCard = () => {
  return (
    <li className={styles.list}>
      <div title={item?.title} className={styles.productContainer}>
        <img src={item?.picture} alt={item?.title}  className={styles.imageProduct}/>
        <div className={styles.cardDetails}>
          <div className={styles.priceContainer}>
            <h2 className={styles.price}>{`$${item?.price?.amount}`}</h2>
            {item?.free_shipping ? (
              <img src={freeshippingIcon} alt="Envio Gratis" className={styles.freeshipping}/>
            ) : null}
            <p>{item?.address}</p>
          </div>
          <p className={styles.descriptionItem}>{item?.title}</p>
        </div>
      </div>      
    </li>
  );
};

export default ProductCard;
