import * as types from "./actionType";
import axios from "axios";
import { DataPayload } from "../../constants";
export const getDataReq = () => {
  return {
    type: types.GET_DATA_REQ,
  };
};

export const getDataSuccess = (pa: DataPayload) => {
  return {
    type: types.GET_DATA_SUCC,
    payload: pa,
  };
};
export const getDataError = () => {
  return {
    type: types.GET_DATA_ERR,
  };
};

const getCategoryData = (category: string) => (dispatch: any) => {
  dispatch(getDataReq());
  return axios.get(
    `https://rich-erin-walkingstick-hem.cyclic.app/products/${category}`
  );
};
export { getCategoryData };
