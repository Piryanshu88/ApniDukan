import { loadData } from "../../utils/accesslocalStorage";
import * as types from "./actionTypes";
const intialData = {
  carts: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = intialData, { type, payload }: any) => {
  switch (type) {
    case types.GET_CART_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        carts: payload.cartItems,
      };
    case types.GET_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.DEL_CART_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.DEL_CART_SUCCESS:
      return {
        ...state,
        carts: [],
        cartLength: 0,
        isLoading: false,
      };
    case types.DEL_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
