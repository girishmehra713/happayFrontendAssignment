import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QTY
} from "../action/cartActions";

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const newState = { ...state };
      if (action?.payload?.id && !newState[action?.payload?.id]) {
        newState[action?.payload?.id] = {
          ...action?.payload,
          qty: 1
        };
      }
      return newState;
    }
    case UPDATE_QTY: {
      const newState = JSON.parse(JSON.stringify(state));
      if (action?.payload?.id && newState[action?.payload?.id]) {
        newState[action?.payload?.id].qty += action?.payload?.val;
      }
      return newState;
    }
    case REMOVE_FROM_CART: {
      const newState = JSON.parse(JSON.stringify(state));
      if (action?.payload && newState[action?.payload]) {
        delete newState[action?.payload];
      }
      return newState;
    }
    default:
      return state;
  }
}
