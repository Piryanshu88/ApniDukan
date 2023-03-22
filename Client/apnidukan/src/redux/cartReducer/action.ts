import * as types from "./actionTypes";
import axios, { AxiosHeaders } from "axios";
import { loadData, saveData } from "../../utils/accesslocalStorage";
export const getDataReq = () => {
  return {
    type: types.GET_CART_REQ,
  };
};

export const getDataSuccess = (pa: any) => {
  return {
    type: types.GET_CART_SUCCESS,
    payload: pa,
  };
};
export const getDataError = () => {
  return {
    type: types.GET_CART_ERROR,
  };
};
export const delDataReq = () => {
  return {
    type: types.DEL_CART_REQ,
  };
};
export const delDataSuccess = () => {
  return {
    type: types.DEL_CART_SUCCESS,
  };
};
export const delDataErr = () => {
  return {
    type: types.DEL_CART_ERROR,
  };
};

export const AddDataReq = () => {
  return {
    type: types.ADD_CART_REQ,
  };
};
export const AddDataSuccess = () => {
  return {
    type: types.ADD_CART_SUCCESS,
  };
};
export const AddDataErr = () => {
  return {
    type: types.ADD_CART_ERROR,
  };
};

const getCartData = () => (dispatch: any) => {
  dispatch(getDataReq());
  return axios.get("https://rich-erin-walkingstick-hem.cyclic.app/cart", {
    headers: {
      Authorization: loadData("hm_token"),
    },
  });
};

const DeleteCartData = (p: string) => (dispatch: any) => {
  dispatch(delDataReq());
  return axios.delete(
    `https://rich-erin-walkingstick-hem.cyclic.app/cart/delete/${p}`,
    {
      headers: {
        Authorization: loadData("hm_token"),
      },
    }
  );
};

const addCartData = (payload: any) => (disptach: any) => {
  disptach(AddDataReq());
  return axios.post(
    "https://rich-erin-walkingstick-hem.cyclic.app/cart/add",
    payload,
    {
      headers: {
        Authorization: loadData("hm_token"),
      },
    }
  );
};

export { getCartData, addCartData, DeleteCartData };
