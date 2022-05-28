import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={`${Styles.headerSection}`}>
        <h1 className={`${Styles.homePageHeader}`}>Most Popular</h1>
        <section className={`${Styles.cardSection}`}>
          <Card />
        </section>

        {/* <Link to="/order-summary">Order Summary</Link> */}
      </div>
    </>
  );
};

export default Home;
