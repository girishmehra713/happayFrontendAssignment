import React from "react";
import { Link } from "react-router-dom";
import Styles from "./style.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = ({ hideCart = false, noShadow = false }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className={`${Styles.navbar} ${noShadow ? Styles.noShadow : ""}`}>
      <Link className="d-flex align-item-center" to="/">
        <img
          alt="Happay Logo"
          src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
          className={`${Styles.logo}`}
        />
        <h4 className={`${Styles.navHeading}`}> Happay </h4>
      </Link>
      <div className="d-flex align-item-center">
        {!hideCart && (
          <Link to="/order-summary" className={`${Styles.cartIcon}`}>
            <FiShoppingCart />
            {Object.keys(cart).length > 0 && (
              <span className={`${Styles.badge}`}>
                {Object.keys(cart).length}
              </span>
            )}
          </Link>
        )}

        <img
          src="https://airnfts.s3.amazonaws.com/profile-images/0xD9c4216cFE7c70344f80035B0bf5FBE01AA69d37_1619305985184.png"
          alt="profile pic"
          className={`${Styles.profileLogo}`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
