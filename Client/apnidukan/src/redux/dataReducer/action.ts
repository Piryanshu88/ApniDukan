import * as types from "./actionType";
import axios, { AxiosResponse } from "axios";
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
export const getDataReqById = () => {
  return {
    type: types.GET_DATA_REQ_BY_ID,
  };
};

export const getDataSuccessById = (pa: DataPayload) => {
  return {
    type: types.GET_DATA_SUCC_BY_ID,
    payload: pa,
  };
};
export const getDataErrorById = () => {
  return {
    type: types.GET_DATA_ERR_BY_ID,
  };
};

const getCategoryData =
  (category: string, p: string | undefined) => (dispatch: any) => {
    dispatch(getDataReq());
    return axios.get(
      `https://rich-erin-walkingstick-hem.cyclic.app/products/${category}`,
      {
        params: {
          sortby: p,
        },
      }
    );
  };

const getDataByIdApi = (articleCode: string) => (dispatch: any) => {
  dispatch(getDataReqById());
  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
    params: { lang: "en", country: "in", productcode: articleCode },
    headers: {
      "X-RapidAPI-Key": "5735999d10msh3200276fa85f0e5p13992ajsn22063bf28982",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };
  return axios.request(options);
};

const getDataById = (id: string) => (dispatch: any) => {
  dispatch(getDataReqById());
  return axios.get(``);
};
export { getCategoryData, getDataByIdApi };
