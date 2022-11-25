import { combineReducers } from "redux";

import { productReducer } from "./producsReducer";

export default combineReducers({
  products: productReducer,
});
