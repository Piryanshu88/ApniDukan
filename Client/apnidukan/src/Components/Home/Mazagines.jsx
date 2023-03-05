import { Image, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../../assets/magzines/mag_ground.jpg";
import img from "../../assets/magzines/mag_sports.jpg";
import img2 from "../../assets/magzines/mag_women.jpg";
import styles from "./Maz.module.css";
export const Mazagines = () => {
  return (
    <div className={styles.maz_box}>
      <Text fontSize={"2xl"} fontWeight="700" marginTop={"80px"}>
        {" "}
        MAGAZINE{" "}
      </Text>
      <Text fontSize={"15px"}>A WORLD OF INSPIRATION</Text>
      <div className={styles.maz_box_1}>
        <div>
          <Image src={img1} marginBottom="20px" />
          <Text fontWeight={"500"} fontSize="14px">
            INSIDE H&M
          </Text>
          <Text fontSize={"17[x"}> H&M Studio S/S 2023</Text>
        </div>
        <div>
          <Image src={img} marginBottom="20px" />
          <Text fontWeight={"500"} fontSize="14px">
            INSIDE H&M
          </Text>
          <Text fontSize={"17[x"} textOverflow="ellipsis">
            Feel empowered by our 4 Global Brand Movers
          </Text>
        </div>
        <div>
          <Image src={img2} marginBottom="20px" />
          <Text fontWeight={"500"} fontSize="14px">
            INSIDE H&M
          </Text>
          <Text fontSize={"17[x"}>
            H&M Move sign football legend Nadia Nadim
          </Text>
        </div>
      </div>
    </div>
  );
};
