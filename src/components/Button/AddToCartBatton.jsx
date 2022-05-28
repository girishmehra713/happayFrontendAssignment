import React, { useState } from "react";
import Button from "./Button";
import Styles from "./Button.module.scss";

const AddToCartButton = ({ variant }) => {
  const [qty, setQty] = useState(0);

  return (
    <>
      {!qty ? (
        <Button variant="outline" onClick={() => setQty(qty + 1)}>
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
            onClick={() => setQty((prev) => prev - 1)}
          >
            -
          </button>
          <div className={`${Styles.qtyCont}`}> {qty} </div>
          <button
            className={`${Styles.btns} ${Styles.right}`}
            onClick={() => setQty((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCartButton;
