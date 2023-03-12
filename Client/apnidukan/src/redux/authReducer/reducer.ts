import { UserAction } from "../../constants";
import { loadData, saveData } from "../../utils/accesslocalStorage";
import * as types from "./actionTypes";
const intialData = {
  isLoading: false,
  isAuth: loadData("hm_auth") || false,
  isError: false,
  token: "",
};
//console.log(intialData);
export const reducer = (state = intialData, { type, payload }: UserAction) => {
  console.log(type, payload);
  switch (type) {
    case types.SIGN_UP_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.LOGIN_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      saveData("hm_auth", true);
      saveData("hm_token", payload.token);
      return {
        ...state,
        isAuth: true,
        isLoading: false,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.SIGN_OUT_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGN_OUT_SUCCESS:
      localStorage.removeItem("hm_auth");
      localStorage.removeItem("hm_token");
      return {
        isLoading: false,
        isAuth: false,
        isSignup: false,
        user: "",
        isError: false,
      };
    case types.SIGN_OUT_ERR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
