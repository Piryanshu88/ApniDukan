import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as dataReducer } from "./dataReducer/reducer";

const combineReducer = combineReducers({ dataReducer });

export const store = legacy_createStore(combineReducer, applyMiddleware(thunk));
