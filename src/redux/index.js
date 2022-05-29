import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import presistedMiddleware from "./middleware/presisted";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = JSON.parse(localStorage.getItem("REDUX_STORE") || `{}`);

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(presistedMiddleware))
);
