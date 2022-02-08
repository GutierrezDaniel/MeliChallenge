import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import freeshippingIcon from "../../../assets/ic_shipping@2x.png.png";
import styles from "./ProductCard.module.scss";


export const ProductCard = ({item}) => {

  const navigate = useNavigate();

  return (
    <li className={styles.list} onClick={()=> navigate(item.id, { replace: true })}>
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

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ProductCard;
