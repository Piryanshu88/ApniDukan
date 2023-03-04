import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Home.module.css";
import img from "../../assets/f_home.png";
import img2 from "../../assets/swomen.png";
import { Categories } from "./Categories";
//C:\Users\Piryanshu\Desktop\ApniDukan\Client\apnidukan\src\assets\f_home.png
export const HomeComp = () => {
  return (
    <div className={styles.home}>
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

      <div className={styles.home_section_2}>
        <div></div>
        <div>
          <Image src={img2} />
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
        </Flex>
      </div>

      <div className={styles.shop_box}>
        <div>
          <Text color="#ffffff" fontWeight={"600"}>
            The color burst collection
          </Text>
        </div>
        <div>
          <Text color="#ffffff" fontSize={"13px"}>
            All the vibrant fits for this spring!
          </Text>
        </div>
        <div>
          {" "}
          <Flex justifyContent={"center"} gap="10px" marginBottom={"20px"}>
            <Button
              borderRadius={"0"}
              color="var(--text-color)"
              padding={"8px"}
              fontSize="14px"
              margin={"0"}
            >
              Shop Now{" "}
            </Button>
          </Flex>
        </div>
      </div>

      <div className={styles.category_box}>
        <Text textAlign="left" fontSize={"xl"} fontWeight="500">
          Categories for you
        </Text>
        <Categories />
      </div>
    </div>
  );
};
