import React from "react";
import Styles from "./Button.module.scss";

const Button = ({ onClick, children, variant = "outline" }) => {
  return (
    <button
      className={`${Styles.btn} ${
        variant === "outline" ? Styles.btnOutline : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
