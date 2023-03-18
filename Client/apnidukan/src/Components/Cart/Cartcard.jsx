import { Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Cartcard.module.css";
export const Cartcard = ({ img, name, whitePrice }) => {
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
        <div className="articleCode">
          Text
        </div>
      </div>
    </div>
  );
};
/**
 * 
 */