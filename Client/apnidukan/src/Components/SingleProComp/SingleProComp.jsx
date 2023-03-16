import {
  Box,
  Button,
  Image,
  Select,
  Skeleton,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { GrStar } from "react-icons/gr";
import { CiCircleInfo } from "react-icons/ci";
import {
  getDataById,
  getDataByIdApi,
  getDataErrorById,
  getDataSuccessById,
} from "../../redux/dataReducer/action";
import styles from "./SingleProduct.module.css";
import { ProDucts } from "../../constants";
import { CiBag1 } from "react-icons/ci";
import axios from "axios";
import { Scroller } from "../Home/Categories/Scroller";
import { CustomToast } from "./CustomToast";
import {
  addCartData,
  AddDataErr,
  AddDataSuccess,
} from "../../redux/cartReducer/action";

const getData = async (str) => {
  const response = await axios.get(
    `https://rich-erin-walkingstick-hem.cyclic.app/products/${str}`
  );
  return response.data;
};

export const SingleProComp = () => {
  const { articleCode, category } = useParams();
  const [scrollerData, setScrollData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const { products, isLoading, isError } = useSelector(
    (store) => store.singleDataReducer
  );
  const [cartToast, setCartToast] = useState("none");
  const { isAuth } = useSelector((store) => store.authReducer);

  const ChangeActiveArticle = (code) => {
    navigate(`/singleproduct/${code}/${category}`);
  };

  const handleAddToCart = () => {
    if (!isAuth) {
      toast({
        title: "Please Login First",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const {
      code,
      name,
      description,
      sapProductName,
      color,
      whitePrice,
      importedBy,
      importedDate,
      netQuantity,
      countryOfProduction,
      productTypeName,
      fits,
      constructionDescr,
      customerGroup,
      rootCategoryPath,
      productKey,
      productCountryOfProduction,
      showGarmentsInfo,
      yearOfProduction,
      presentationTypes,
      multipack,
      newProduct,
    } = products;
    dispatch(
      addCartData({
        code,
        name,
        description,
        sapProductName,
        color,
        img: products?.articlesList?.filter((el) => el?.code == articleCode)[0]
          ?.galleryDetails[0]?.baseUrl,
        whitePrice,
        importedBy,
        importedDate,
        netQuantity,
        countryOfProduction,
        productTypeName,
        fits,
        constructionDescr,
        customerGroup,
        rootCategoryPath,
        productKey,
        productCountryOfProduction,
        showGarmentsInfo,
        yearOfProduction,
        presentationTypes,
        multipack,
        newProduct,
      })
    )
      .then((re) => {
        console.log(re.data);
        dispatch(AddDataSuccess());
        toast({
          title: "Add to cart Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(AddDataErr());
      });
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getDataByIdApi(articleCode))
      .then((re) => {
        dispatch(getDataSuccessById(re?.data?.product));
      })
      .catch((err) => dispatch(getDataErrorById()));

    getData(category).then((re) => {
      setScrollData(re.data);
    });
    setArticle(
      products?.articlesList?.filter((el) => el?.code == articleCode)[0]
    );
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    console.log(products);
  }, [articleCode, isAuth]);

  if (isError) {
    return <Text>error</Text>;
  }

  return (
    <div className={styles.single_page_box}>
      <div className={styles.singlepage}>
        <div>
          {loading ? (
            <div className={styles.img_box}>
              <Skeleton
                height={"500px"}
                width="100%"
                marginRight={"10px"}
              ></Skeleton>
              <Skeleton
                height={"500px"}
                width={{ base: "0%", sm: "100%" }}
              ></Skeleton>
            </div>
          ) : (
            <div className={styles.img_box}>
              <Image
                src={
                  products?.articlesList?.filter(
                    (el) => el?.code == articleCode
                  )[0]?.galleryDetails[0]?.baseUrl
                }
              />
              <Image
                src={
                  products?.articlesList?.filter(
                    (el) => el?.code == articleCode
                  )[0]?.galleryDetails[1]?.baseUrl
                }
              />
            </div>
          )}

          {/* only for mobile */}
          <div className={styles.single_page_details_mobile}>
            <Text>{products?.name}</Text>
            <Text>{`Rs. ${products?.whitePrice?.price}.00`}</Text>
            <Text>{products?.color?.text}</Text>
            <div className={styles.color_article}>
              {products?.articlesList?.splice(0, 4).map((el, i) => {
                return (
                  <Image
                    src={el?.galleryDetails[0]?.baseUrl}
                    key={i}
                    height="100px"
                    objectFit={"contain"}
                    padding="2px"
                    border={
                      articleCode == el?.code
                        ? "1px solid var(--text-color)"
                        : null
                    }
                    onClick={() => ChangeActiveArticle(el.code)}
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
            <Text display={"flex"} gap="10px" alignItems={"center"}>
              <CiCircleInfo />
              Standard delivery in 2-7 days
            </Text>
            <Text fontWeight={"500"}>Delivery and Payment</Text>
          </div>

          <div className={styles.composition_box}>
            <Text>{products?.description}</Text>
            <Text
              fontWeight={"500"}
              textDecoration="underline"
            >{`Composition`}</Text>
            <div>
              {products?.materialDetails?.map((el, i) => {
                return (
                  <Text>
                    <Text as={"span"} fontWeight="500">
                      {el?.name}
                    </Text>{" "}
                    - {el?.description}
                  </Text>
                );
              })}
            </div>
            <Text>
              <Text as={"span"} fontWeight="500">
                Art. No. ―
              </Text>{" "}
              {products?.code}
            </Text>
          </div>

          <div className={styles.gallary_img}>
            {products?.articlesList
              ?.filter((el) => el?.code == articleCode)[0]
              ?.galleryDetails?.splice(0, 6)
              ?.map((el) => {
                return <Image src={el?.baseUrl} />;
              })}
          </div>
        </div>

        {loading ? (
          <Box className={styles.single_page_details} position="static">
            <Skeleton
              height={"20px"}
              width="300px"
              marginBottom={"10px"}
            ></Skeleton>
            <Skeleton
              height={"55x"}
              width="200px"
              marginBottom={"10px"}
            ></Skeleton>
            <Skeleton
              marginBottom={"10px"}
              height={"10px"}
              width="150px"
            ></Skeleton>
            <div className={styles.color_article}>
              {[1, 1, 1, 1].map((el) => {
                return <Skeleton height={"100px"} width="60px"></Skeleton>;
              })}
            </div>

            <div className={styles.review_box}>
              <Skeleton width={"200px"} height="30px"></Skeleton>
            </div>

            <div className={styles.size_box}>
              <Skeleton
                width={"100%"}
                height="50px"
                marginTop={"30px"}
              ></Skeleton>
            </div>

            <div className={styles.add_to_cart_box}>
              <Skeleton
                width={"100%"}
                height="45px"
                marginTop={"30px"}
              ></Skeleton>
              <Skeleton
                width={"50px"}
                marginTop="10px"
                height="10px"
              ></Skeleton>
              <Skeleton
                marginTop="10px"
                width={"100px"}
                height="15px"
              ></Skeleton>
            </div>
          </Box>
        ) : (
          <div className={styles.single_page_details}>
            <Text>{products?.name}</Text>
            <Text>{`Rs. ${products?.whitePrice?.price}.00`}</Text>
            <Text>{products?.color?.text}</Text>
            <div className={styles.color_article}>
              {products?.articlesList?.splice(0, 4).map((el, i) => {
                return (
                  <Image
                    src={el?.galleryDetails[0]?.baseUrl}
                    key={i}
                    height="100px"
                    objectFit={"contain"}
                    padding="2px"
                    border={
                      articleCode == el?.code
                        ? "1px solid var(--text-color)"
                        : null
                    }
                    onClick={() => ChangeActiveArticle(el.code)}
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
                onClick={handleAddToCart}
              >
                <CiBag1 />
                Add to Cart
              </Button>
            </div>
            <Text display={"flex"} gap="10px" alignItems={"center"}>
              <CiCircleInfo />
              Standard delivery in 2-7 days
            </Text>
            <Text fontWeight={"500"}>Delivery and Payment</Text>
          </div>
        )}
      </div>

      {/* mobile add to cart */}
      <div className={styles.mobile_add_to_cart_btn}>
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
            onClick={handleAddToCart}
          >
            <CiBag1 />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className={styles.style_with_scroll}>
        <Text textAlign={"left"} fontWeight="500" fontSize={"20px"}>
          Style with
        </Text>
        <Scroller data={scrollerData} c={category} />
      </div>
    </div>
  );
};
