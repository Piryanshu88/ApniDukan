import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logohm.png";

import { CiUser, CiSearch, CiHeart, CiBag1 } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MobileNavbar } from "./MobileNavbar";
export const Navbar = () => {
  return (
    <div className={styles.navbar_box}>
      <div className={styles.nav}>
        <div className={styles.mobile_nav}>
          <MobileNavbar />
        </div>
        <div className={styles.navbar_box_1}>
          <div>
            <Text className={styles.navbar_box_1_text}>Customer Service</Text>
            <Text className={styles.navbar_box_1_text}>Find a Store</Text>
            <Text className={styles.navbar_box_1_text}>Newsletter</Text>
            <Text className={styles.navbar_box_1_text}>
              <BiDotsHorizontalRounded fontSize={"20px"} />
            </Text>
          </div>
          <div>
            <Image src={logo} className={styles.website_logo} alt="hm_logo" />
          </div>
          <div>
            <Flex alignItems={"center"}>
              <CiUser fontSize={"24px"} />
              <Text className={styles.navbar_box_1_text}>Sign In</Text>
            </Flex>
            <Flex alignItems={"center"}>
              <CiHeart fontSize={"24px"} />
              <Text className={styles.navbar_box_1_text}>Favourites</Text>
            </Flex>
            <Flex alignItems={"center"} className={styles.mobile_search}>
              <CiSearch fontSize={"24px"} />
            </Flex>
            <Flex alignItems={"center"}>
              <CiBag1 fontSize={"24px"} />
              <Text className={styles.navbar_box_1_text}>Shopping Bag(0)</Text>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
};
