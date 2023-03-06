import { Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Filter.module.css";
export const Filter = () => {
  return (
    <div className={styles.filter_comp}>
      <div className={styles.new_arrival}>
        <Text className={styles.filter_heading}>New Arrivals</Text>
        <Text className={styles.filter_text}>View All</Text>
        <Text className={styles.filter_text}>Clothes</Text>
        <Text className={styles.filter_text}>Shoes & Accessories</Text>
      </div>
      <div className={styles.new_arrival}>
        <Text className={styles.filter_heading}>Shop by Product</Text>
        <Text className={styles.filter_text}>View All</Text>
        <Text className={styles.filter_text}>T-shirts & Tanks</Text>
        <Text className={styles.filter_text}>Shirts</Text>
        <Text className={styles.filter_text}>Trousers</Text>
        <Text className={styles.filter_text}>Hoodies & Sweatshirts</Text>
        <Text className={styles.filter_text}>Jeans</Text>
        <Text className={styles.filter_text}>Shoes</Text>
        <Text className={styles.filter_text}>Shorts</Text>
        <Text className={styles.filter_text}>Cardigans & Jumpers</Text>
        <Text className={styles.filter_text}>Jackets & Coats</Text>
        <Text className={styles.filter_text}>Basics</Text>
        <Text className={styles.filter_text}>Knitwear</Text>
        <Text className={styles.filter_text}>Suits & Blazers</Text>
        <Text className={styles.filter_text}>Underwear & Innerwear</Text>
        <Text className={styles.filter_text}>Socks</Text>
        <Text className={styles.filter_text}>Accessories</Text>
        <Text className={styles.filter_text}>Sportswear</Text>
        <Text className={styles.filter_text}>Care products</Text>
        <Text className={styles.filter_text}>Sleepwear & Loungewear</Text>
        <Text className={styles.filter_text}>Premium Selection</Text>
        <Text className={styles.filter_text}>Sale</Text>
      </div>
    </div>
  );
};
