import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  CheckoutCart,
  delDataErr,
  delDataSuccess,
  DeleteCartData,
  getCartData,
  getDataError,
} from "../../redux/cartReducer/action";
import { getDataSuccess } from "../../redux/cartReducer/action";
import styles from "./Cart.module.css";
import { Cartcard } from "./Cartcard";
export const CardComp = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, carts } = useSelector(
    (store) => store.cartReducer
  );
  const { isAuth } = useSelector((store) => store.authReducer);
  const [sum, setsum] = useState(0);
  const [disbtn, setDisBtn] = useState(false);
  const [discount, setDiscount] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const handleDeleteCartData = (id) => {
    dispatch(DeleteCartData(id))
      .then((re) => {
        dispatch(delDataSuccess());
        toast({
          title: "Remove item from cart Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        dispatch(getCartData())
          .then((re) => {
            dispatch(getDataSuccess(re.data));
            setsum(
              re?.data?.data?.reduce((acc, ele) => {
                return acc + ele.whitePrice.price;
              }, 0)
            );
          })
          .catch((err) => {
            console.log(err.message);
            dispatch(getDataError());
          });
      })
      .catch((err) => {
        dispatch(delDataErr());
        console.log(err);
        toast({
          title: "Try Again, Something went wrong",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  const handleDiscount = () => {
    if (discount == "") {
      toast({
        title: `Please Add a valid Code`,
        status: "error",
        isClosable: true,
        duration: 2000,
        variant: "top-accent",
      });
    } else if (discount == "ENJOY100") {
      setsum(sum - 100);
      setDisBtn(true);
      toast({
        title: `Discount Applied`,
        status: "success",
        isClosable: true,
        duration: 2000,
        variant: "top-accent",
      });
    } else if (discount == "ENJOY500") {
      setsum(sum - 500);
      setDisBtn(true);
      toast({
        title: `Discount Applied`,
        status: "success",
        isClosable: true,
        duration: 2000,
        variant: "top-accent",
      });
    } else if (discount == "HM1000") {
      setsum(sum - 1000);
      setDisBtn(true);
      toast({
        title: `Discount Applied`,
        status: "success",
        isClosable: true,
        duration: 2000,
        variant: "top-accent",
      });
    } else {
      toast({
        title: `Please Add a valid Code`,
        status: "error",
        isClosable: true,
        duration: 2000,
        variant: "top-accent",
      });
    }
  };

  const handleCheckout = () => {
    CheckoutCart().then(() => {
      dispatch(getCartData())
        .then((re) => {
          console.log(re.data);
          dispatch(getDataSuccess(re.data));
          setsum(
            re?.data?.data?.reduce((acc, ele) => {
              return acc + ele.whitePrice.price;
            }, 0)
          );
        })
        .catch((err) => {
          console.log(err.message);
          dispatch(getDataError());
        });
    });
    toast({
      title: `Thanks for giving your time`,
      status: "success",
      isClosable: true,
      duration: 2000,
      variant: "top-accent",
    });
    navigate("/");
  };

  useEffect(() => {
    dispatch(getCartData())
      .then((re) => {
        console.log(re.data);
        dispatch(getDataSuccess(re.data));
        setsum(
          re?.data?.data?.reduce((acc, ele) => {
            return acc + ele.whitePrice.price;
          }, 0)
        );
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(getDataError());
      });
  }, [dispatch, isAuth]);
  if (!isAuth) {
    return (
      <Box>
        <Image
          src="https://mykit.in/public/img/images/emptycart.svg"
          margin={"auto"}
          marginTop="30px"
        />
        <Text
          color={"orange.500"}
          fontSize="xl"
          marginBottom={"20px"}
          fontWeight="600"
        >
          <Text as={"span"} color="#222222">
            Please
          </Text>
          , login to see your Cart
        </Text>
      </Box>
    );
  }
  if (carts.length == 0) {
    return (
      <Box>
        <Image
          src="https://e-commediallc.com/static/version1655842013/frontend/Magedukan/matsandrunner/en_US/images/cart-empty.png"
          width={"50%"}
          margin="auto"
          marginTop={"20px"}
          objectFit="contain"
          height={"400px"}
        />
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          gap={"4px"}
          marginTop="10px"
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.400",
              zIndex: -1,
            }}
          >
            OOPs!
          </Text>
          <br />
          <Text as={"span"} color={"red.400"}>
            Your Cart is Empty
          </Text>
        </Heading>
        <Link to="/">
          <Button
            width={"200px"}
            marginTop="10px"
            colorScheme={"orange"}
            borderRadius="0"
            marginBottom={"20px"}
          >
            Shop now
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <div className={styles.cart_container}>
      <Text fontSize={"sm"}>HM.com/Shopping bag</Text>
      <div className={styles.cart_text_box}>
        <Text>Estimated delivery time: 2-7 days</Text>
        <Text>Download the H&M App</Text>
      </div>
      <Text fontSize={"4xl"} fontWeight="700" color={"var(--text-color)"}>
        Shopping bag
      </Text>
      <div className={styles.cart_box}>
        <div className={styles.details_box}>
          {carts?.map((el, i) => {
            return (
              <Cartcard key={i} {...el} handleDelete={handleDeleteCartData} />
            );
          })}
        </div>
        <div className={styles.checkout_box}>
          <Text>Add a discount code</Text>
          <div className={styles.discount_box}>
            <Input
              placeholder="Add Code"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              focusBorderColor="green.400"
              borderRadius={"0"}
            />
            <Button
              onClick={handleDiscount}
              borderRadius={"0"}
              colorScheme="blackAlpha"
              background={"#000"}
              isDisabled={disbtn}
            >
              Add
            </Button>
          </div>
          <div>
            <Text>Order value</Text>
            <Text>Rs. {sum}</Text>
          </div>
          <div>
            <Text>Discount</Text>
            <Text>Rs. 100</Text>
          </div>
          <div>
            <Text>Delivery</Text>
            <Text>FREE</Text>
          </div>

          <div className={styles.total_value}>
            <Text fontSize={"18px"} fontWeight="500">
              Total value
            </Text>
            <Text fontSize={"18px"} fontWeight="500">
              Rs. {sum - 100}
            </Text>
          </div>
          <div className={styles.checkout_btn}>
            <Button
              borderRadius={"0"}
              colorScheme="blackAlpha"
              background={"#000"}
              width="100%"
              marginTop={"15px"}
              onClick={handleCheckout}
            >
              Checkout Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
