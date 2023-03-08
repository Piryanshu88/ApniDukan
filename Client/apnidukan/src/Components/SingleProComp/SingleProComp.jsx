import { Button, Image, Select, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GrStar } from "react-icons/gr";
import {
  getDataById,
  getDataErrorById,
  getDataSuccessById,
} from "../../redux/dataReducer/action";
import styles from "./SingleProduct.module.css";
import { ProDucts } from "../../constants";
import { CiBag1 } from "react-icons/ci";
export const SingleProComp = () => {
  const { id, category } = useParams();
  const navigate = useNavigate();
  const [articleCode, setArticleCode] = useState(id);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { products, isLoading, isError } = useSelector(
    (store) => store.singleDataReducer
  );
  useEffect(() => {
    setLoading(true);
    dispatch(getDataById(articleCode))
      .then((re) => {
        dispatch(getDataSuccessById(re.data.product));
      })
      .catch((err) => dispatch(getDataErrorById()));
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    console.log(products);
    products?.articlesList?.map((el, i) => {
      console.log(el.galleryDetails[0]?.baseUrl);
    });
  }, [id, articleCode]);

  const handleArticle = (e) => {
    setArticleCode(e);
    navigate(`/singleproduct/${category}/${e}`);
  };
  if (isError) {
    return <Text>error</Text>;
  }
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <div className={styles.single_page_box}>
      <div className={styles.singlepage}>
        <div className={styles.img_box}>
          <Image src={products?.articlesList[0].galleryDetails[0]?.baseUrl} />
          <Image src={products?.articlesList[0].galleryDetails[1]?.baseUrl} />
        </div>
        <div className={styles.single_page_details}>
          <Text>{products.name}</Text>
          <Text>{`Rs. ${products.whitePrice.price}.00`}</Text>
          <Text>{products.color.text}</Text>
          <div className={styles.color_article}>
            {products?.articlesList?.map((el, i) => {
              return (
                <Image
                  src={el.galleryDetails[0]?.baseUrl}
                  key={i}
                  height="100px"
                  objectFit={"contain"}
                  padding="2px"
                  border={
                    articleCode == el.code
                      ? "1px solid var(--text-color)"
                      : null
                  }
                  onClick={() => handleArticle(el.code)}
                />
              );
            })}
          </div>
          <div className={styles.review_box}>
            <Text>REVIEWS (5)</Text>
            <GrStar />
            <GrStar />
            <GrStar />
            <GrStar />
            <GrStar />
          </div>
          <div className={styles.size_box}>
            <Select placeholder="Select Size" borderRadius={"0"}>
              <option value="option1">S</option>
              <option value="option2"> M</option>
              <option value="option3"> L</option>
            </Select>
          </div>
          <div className={styles.add_to_cart_box}>
            <Button
              borderRadius={"0"}
              colorScheme="blackAlpha"
              width={"100%"}
              display="flex"
              alignItems={"center"}
              background="var(--text-color)"
              gap={"10px"}
            >
              <CiBag1 />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
