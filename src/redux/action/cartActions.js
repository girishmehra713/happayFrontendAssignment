export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_QTY = "UPDATE_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addItemToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item
  };
}

export function updateQty(id, val) {
  return {
    type: UPDATE_QTY,
    payload: {
      id,
      val
    }
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  };
}
