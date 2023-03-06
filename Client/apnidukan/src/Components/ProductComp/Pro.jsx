import React from "react";
import { Filter } from "./Filters/Filter";
import styles from "./Pro.module.css";
import { Product } from "./Product";
export const Pro = () => {
  return (
    <div className={styles.products_page}>
      <div>
        <Filter />
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
};
