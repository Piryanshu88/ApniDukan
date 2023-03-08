import React from "react";
import * as types from "./actionType";
const initialDataSinglePage = {
  products: {},
  isLoading: false,
  isError: false,
};

export const reducer = (
  state = initialDataSinglePage,
  { type, payload }: any
) => {
  switch (type) {
    case types.GET_DATA_REQ_BY_ID:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_SUCC_BY_ID:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case types.GET_DATA_ERR_BY_ID:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
