import { Button, Skeleton, Stack, Text } from "@chakra-ui/react";
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
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ProductCard } from "./ProductCard/ProductCard";
export const Product = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get("sort") || "recommended");
  const { isError, products, totalCount } = useSelector(
    (store) => store.dataReducer
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setSearchParams({ sort: sort });
    console.log("use", sort);
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

  if (isError) {
    return <div>Error</div>;
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
        <div>
          <Text>{totalCount} items</Text>
          <AiOutlineAppstore fontSize={"19px"} />
        </div>
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
