import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as dataReducer } from "./dataReducer/reducer";
import { reducer as singleDataReducer } from "./dataReducer/SingleReducer";
import { reducer as authReducer } from "./authReducer/reducer";
const combineReducer = combineReducers({
  dataReducer,
  singleDataReducer,
  authReducer,
});

export const store = legacy_createStore(combineReducer, applyMiddleware(thunk));
