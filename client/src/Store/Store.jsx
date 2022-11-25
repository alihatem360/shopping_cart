import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import reducer from "./reducers/reducer";
import reduxThunk from "redux-thunk";
// initial state
const initialState = {};

// extension for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(reduxThunk))
);
export default store;
