import { Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Cartcard.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
export const Cartcard = ({
  countryOfProduction,
  code,
  img,
  name,
  whitePrice,
  fits,
}) => {
  return (
    <div className={styles.cart_card}>
      <div>
        <Image src={img} />
      </div>
      <div>
        <Text fontSize={"xl"} fontWeight="500">
          {name}
        </Text>
        <Text fontWeight={"600"}>{`Rs. ${whitePrice.price}`}</Text>
        <div className={styles.articleCode}>
          <Text>Art.no. </Text>
          <Text>:</Text>
          <Text> {code}</Text>
        </div>
        <div className={styles.articleCode}>
          <Text>Size</Text>
          <Text>:</Text>
          <Text>OneSize</Text>
        </div>
        <div className={styles.cart_comp_last}>
          <div>Made in {countryOfProduction}</div>
        </div>
      </div>

      <RiDeleteBin5Line className={styles.delete_btn} fontSize={"20px"} />
    </div>
  );
};
/**
 *
 */
