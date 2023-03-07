import styles from "./ProductCard.module.css";
import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
export const ProductCard = ({
  image,
  title,
  swatches,
  brandName,
  sellingAttribute,
  price,
}) => {
  return (
    <div className={styles.single_card}>
      <div className={styles.single_card_img}>
        <Image src={image[0].src} alt={image[0].alt} />
        <Image src={image[0].dataAltImage} alt={image[0].dataAltText} />
      </div>
      <Text fontSize={"xs"} color="gray.700">
        {" "}
        {brandName}
      </Text>
      <Text fontSize={"14px"} fontWeight="500" color={"var(--text-color)"}>
        {title}
      </Text>
      <Text fontSize={"15px"} fontWeight="500" color={"var(--text-color)"}>
        Rs. {price}
      </Text>
      <div className={styles.color_box}>
        {swatches?.map((el) => {
          return <FaCircle color={el.colorCode} />;
        })}
      </div>
      <Text fontSize={"12px"}>{sellingAttribute}</Text>
    </div>
  );
};
