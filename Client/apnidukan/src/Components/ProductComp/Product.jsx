import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  getCategoryData,
  getDataError,
  getDataSuccess,
} from "../../redux/dataReducer/action";
import styles from "./Product.module.css";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronDownIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import { ProductCard } from "./ProductCard/ProductCard";
import axios from "axios";
export const Product = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get("sort") || "recommended");
  const { isError, products, totalCount } = useSelector(
    (store) => store.dataReducer
  );
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setSearchParams({ sort: sort });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if (sort == "recommended") {
      dispatch(getCategoryData(category, ""))
        .then((re) => dispatch(getDataSuccess(re.data)))
        .catch((err) => dispatch(getDataError()));
    }
  }, [category, sort]);

  const sortBylow = (q, p) => {
    setSort(q);
    setLoading(true);
    console.log("sort", sort);
    setSearchParams({ sort: sort });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    dispatch(getCategoryData(category, p))
      .then((re) => dispatch(getDataSuccess(re.data)))
      .catch((err) => dispatch(getDataError()));
  };
  const bg = () => {
    return {
      background: "var(--bg-color)",
    };
  };
  const handlePage = (v) => {
    setPage(page + v);
    axios
      .get(
        `https://rich-erin-walkingstick-hem.cyclic.app/products/${category}?page=${
          page + v
        }`
      )
      .then((re) => dispatch(getDataSuccess(re.data)))
      .catch((err) => dispatch(getDataError()));
  };
  if (isError) {
    return (
      <Box>
        <Image
          objectFit={"contain"}
          width="50%"
          margin={"auto"}
          marginTop="20px"
          src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1921.jpg?w=996&t=st=1680264699~exp=1680265299~hmac=1e25e41a7b9788ac0f17907336152ff780cec607dd867d577e96987100cb3f00"
        />
      </Box>
    );
  }
  return (
    <div className={styles.products_box}>
      <div className={styles.products_category_name}>
        <Text>{`PRODUCTS RELATED TO ${category.toUpperCase()}`}</Text>
      </div>
      <div className={styles.products_sort_box}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            background="var(--bg-color)"
            _hover={{ background: "var(--bg-color)" }}
            _active={{ background: "var(--bg-color)" }}
            borderRadius="0"
            onMouseOut={bg}
          >
            SORT BY
          </MenuButton>
          <MenuList>
            <MenuItem
              background={sort == "recommended" ? "var(--maz-bg)" : ""}
              onClick={() => sortBylow("recommended", "")}
            >
              Recommended
            </MenuItem>
            <MenuItem
              background={sort == "high_by_price" ? "var(--maz-bg)" : ""}
              onClick={() => sortBylow("high_by_price", "desc")}
            >
              Highest Price
            </MenuItem>
            <MenuItem
              background={sort == "low_by_price" ? "var(--maz-bg)" : ""}
              onClick={() => sortBylow("low_by_price", "asc")}
            >
              Lowest Price
            </MenuItem>
          </MenuList>
        </Menu>
        <Flex>
          <Flex gap={"4px"} alignItems="center" justifyContent={"center"}>
            <IconButton
              colorScheme="red"
              isDisabled={page == 0}
              variant={"ghost"}
              icon={<ArrowBackIcon />}
              onClick={() => handlePage(-1)}
            />
            <Text>{page + 1}</Text>
            <IconButton
              colorScheme="red"
              variant={"ghost"}
              onClick={() => handlePage(1)}
              icon={<ArrowForwardIcon />}
            />
          </Flex>
          <Flex gap={"4px"} alignItems="center">
            <Text>{totalCount} items</Text>
            <AiOutlineAppstore fontSize={"19px"} />
          </Flex>
        </Flex>
      </div>
      <div className={styles.products_card_box}>
        {products?.map((el, i) => {
          return loading ? (
            <Stack>
              <Skeleton height="300px" />
              <Skeleton height="20px" />
              <Skeleton height="10px" />
            </Stack>
          ) : (
            <Link to={`/singleproduct/${el.articleCode}/${category}`}>
              <ProductCard {...el} key={i} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
