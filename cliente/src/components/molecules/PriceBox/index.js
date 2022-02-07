import React from "react";
import PropTypes from "prop-types";
import ButtonMeli from "../../atoms/button";
import styles from "./PriceBox.module.scss";

const PriceBox = ({ title, price, condition, quantity, decimals, onclick }) => {
  return (
    <div className={styles.container}>
      <p className={styles.quantity}>{`${condition} - ${quantity} vendidos`}</p>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.priceBox}>
        <p className={styles.price}>{`$${price}`}<span className={styles.decimals}>{decimals}</span></p>        
      </div>
      <div className={styles.button}>
        <ButtonMeli buttonText="Comprar" onClick={onclick} />
      </div>
    </div>
  );
};

PriceBox.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  decimals: PropTypes.number,
  condition: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default PriceBox;
