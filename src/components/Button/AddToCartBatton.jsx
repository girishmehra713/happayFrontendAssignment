import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeFromCart,
  updateQty
} from "../../redux/action/cartActions";
import Button from "./Button";
import Styles from "./Button.module.scss";

const AddToCartButton = ({ item = {}, variant }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const qty = cart[item.id] ? cart[item.id].qty : 0;

  function handleIncrement() {
    dispatch(updateQty(item.id, 1));
  }

  function handleDecrement() {
    if (qty === 1) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateQty(item.id, -1));
    }
  }

  function handleAdd() {
    dispatch(addItemToCart(item));
  }

  return (
    <>
      {!qty ? (
        <Button variant="outline" onClick={handleAdd}>
          Add to Cart
        </Button>
      ) : (
        <div
          className={`d-flex ${Styles.addToCartWrapper} ${
            variant === "primary" ? Styles.primary : ""
          }`}
        >
          <button
            className={`${Styles.btns} ${Styles.left}`}
            onClick={handleDecrement}
          >
            -
          </button>
          <div className={`${Styles.qtyCont}`}> {qty} </div>
          <button
            className={`${Styles.btns} ${Styles.right}`}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCartButton;
