import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as dataReducer } from "./dataReducer/reducer";
import { reducer as singleDataReducer } from "./dataReducer/SingleReducer";
const combineReducer = combineReducers({ dataReducer, singleDataReducer });

export const store = legacy_createStore(combineReducer, applyMiddleware(thunk));
