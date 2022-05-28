import React from "react";
import { Link } from "react-router-dom";
import Styles from "./style.module.scss";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className={`${Styles.navbar}`}>
      <a className="d-flex align-item-center" href="./">
        <img
          alt="Happay Logo"
          src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
          className={`${Styles.logo}`}
        />
        <h4 className={`${Styles.navHeading}`}> Happay </h4>
      </a>
      <div className="d-flex align-item-center">
        <Link to="/order-summary" className={`${Styles.cartIcon}`}>
          <FiShoppingCart />
          <span className={`${Styles.badge}`}> 2 </span>
        </Link>

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
