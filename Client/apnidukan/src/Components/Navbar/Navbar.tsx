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
const ladies = [
  {
    key: "New Arrivals",
    key_data: ["View All", "Clothes"],
  },
  {
    key: "Trending Now",
    key_data: [
      "Timeless casual",
      "Glam city",
      "H&M Studio S/S 2023",
      "New season edit",
    ],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View All",
      "Tops & T-shirts",
      "Dresses",
      "Trousers",
      "Blazers",
      "Shirts & Blouses",
      "Jeans",
      "Shoes",
      "Accessories",
      "Lingerie",
      "Nightwear",
      "Sweatshirts & Hoodies",
      "Cardigans & Sweaters",
      "Knitwear",
      "Jackets & Coats",
      "Loungewear",
      "Sportswear",
      "Skirts",
      "Shorts",
      "Basics",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["H&M Take Care", "Learn More"],
  },
  {
    key: "Magazine",
    key_data: ["Magazine"],
  },
  {
    key: "Shop by Occasion",

    key_data: ["Party Wear", "Casual Wear", "Office Wear", "Loungewear"],
  },
];
const men = [
  {
    key: "New Arrivals",
    key_data: ["View All", "Clothes", "Shoes & Accessories"],
  },
  {
    key: "Spring lookbook",
    key_data: ["Casual looks", "Smart looks", "Street looks"],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View All",
      "T-shirts & Tanks",
      "Shirts",
      "Trousers",
      "Hoodies & Sweatshirts",
      "Jeans",
      "Shoes",
      "Shorts",
      "Cardigans & Jumpers",
      "Jackets & Coats",
      "Knitwear",
      "Basics",
      "Suits & Blazers",
      "Underwear & Innerwear",
      "Socks",
      "Accessories",
      "Sportswear",
      "Care products",
      "Sleepwear & Loungewear",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["H&M Take Care", "Learn More"],
  },
  {
    key: "The essentials",
    key_data: ["About", "Core collection"],
  },
  {
    key: "Spring lookbook",

    key_data: ["Party Wear", "Casual Wear", "Office Wear", "Loungewear"],
  },
];
const dividend = [
  {
    key: "New Arrivals",
    key_data: ["View All", "Clothes"],
  },
  {
    key: "Trending Now",
    key_data: [
      "Style up with DIVIDED",
      "Color Play!",
      "Basics under Rs.499",
      "Spring Edit",
      "Music, Movies & Logos",
    ],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View All",
      "Tops",
      "Jeans",
      "Dresses",
      "Shirts & Blouses",
      "Accessories",
      "Divided - Basics",
      "Trousers & Leggings",
      "Divided - Skirts",
      "Shorts",
      "Underwear & Nightwear",
      "Swimwear",
      "Shoes",
      "Cardigans & Jumpers",
      "Hoodies & Sweatshirts",
      "Jackets & Coats",
      "Care products",
      "Sale",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["H&M Take Care", "Learn More"],
  },
  {
    key: "Magazine",
    key_data: ["Magazine"],
  },
  {
    key: "Shop by Occasion",

    key_data: ["Party Wear", "Casual Wear", "Office Wear", "Loungewear"],
  },
];
const home = [
  {
    key: "New Arrivals",
    key_data: ["New Arrivals"],
  },
  {
    key: "Trending Now",
    key_data: [
      "Home essentials",
      "Colorburst Collection",
      "Scented candles",
      "Latest Trends",
    ],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View All",
      "Decorations",
      "Cushions",
      "Bed Linen",
      "Room Fragrance",
      "Servingware & Tableware",
      "Cookware & Bakeware",
      "Organize & Storage",
      "Bath & Shower",
      "Blankets",
      "Curtains",
      "Sleepwear",
      "Giftwraps",
      "Sale",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["Meet the maker"],
  },
  {
    key: "Magazine",
    key_data: ["Magazine"],
  },
];
const sport = [
  {
    key: "Women",
    key_data: [
      "View All",
      "New arrivals",
      "Clothing",
      "Active Swimwear",
      "Outerwear",
      "Accessories & Equipment",
      "Maternity",
    ],
  },
  {
    key: "Men",
    key_data: [
      "View All",
      "New arrivals",
      "Clothing",
      "Outerwear",
      "Accessories & Equipment",
    ],
  },
  {
    key: "Sale",
    key_data: ["View all", "Women", "Men", "Kids"],
  },
  {
    key: "Kids",
    key_data: [
      "View All",
      "New arrivals",
      "Girls",
      "Boys",
      "Sports Accessories",
    ],
  },
];
const baby = [
  {
    key: "H&M ❤ Baby",
    key_data: ["Life with Baby"],
  },
  {
    key: "Newborn",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Accessories",
      "Outerwear",
      "Shoes",
    ],
  },
  {
    key: "Baby Girl",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Outerwear",
      "Accessories",
      "Shoes",
    ],
  },
  {
    key: "Baby Boy",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Outerwear",
      "Accessories",
      "Shoes",
    ],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Outerwear",
      "Accessories",
      "Shoes",
      "Sale",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["H&M Take Care", "Learn More"],
  },
];
const sale = [
  {
    key: "Men",
    key_data: [
      "View All",
      "T-shirts & Tanks",
      "Shirts",
      "Trousers",
      "Hoodies & Sweatshirts",
      "Jeans",
      "Shoes",
      "Shorts",
      "Cardigans & Jumpers",
      "Jackets & Coats",
      "Knitwear",
      "Basics",
      "Suits & Blazers",
      "Underwear & Innerwear",
      "Socks",
      "Accessories",
      "Sportswear",
      "Care products",
      "Sleepwear & Loungewear",
    ],
  },
  {
    key: "Women",
    key_data: [
      "View All",
      "Tops & T-shirts",
      "Dresses",
      "Trousers",
      "Blazers",
      "Shirts & Blouses",
      "Jeans",
      "Shoes",
      "Accessories",
      "Lingerie",
      "Nightwear",
      "Sweatshirts & Hoodies",
      "Cardigans & Sweaters",
      "Knitwear",
      "Jackets & Coats",
      "Loungewear",
      "Sportswear",
      "Skirts",
      "Shorts",
      "Basics",
    ],
  },
  {
    key: "Dividend",
    key_data: [
      "View All",
      "Tops",
      "Jeans",
      "Dresses",
      "Shirts & Blouses",
      "Accessories",
      "Divided - Basics",
      "Trousers & Leggings",
      "Divided - Skirts",
      "Shorts",
      "Underwear & Nightwear",
      "Swimwear",
      "Shoes",
      "Cardigans & Jumpers",
      "Hoodies & Sweatshirts",
      "Jackets & Coats",
      "Care products",
      "Sale",
    ],
  },
  {
    key: "Kids",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Outerwear",
      "Accessories",
      "Shoes",
      "Sale",
    ],
  },
  {
    key: "Sports",
    key_data: [
      "View All",
      "New arrivals",
      "Clothing",
      "Outerwear",
      "Accessories & Equipment",
    ],
  },
];

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
          <NavbarSec comp="Ladies" list={ladies} onClick="ladies" key={10} />
          <NavbarSec comp="Men" list={men} onClick="mens" key={20} />
          <NavbarSec
            comp="Dividend"
            list={dividend}
            onClick="dividend"
            key={30}
          />
          <NavbarSec comp="Kids" list={baby} onClick="kids" key={40} />
          <NavbarSec comp="H&M HOME" list={home} onClick="home" key={50} />
          <NavbarSec comp="Sale" list={sale} onClick="sale" key={60} />
          <NavbarSec comp="Sport" list={sport} onClick="sports" key={70} />
          <NavbarSec
            comp="Sustainability"
            list={ladies}
            onClick="ladies"
            key={8}
          />
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
