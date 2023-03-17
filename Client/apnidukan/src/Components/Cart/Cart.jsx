import { Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, getDataError } from "../../redux/cartReducer/action";
import { getDataSuccess } from "../../redux/cartReducer/action";
import styles from "./Cart.module.css";
import { Cartcard } from "./Cartcard";
export const CardComp = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, carts } = useSelector(
    (store) => store.cartReducer
  );

  useEffect(() => {
    dispatch(getCartData())
      .then((re) => {
        console.log(re.data);
        dispatch(getDataSuccess(re.data));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(getDataError());
      });
  }, []);
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
            return <Cartcard key={i} {...el} />;
          })}
        </div>
        <div className={styles.checkout_box}></div>
      </div>
    </div>
  );
};
