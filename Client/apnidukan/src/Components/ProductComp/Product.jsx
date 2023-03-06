import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCategoryData,
  getDataError,
  getDataSuccess,
} from "../../redux/dataReducer/action";

export const Product = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
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
  return <div>{totalCount}</div>;
};
