import React from "react";
import { useSelector } from "react-redux";
import AddToCartButton from "../components/Button/AddToCartBatton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from "../components/Navbar/Navbar";

const item = {
  id: 1,
  name: "food card",
  description: "This card is used for spending on Food merchants",
  final_price: 21,
  original_price: 30,
  img_url:
    "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png"
};
const OrderSumary = () => {
  return (
    <>
      <Navbar hideCart={true} />
      <div className="summarySection">
        <div className="headerSummary">
          <AiOutlineArrowLeft />
          <span className="backToHome">Back To Home</span>
          <h1 className={`${Styles.orderSummaryCount}`}>
            {" "}
            Order Summary (3 items)
          </h1>
        </div>
      </div>
    </>
  );
};

export default OrderSumary;
