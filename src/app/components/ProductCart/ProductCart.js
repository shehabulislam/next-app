import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCart.module.css";

const ProductCart = () => {
  return (
    <div className={styles.card}>
      ProductCart
      <AddToCart />
    </div>
  );
};

export default ProductCart;
