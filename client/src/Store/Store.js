import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import reducers from "./reducers/reducer";
import reduxThunk from "redux-thunk";

const initState = {};

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initState,
  enhancer(applyMiddleware(reduxThunk))
);

export default store;
