import { ActionPayload } from "../../constants";
import * as types from "./actionType";
const intialData = {
  products: [],
  isLoading: false,
  isError: false,
  totalCount: 0,
};
export const reducer = (
  state = intialData,
  { type, payload }: ActionPayload
) => {
  //console.log(type, payload);
  switch (type) {
    case types.GET_DATA_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_SUCC:
      return {
        ...state,
        isLoading: false,
        products: payload.data,
        totalCount: payload.totalCount,
      };
    case types.GET_DATA_ERR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
