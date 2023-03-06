import * as types from "./actionType";
import axios from "axios";
import { DataPayload } from "../../constants";
const getDataReq = () => {
  return {
    type: types.GET_DATA_REQ,
  };
};

const getDataSuccess = (pa: DataPayload) => {
  return {
    type: types.GET_DATA_SUCC,
    payload: pa,
  };
};
const getDataError = () => {
  return {
    type: types.GET_DATA_ERR,
  };
};
