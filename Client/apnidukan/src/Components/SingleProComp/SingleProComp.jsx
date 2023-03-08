import { Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getDataById,
  getDataErrorById,
  getDataSuccessById,
} from "../../redux/dataReducer/action";
import styles from "./SingleProduct.module.css";
import { ProDucts } from "../../constants";
export const SingleProComp = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (store) => store.singleDataReducer
  );
  useEffect(() => {
    dispatch(getDataById(id))
      .then((re) => {
        dispatch(getDataSuccessById(re.data.product));
      })
      .catch((err) => dispatch(getDataErrorById()));
    console.log("products", products);
  }, [id]);

  if (isError) {
    return <Text>error</Text>;
  }

  return (
    <div className={styles.single_page_box}>
      <div className={styles.singlepage}>
        <div className={styles.img_box}>
          {/* <Image src={data?.image[0]?.src} alt={data?.image[0]?.alt} />
          <Image
            src={data?.image[0]?.dataAltImage}
            alt={data?.image[0]?.dataAltText}
          /> */}
          <Text>{products?.code}</Text>
        </div>
      </div>
    </div>
  );
};
