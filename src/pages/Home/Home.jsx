import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Styles from "./home.module.scss";
import { AiOutlineStar } from "react-icons/ai";

import cardData from "../../data.json";

const Home = () => {
  // const getCardData = async () => {
  //   try {
  //     const url =
  //       "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json";
  //     let data = await fetch(url);
  //     let parsedData = data.json();
  //     setCardData(parsedData);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getCardData();
  // }, []);
  // console.log(cardData);
  return (
    <>
      <Navbar noShadow />
      <div className={`${Styles.headerSection}`}>
        <h1 className={`${Styles.homePageHeader}`}>Most Popular</h1>
        <div className="d-flex align-item-center">
          <div className={`${Styles.line}`}></div>
          <div className={`${Styles.starIconCont}`}>
            <AiOutlineStar />
          </div>
          <div className={`${Styles.line}`}></div>
        </div>
      </div>
      <section className={`${Styles.cardSection}`}>
        {cardData.map((ele) => {
          return (
            <Card
              key={ele.id}
              id={ele.id}
              cardImg={ele.img_url}
              cardName={ele.name}
              orgPrice={ele.original_price}
              finalPrice={ele.final_price}
              description={ele.description}
            />
          );
        })}
      </section>

      {/* <Link to="/order-summary">Order Summary</Link> */}
    </>
  );
};

export default Home;
