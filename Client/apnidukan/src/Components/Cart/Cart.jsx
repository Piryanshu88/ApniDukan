import { Button, Input, Text, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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
  const [sum, setsum] = useState(0);

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
  }, [dispatch]);
  if (isError) {
    return <div>Error</div>;
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
              focusBorderColor="green.400"
              borderRadius={"0"}
            />
            <Button
              borderRadius={"0"}
              colorScheme="blackAlpha"
              background={"#000"}
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
        </div>
      </div>
    </div>
  );
};
