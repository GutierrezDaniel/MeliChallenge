import React from "react";
import styles from "./Button.module.scss";

const ButtonMeli = ({buttonText}) => {
  return <button className={styles.meliButton}>{buttonText}</button>;
};

export default ButtonMeli;
