import { Button, Text } from "@chakra-ui/react";
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
import { useParams } from "react-router-dom";
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
  const [sort, setSort] = useState("rec");
  const { isError, products, totalCount } = useSelector(
    (store) => store.dataReducer
  );
  useEffect(() => {
    dispatch(getCategoryData(category))
      .then((re) => dispatch(getDataSuccess(re.data)))
      .catch((err) => dispatch(getDataError()));
    console.log(products);
  }, []);

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
            onMouseOut={{ background: "var(--bg-color)" }}
          >
            SORT BY
          </MenuButton>
          <MenuList>
            <MenuItem
              background={sort == "rec" ? "var(--maz-bg)" : ""}
              onClick={() => setSort("rec")}
            >
              Recommended
            </MenuItem>
            <MenuItem
              background={sort == "desc" ? "var(--maz-bg)" : ""}
              onClick={() => setSort("desc")}
            >
              Highest Price
            </MenuItem>
            <MenuItem
              background={sort == "asc" ? "var(--maz-bg)" : ""}
              onClick={() => setSort("asc")}
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
          return <ProductCard {...el} key={i} />;
        })}
      </div>
    </div>
  );
};
