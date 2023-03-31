import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logohm.png";

import { CiUser, CiSearch, CiHeart, CiBag1 } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MobileNavbar } from "./MobileNavbar";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { NavbarSec } from "./NavbarItems";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  loginError,
  loginSuccess,
  signOutReq,
  signOutSuccess,
} from "../../redux/authReducer/action";
import {
  getCartData,
  getDataError,
  getDataSuccess,
} from "../../redux/cartReducer/action";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isAuth } = useSelector((store) => store.authReducer);
  const navigate = useNavigate();
  const { carts } = useSelector((store) => store.cartReducer);
  // function for login user
  const handleSignIn = () => {
    if (email == "" || pass == "") {
      toast({
        title: "Please fill all the credentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      dispatch(login({ email: email, password: pass }))
        .then((re) => {
          dispatch(loginSuccess(re.data));
          toast({
            title: "user login Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          onClose();
        })
        .catch((err) => {
          dispatch(loginError());
          toast({
            title: "Oops, Check your credentials again",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    }
  };

  // function for signOut
  const signOut = () => {
    dispatch(signOutReq());
    dispatch(signOutSuccess());
    toast({
      title: "Sign out successfully",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  // function for go to sign up page
  const goToSignUp = () => {
    onClose();
    navigate("/signup");
  };
  useEffect(() => {
    dispatch(getCartData())
      .then((re) => {
        dispatch(getDataSuccess(re.data));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(getDataError());
      });
  }, []);
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
            <Link to="/">
              <Image src={logo} className={styles.website_logo} alt="hm_logo" />
            </Link>
          </div>
          <div>
            {isAuth ? (
              <>
                <Menu isLazy>
                  <MenuButton>
                    <Flex alignItems={"center"} onClick={onOpen}>
                      <CiUser fontSize={"24px"} />
                      <Text className={styles.navbar_box_1_text}>
                        My Account
                      </Text>
                    </Flex>
                  </MenuButton>
                  <MenuList
                    boxShadow="0 2px 4px 0 rgb(34 34 34 / 20%)"
                    background={"var(--color-bg)"}
                    borderRadius={"0"}
                    display={"flex"}
                    flexDirection="column"
                    justifyContent={"flex-start"}
                    alignItems="flex-start"
                  >
                    {/* MenuItems are not rendered unless Menu is open */}
                    <Text
                      float={"left"}
                      fontWeight="500"
                      _hover={{ textDecoration: "underline" }}
                      cursor="pointer"
                      padding={"10px"}
                      paddingLeft="25px"
                    >
                      My Account{" "}
                    </Text>
                    <Text
                      cursor="pointer"
                      paddingLeft="25px"
                      fontSize={"sm"}
                      _hover={{ textDecoration: "underline" }}
                      color="GrayText"
                      onClick={signOut}
                      marginBottom="10px"
                    >
                      Sign out
                    </Text>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
                <Flex alignItems={"center"} onClick={onOpen}>
                  <CiUser fontSize={"24px"} />
                  <Text className={styles.navbar_box_1_text}>Sign In</Text>
                </Flex>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent borderRadius={"0"} background="var(--color-bg)">
                    <ModalHeader>Sign In</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        Become a member — don’t miss out on deals, offers,
                        discounts and bonus vouchers.
                      </Text>
                      <FormControl isRequired>
                        <FormLabel fontWeight={"400"} marginTop="14px">
                          Email
                        </FormLabel>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          borderRadius={"0"}
                          focusBorderColor="green.400"
                          colorScheme={"green"}
                        />
                        <FormHelperText>
                          We'll never share your email.
                        </FormHelperText>
                        <FormLabel fontWeight={"400"} marginTop="14px">
                          Password
                        </FormLabel>
                        <InputGroup>
                          <Input
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            type={show ? "text" : "password"}
                            borderRadius={"0"}
                            focusBorderColor="green.400"
                            colorScheme={"green"}
                          />
                          <InputRightElement width="4.5rem">
                            <Text
                              size="sm"
                              onClick={handleClick}
                              cursor="pointer"
                            >
                              {show ? "Hide" : "Show"}
                            </Text>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>

                      <Text
                        color={"GrayText"}
                        _hover={{ textDecoration: "underline" }}
                        cursor="pointer"
                        marginTop={"10px"}
                        onClick={goToSignUp}
                      >
                        Not a member yet? Join here!
                      </Text>
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        colorScheme={"blackAlpha"}
                        background="var(--text-color)"
                        width={"100%"}
                        borderRadius="0"
                        onClick={handleSignIn}
                      >
                        Sign In
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
            )}
            <Link to="/favourite">
              <Flex alignItems={"center"}>
                <CiHeart fontSize={"24px"} />
                <Text className={styles.navbar_box_1_text}>Favourites</Text>
              </Flex>
            </Link>
            <Flex alignItems={"center"} className={styles.mobile_search}>
              <CiSearch fontSize={"24px"} />
            </Flex>
            <Link to="/cart">
              <Flex alignItems={"center"}>
                <CiBag1 fontSize={"24px"} />
                <Text className={styles.navbar_box_1_text}>
                  Shopping Bag({carts?.length || 0})
                </Text>
              </Flex>
            </Link>
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
