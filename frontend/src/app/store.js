import { applyMiddleware, createStore, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import inventoryReducer from "../reducers/inventoryReducer";
import salesReducer from "../reducers/saleReducer";

const reducers = combineReducers({
  items: inventoryReducer,
  sales: salesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
