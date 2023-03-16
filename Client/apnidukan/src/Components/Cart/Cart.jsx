import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, getDataError } from "../../redux/cartReducer/action";
import { getDataSuccess } from "../../redux/cartReducer/action";
import styles from "./Cart.module.css";
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
  return <div>CardComp</div>;
};
