import * as types from "./actionTypes";
import axios, { AxiosResponse } from "axios";
import { User, UserPayload } from "../../constants";
const signUpReq = () => {
  return {
    type: types.SIGN_UP_REQ,
  };
};
const signUpSuccess = () => {
  return {
    type: types.SIGN_UP_SUCCESS,
  };
};
const signUpErr = () => {
  return {
    type: types.SIGN_UP_ERROR,
  };
};
const loginReq = () => {
  return {
    type: types.LOGIN_REQ,
  };
};
const loginSuccess = (user: UserPayload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};
const loginError = () => {
  return {
    type: types.LOGIN_ERROR,
  };
};
const signOutReq = () => {
  return {
    type: types.SIGN_OUT_REQ,
  };
};
const signOutSuccess = () => {
  return {
    type: types.SIGN_OUT_SUCCESS,
  };
};
const signOutErr = () => {
  return {
    type: types.SIGN_OUT_ERR,
  };
};

const login = (payload: User) => (dispatch: any) => {
  dispatch(loginReq());
  return axios.post(
    `https://rich-erin-walkingstick-hem.cyclic.app/user/login`,
    payload
  );
};
export {
  login,
  loginError,
  loginReq,
  loginSuccess,
  signOutErr,
  signOutReq,
  signOutSuccess,
};
