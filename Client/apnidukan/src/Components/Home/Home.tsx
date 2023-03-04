import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Home.module.css";
import img from "../../assets/f_home.png";
//C:\Users\Piryanshu\Desktop\ApniDukan\Client\apnidukan\src\assets\f_home.png
export const HomeComp = () => {
  return (
    <div className={styles.home_section_1}>
      <div></div>
      <div>
        <Image src={img} />
      </div>
      <Text
        fontSize={"17px"}
        color="#ffffff"
        fontWeight={"600"}
        marginBottom="20px"
      >
        The new collection is out now
      </Text>
      <Flex justifyContent={"center"} gap="10px" marginBottom={"40px"}>
        <Button
          borderRadius={"0"}
          color="var(--text-color)"
          padding={"8px"}
          fontSize="14px"
          margin={"0"}
        >
          Shop Now{" "}
        </Button>
        <Button
          borderRadius={"0"}
          color="var(--text-color)"
          padding={"8px"}
          fontSize="14px"
          margin={"0"}
        >
          Get Inspired
        </Button>
      </Flex>
    </div>
  );
};
