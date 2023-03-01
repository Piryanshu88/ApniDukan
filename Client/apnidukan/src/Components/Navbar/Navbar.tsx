import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logohm.png";

import { CiUser, CiSearch, CiHeart, CiBag1 } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MobileNavbar } from "./MobileNavbar";
import { NavbarSec } from "./NavbarItems";
const list = ["hello", "hello", "hello"];
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
      <div className={styles.navbar_box_2}>
        <div></div>
        <div className={styles.navbar_items}>
          <NavbarSec comp="Ladies" list={list} />
          <NavbarSec comp="Men" list={list} />
          <NavbarSec comp="Dividend" list={list} />
          <NavbarSec comp="Kids" list={list} />
          <NavbarSec comp="Baby" list={list} />
          <NavbarSec comp="H&M HOME" list={list} />
          <NavbarSec comp="Sport" list={list} />
          <NavbarSec comp="Sustainability" list={list} />
        </div>
        <div className={styles.comp_searchbar}>
          <InputGroup>
            {/* <InputLeftElement > */}
            <InputLeftElement
              pointerEvents="none"
              children={<CiSearch fontSize={"27px"} />}
            />
            <Input
              variant={"flushed"}
              placeholder="Search products"
              focusBorderColor="gray.100"
              fontSize={"16px"}
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
};
